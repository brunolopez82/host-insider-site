import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve the URL shape the live site already serves: /start/, /join/,
  // /free/<slug>/, /a/<variant>/. Paid traffic points at those exact URLs, and
  // without this Next canonicalises to the slashless form and 308s every one
  // of them — a redirect hop on every ad click, and a needless change to URLs
  // that are already published.
  trailingSlash: true,
};

export default nextConfig;

// Deliberately NOT restored here: output: "export" and images.unoptimized.
//
// Those two were a local workaround, not a property of the site. Windows blocks
// the symlinks the Vercel CLI needs to package a build, so the site was exported
// to static HTML here and the finished folder was uploaded by hand. They were
// never committed, which is why the live site cannot currently be reproduced
// from this repository.
//
// Building on Vercel removes the reason for both. A normal build does everything
// the export did and more, and dropping images.unoptimized lets Vercel's image
// optimisation do its job instead of shipping full-size files to phones — which
// matters, because the audience is mobile-first.
