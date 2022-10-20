import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    color: '$gray100',
    backgroundColor: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontWeight: 400,
    fontFamily: 'Roboto',
  },
});