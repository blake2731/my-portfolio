export function joinBase(base: string, path: string): string {
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, "");
  return `${normalizedBase}${normalizedPath}`;
}

export function withBase(path: string): string {
  return joinBase(import.meta.env.BASE_URL, path);
}
