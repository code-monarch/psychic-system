import { DefaultTheme } from 'styled-components';
import { MantineThemeOverride } from '@mantine/core';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        green: string;
        black: string;
        darkgrey: string;
        grey: string;
        lightgrey: string;
        white: string;
      };
      secondary: {
        red: string;
        blue: string;
        lightgreen: string;
        yellow: string;
        lightgrey: string;
        grey: string;
        darkgreen: string;
      };
    };
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: {
      green: '#4AB0A6',
      black: '#2E2E2E',
      darkgrey: '#4F4F4F',
      grey: '#828282',
      lightgrey: '#FAFAFA',
      white: '#FFFFFF',
    },
    secondary: {
      red: '#EC3D08',
      blue: '#233984',
      lightgreen: '#CAEF45',
      yellow: '#F5C14F',
      lightgrey: '#F5F5F5',
      grey: '#E3E2E2',
      darkgreen: '#015E5F',
    },
  },
};

export const mantineThemeOverrides: MantineThemeOverride = {
  colors: {
    green: [
      '#DAE1E0',
      '#C2D0CF',
      '#ABC3C1',
      '#94B9B5',
      '#7CB2AD',
      '#63B0A8',
      '#4AB0A6',
      '#4C958E',
      '#4B807B',
      '#486E6A',
    ],
  },
  primaryColor: 'green',
};
