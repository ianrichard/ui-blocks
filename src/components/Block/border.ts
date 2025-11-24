export function getBorderProps(
  border?: boolean,
  borderTop?: boolean,
  borderRight?: boolean,
  borderBottom?: boolean,
  borderLeft?: boolean,
  inverse?: boolean
) {
  const style: React.CSSProperties = {};
  if (border || borderTop || borderRight || borderBottom || borderLeft) {
    if (border || borderTop) style.borderTop = "1px solid";
    if (border || borderRight) style.borderRight = "1px solid";
    if (border || borderBottom) style.borderBottom = "1px solid";
    if (border || borderLeft) style.borderLeft = "1px solid";

    // Set border color based on scenario
    if (inverse) {
      style.borderColor = "var(--mantine-color-white)";
    } else {
      style.borderColor = "var(--mantine-color-border)";
    }
    return { borderStyles: style };
  }
  return {};
}
