import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      default: string;
      primary: string;
      secondary: string;
      white: string;
      gray: string;
    };
    fonts: {
      primary: string;
    };
  }
}
