// import { LinearGradient } from 'react-native';

// Aeroduel theme
// Key colors: Red, Crimson, White
// Colors derived from our brand's co`lor scheme
export const AeroduelTheme = {
  dark: true,
  colors: {
    // primary
    background: 'rgba(255, 0, 0, 1)',
    card: 'rgba(145, 72, 72, 0.5)',
    text: 'rgba(255, 255, 255, 1)',
  }
};

// Dusk theme
// Key colors: Dark Gray, Light Gray, White
// Darker colors, for those that prefer them
export const DuskTheme = {
  dark: true,
  colors: {
    // primary
    background: 'rgba(44, 44, 44, 1)',
    card: 'rgba(134, 134, 134, 0.5)',
    text: 'rgba(255, 255, 255, 1)',
  }
};

// Light theme
// Key Colors: Sky Blue, Sky Blue (Lighter), Black
// Sky blue lighter theme, better contrast for outdoors
export const LightTheme = {
  dark: false,
  colors: {
    //primary
    background: 'rgba(196, 241, 251, 1)',
    card: 'rgba(235, 251, 255, 1)',
    text: 'rgba(0, 0, 0, 1)',
  }
};