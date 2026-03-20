// Design System - Single source of truth for all visual tokens
// Change values here to update the entire site

export const layout = {
  sidePad: "px-6 md:px-12 lg:px-16",
} as const;

export const colors = {
  // Primary palette
  primary: "#1E3AD9",
  primaryDark: "#263DBF",
  primaryLight: "#5F72D9",

  // Accessible accent for text on dark backgrounds (ratio ~6.5:1)
  accentOnDark: "#6B7FFF",
  // Accessible accent for text on light backgrounds (ratio ~5.5:1)
  accentOnLight: "#1A32B8",

  // Backgrounds
  bgDark: "#0D0D0D",
  bgLight: "#F2F2F2",

  // Text
  textLight: "#F2F2F2",
  textDark: "#0D0D0D",

  // Neutrals
  neutral900: "#171717",
  neutral800: "#262626",
  neutral700: "#404040",
  neutral600: "#525252",
  neutral500: "#737373",
  neutral400: "#a1a1a1",
} as const;

// Current theme
export const theme = {
  bg: colors.bgDark,
  fg: colors.textLight,
  accent: colors.primary,
  accentText: colors.accentOnDark,
  accentTextLight: colors.accentOnLight,
  accentDark: colors.primaryDark,
  accentLight: colors.primaryLight,
  surface: colors.neutral900,
  border: colors.neutral800,
  muted: colors.neutral500,
} as const;
