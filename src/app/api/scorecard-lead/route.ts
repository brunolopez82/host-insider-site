/**
 * Scorecard lead capture.
 *
 * Fails open, always. The host has their full report on screen before this
 * route is ever called, so a missing API key or a Kit outage must never look
 * to them like the scorecard broke. Every path returns 200 with a flag, and
 * the component ignores the body.
 *
 * To activate: set KIT_API_KEY and KIT_FORM_ID in the Vercel project's
 * environment variables. Until both exist this logs the address to the
 * function log and nothing else happens — which is why the response
 * distinguishes "stored" from "logged", so a glance at the Vercel logs tells
 * you which mode it ran in.
 */

const KIT_ENDPOINT = "https://api.kit.com/v4";

type Body = { email?: unknown; total?: unknown };

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return Response.json({ ok: false, reason: "bad_json" });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const total = typeof body.total === "number" ? body.total : null;

  // Cheap sanity check. Kit does its own validation; this just avoids
  // spending a request on obvious junk.
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return Response.json({ ok: false, reason: "invalid_email" });
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    console.log(
      `[scorecard] lead not stored (Kit not configured): ${email} scored ${total ?? "?"}`,
    );
    return Response.json({ ok: true, stored: false, reason: "not_configured" });
  }

  try {
    const res = await fetch(`${KIT_ENDPOINT}/forms/${formId}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify({
        email_address: email,
        // Sent as a custom field so the first email can open on their number.
        // Create a "scorecard_total" field in Kit or this is simply ignored.
        fields: total === null ? {} : { scorecard_total: String(total) },
      }),
    });

    if (!res.ok) {
      console.error(
        `[scorecard] Kit rejected ${email}: ${res.status} ${await res.text()}`,
      );
      return Response.json({ ok: true, stored: false, reason: "kit_error" });
    }

    return Response.json({ ok: true, stored: true });
  } catch (err) {
    console.error("[scorecard] Kit request failed", err);
    return Response.json({ ok: true, stored: false, reason: "network" });
  }
}
