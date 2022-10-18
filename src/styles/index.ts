import { createStitches } from "@stitches/react";

export const {
  css,
  theme,
  styled,
  config,
  keyframes,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  theme:{
    colors:{
      white: '#FFFFFF',
      gray900: '#202024',
      gray300: '#C4C4CC',
      gray100:'#E1E1E6',
      green500: '#00875F',
      green300: '#00B37E',
    }
  }
});