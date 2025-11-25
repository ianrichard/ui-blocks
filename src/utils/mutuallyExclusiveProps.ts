export function getExclusiveProp(
  props: Record<string, unknown>,
  keys: string[],
  componentName: string
): string | undefined {
  if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
    const set = keys.filter((k) => !!props[k]);
    if (set.length > 1) {
      console.warn(
        `[${componentName}] Props [${set.join(
          ", "
        )}] are mutually exclusive. Only one should be set at a time.`
      );
    }
    return set[0];
  } else {
    return keys.find((k) => !!props[k]);
  }
}
