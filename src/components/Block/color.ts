export function getColorProps(inverse: string, secondary: string) {
  if (inverse) {
    return { bg: "blue.6", color: "white" };
  }
  if (secondary) {
    return { bg: "gray.1", color: "black" };
  }
  return {};
}
