export type JsonLdNode = Record<string, unknown>;

export function siteRootUrl(siteUrl: URL) {
  return new URL("/", siteUrl).href;
}

export function absoluteUrl(siteUrl: URL, pathname: string) {
  return new URL(pathname, siteUrl).href;
}

export function siteNodeId(siteUrl: URL, suffix: string) {
  return `${siteRootUrl(siteUrl)}${suffix}`;
}

export function pageNodeId(siteUrl: URL, pathname: string, suffix: string) {
  return `${absoluteUrl(siteUrl, pathname)}${suffix}`;
}
