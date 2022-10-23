import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
html {
  overflow-y: overlay;
}

  body {
    font-family: 'Satoshi', sans-serif;
    color: ${({ theme }) => theme.colors.dark};
    /* background-color: #eef0f1;  */
    background-color: #f3f5f5; 
    height: 100vh;

    /* ${({ theme }) => `
        background-color: ${theme.colors.gradient_bg_color};
        background-image: radial-gradient(${theme.colors.gradient_spot1_w} ${theme.colors.gradient_spot1_h} at left ${theme.colors.gradient_spot1_x} top ${theme.colors.gradient_spot1_y}, ${theme.colors.gradient_spot1_color}, transparent),radial-gradient(${theme.colors.gradient_spot2_w} ${theme.colors.gradient_spot2_h} at left ${theme.colors.gradient_spot2_x} top ${theme.colors.gradient_spot2_y}, ${theme.colors.gradient_spot2_color}, transparent),radial-gradient(${theme.colors.gradient_spot3_w} ${theme.colors.gradient_spot3_h} at left ${theme.colors.gradient_spot3_x} top ${theme.colors.gradient_spot3_y}, ${theme.colors.gradient_spot3_color}, transparent), radial-gradient(${theme.colors.gradient_spot4_w} ${theme.colors.gradient_spot4_h} at left ${theme.colors.gradient_spot4_x} top ${theme.colors.gradient_spot4_y}, ${theme.colors.gradient_spot4_color}, transparent);
    `} */
  }


  
  a, button, input, textarea {
    color: inherit;
    text-decoration: none;
    font-family: 'Satoshi', sans-serif;
  }

  button {
    cursor: pointer;
  }

  input:hover, input:focus {
    outline: none;
    transition: box-shadow 0.1s linear;
    box-shadow: 0 0 0 4px #ff330015;
  }

  ::selection {
  color: ${({ theme }) => theme.colors.white};;
  background: ${({ theme }) => theme.colors.dark};;
}
`;
