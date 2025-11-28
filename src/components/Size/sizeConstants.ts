export const SIZE_VALUES = ["xs", "sm", "md", "lg", "xl"] as const;
export type MantineSizes = (typeof SIZE_VALUES)[number];
