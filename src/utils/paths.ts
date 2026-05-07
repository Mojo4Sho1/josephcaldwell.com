const rawBase = import.meta.env.BASE_URL ?? "/";

const normalizedBase = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export function withBase(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|mailto:|tel:|#)/i.test(path)) {
    return path;
  }

  const trimmed = path.startsWith("/") ? path.slice(1) : path;

  if (trimmed === "") {
    return normalizedBase;
  }

  return `${normalizedBase}${trimmed}`;
}

export function isCurrentPath(currentPath: string, target: string): boolean {
  const resolvedTarget = withBase(target);
  const stripTrailing = (value: string) =>
    value.length > 1 && value.endsWith("/") ? value.slice(0, -1) : value;

  return stripTrailing(currentPath) === stripTrailing(resolvedTarget);
}
