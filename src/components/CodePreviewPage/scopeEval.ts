export default function scopeEval<T = any>(
  source: string,
  scope: Record<string, unknown>
): T {
  const keys = Object.keys(scope).filter((key) => key !== "this");
  const values = keys.map((key) => scope[key]);
  // eslint-disable-next-line no-new-func
  return new Function(...keys, `return eval(${JSON.stringify(source)});`)(
    ...values
  ) as T;
}
