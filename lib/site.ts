/** Public origin supplied by the deployment platform or an owner-reviewed domain. */
export function getSiteUrl(): string | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined;
  const platformDomain = process.env.VERCEL_ENV === "production" ? process.env.VERCEL_PROJECT_PRODUCTION_URL : undefined;
  const value = configured ?? (platformDomain ? `https://${platformDomain}` : undefined);
  if (!value) return undefined;
  const parsed = new URL(value);
  if (parsed.protocol !== "https:" || parsed.username || parsed.password || parsed.search || parsed.hash || parsed.pathname !== "/") {
    throw new Error("The public site URL must be an HTTPS origin without credentials, path, query or fragment.");
  }
  return parsed.origin;
}
