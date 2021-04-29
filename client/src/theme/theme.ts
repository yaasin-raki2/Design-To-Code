export type ThemeType = typeof light; // This is the type definition for my theme object.

export const light = {
  primary: "#f45511",
  secondary: "#f45511",
  text: "#000",
  background: "#fff",
};
export const dark: ThemeType = {
  primary: "#f45511",
  secondary: "#fff",
  text: "#fff",
  background: "#363537",
};

const theme = light; // set the light theme as the default.
export default theme;
