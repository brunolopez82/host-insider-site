/**
 * Plain constants, deliberately NOT in a "use client" module.
 *
 * Importing a value from a `"use client"` file into a server component gives
 * back a client-reference proxy rather than the value itself, so string methods
 * on it fail at prerender time. Anything a server component needs as a real
 * value belongs here.
 */
export const SKOOL_URL = "https://www.skool.com/host-insider-pro-3263/about";

/** About Page da comunidade lusófona (Anfitriões Sérios) no Skool. */
export const SKOOL_URL_PT = "https://www.skool.com/host-insider-pro-5934/about";
