import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      brown: string;
      white: string;
      cream: string;
      lightGray: string;
    };
    fonts: {
      primary: string;
    };
  }
}
