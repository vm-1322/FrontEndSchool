import { breakpoints, media } from './variables';

export type ColorsType = {
  common: {
    black: string;
    white: string;
  };
  primary: string;
  secondary: string;

  [key: string]: string | Record<string, string>;
};

export type FontsType = {
  primary: string;

  [key: string]: string;
};

export type BreakpointsType = typeof breakpoints;
export type MediaType = typeof media;

export type ThemeType = {
  colors: ColorsType;
  fonts: FontsType;
  breakpoints: BreakpointsType;
  media: MediaType;
};

export const Theme: ThemeType = {
  colors: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: '#686868',
    secondary: '#ab3e26',
    mainBG: '#fdfdfd',
    textInfo: '#E66A26',
    starNoRating: '#b3b3b3',
    starRating: '#ffd700',
    blocked: '#d3d3d3',
  },
  fonts: {
    primary: 'Open Sans, sans-serif',
  },
  breakpoints,
  media,
};
