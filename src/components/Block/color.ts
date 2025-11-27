export function getColorProps(
  backgroundInverse: boolean,
  backgroundSecondary: boolean
) {
  if (backgroundInverse) {
    return { bg: "blue.6", color: "white" };
  }
  if (backgroundSecondary) {
    return { bg: "gray.1", color: "black" };
  }
  return {};
}
