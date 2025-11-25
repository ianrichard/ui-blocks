// Maps abstract size tokens to Mantine Title order
export function mapAbstractSizeToMantineOrder(size?: string): number {
  switch (size) {
    case "xs":
      return 6;
    case "sm":
      return 5;
    case "md":
      return 4;
    case "lg":
      return 3;
    case "xl":
      return 2;
    case "xxl":
      return 1;
    default:
      return 4; // Mantine default
  }
}

// Utility to normalize and map any size to Mantine Title order
type AnySize = string | number | undefined;
export function getMantineTitleOrder(
  size: AnySize,
  increment: number = 0
): 1 | 2 | 3 | 4 | 5 | 6 {
  let normalized: string | undefined = undefined;
  if (typeof size === "string") normalized = size;
  else if (typeof size === "number") normalized = String(size);
  const baseOrder = mapAbstractSizeToMantineOrder(normalized);
  // Mantine order: 1 (largest) to 6 (smallest)
  let newOrder = baseOrder + increment * -1; // increment -1 means bigger heading (lower number)
  newOrder = Math.max(1, Math.min(6, newOrder));
  return newOrder as 1 | 2 | 3 | 4 | 5 | 6;
}

// Utility to normalize and map any size to Mantine Text size
const validMantineTextSizes = ["xs", "sm", "md", "lg", "xl"] as const;
type MantineTextSize = (typeof validMantineTextSizes)[number] | undefined;
export function getMantineTextSize(
  size: string | number | undefined,
  increment: number = 0
): MantineTextSize {
  const order = ["xs", "sm", "md", "lg", "xl"];
  let resolved: MantineTextSize = undefined;
  if (
    typeof size === "string" &&
    (validMantineTextSizes as readonly string[]).includes(size)
  )
    resolved = size as MantineTextSize;
  else if (typeof size === "number") {
    switch (size) {
      case 0:
        resolved = "xs";
        break;
      case 1:
        resolved = "sm";
        break;
      case 2:
        resolved = "md";
        break;
      case 3:
        resolved = "lg";
        break;
      case 4:
        resolved = "xl";
        break;
      default:
        resolved = undefined;
    }
  }
  if (resolved) {
    const idx = order.indexOf(resolved);
    const newIdx = Math.max(0, Math.min(order.length - 1, idx + increment));
    return order[newIdx] as MantineTextSize;
  }
  return resolved;
}

// Utility to normalize and map any size to Mantine Button size
const validMantineButtonSizes = ["xs", "sm", "md", "lg", "xl"] as const;
type MantineButtonSize = (typeof validMantineButtonSizes)[number] | undefined;
export function getMantineButtonSize(
  size: string | number | undefined,
  increment: number = 0
): MantineButtonSize {
  const order = ["xs", "sm", "md", "lg", "xl"];
  let resolved: MantineButtonSize = undefined;
  if (
    typeof size === "string" &&
    (validMantineButtonSizes as readonly string[]).includes(size)
  ) {
    resolved = size as MantineButtonSize;
  } else if (typeof size === "number") {
    switch (size) {
      case 0:
        resolved = "xs";
        break;
      case 1:
        resolved = "sm";
        break;
      case 2:
        resolved = "md";
        break;
      case 3:
        resolved = "lg";
        break;
      case 4:
        resolved = "xl";
        break;
      default:
        resolved = undefined;
    }
  }
  if (resolved) {
    const idx = order.indexOf(resolved);
    const newIdx = Math.max(0, Math.min(order.length - 1, idx + increment));
    return order[newIdx] as MantineButtonSize;
  }
  return resolved;
}

// Utility to normalize and map any size to Mantine Spacing size
const validMantineSpacings = ["xs", "sm", "md", "lg", "xl"] as const;
type MantineSpacing = (typeof validMantineSpacings)[number] | undefined;
export function getMantineSpacing(
  size: string | number | undefined,
  increment: number = 0
): MantineSpacing {
  const order = ["xs", "sm", "md", "lg", "xl"];
  let resolved: MantineSpacing = undefined;
  if (
    typeof size === "string" &&
    (validMantineSpacings as readonly string[]).includes(size)
  )
    resolved = size as MantineSpacing;
  else if (typeof size === "number") {
    switch (size) {
      case 0:
        resolved = "xs";
        break;
      case 1:
        resolved = "sm";
        break;
      case 2:
        resolved = "md";
        break;
      case 3:
        resolved = "lg";
        break;
      case 4:
        resolved = "xl";
        break;
      default:
        resolved = undefined;
    }
  }
  if (resolved) {
    const idx = order.indexOf(resolved);
    const newIdx = Math.max(0, Math.min(order.length - 1, idx + increment));
    return order[newIdx] as MantineSpacing;
  }
  return resolved;
}

// Generic utility to map abstract prop values to DLS-specific values
export function mapAbstractProp<T>(
  map: Record<string, T>,
  value: string | number | undefined,
  fallback: T
): T {
  if (typeof value === "string" && value in map) return map[value];
  if (typeof value === "number" && value.toString() in map)
    return map[value.toString()];
  return fallback;
}
