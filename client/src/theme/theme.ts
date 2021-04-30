export type ThemeType = typeof light; // This is the type definition for my theme object.

export const light = {
  primary: "#FAFF00",
  secondary: "#FAFF00",
  text: "#000",
  background: "#fff",
};
export const dark: ThemeType = {
  primary: "#FAFF00",
  secondary: "#8443D8",
  text: "#fff",
  background: "#363537",
};

const theme = light; // set the light theme as the default.
export default theme;
