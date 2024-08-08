// This code is used to generate the global styles required in the entire codebase

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

  /* dashboard */
  --color-blue-200: #7290C5;
  --color-blue-300: #4F70AB;
  --color-blue-500: #3a86ff;
  --color-green-500: #006F00;
  --color-black: #000000;
  --color-white: #ffffff;
  --color-offwhite-100: #fffff3;
  --color-offwhite-200: #F9F9F9;
  --color-offwhite-400: #F4F1F9;
 --color-offwhite-500: #F5F5F5;
  --color-offwhite-700: #ececec;
  --color-ash-100: #F8F9FA;
  --color-ash-200: #E9ECEF;
  --color-ash-300: #DEE2E6;
  --color-ash-400: #CED4DA;
  --color-ash-500: #ADB5BD;
  --color-ash-600: #6C757D;
  --color-ash-700: #495057;
  --color-ash-800: #343A40;
  --color-ash-900: #212529;
  --color-ash: #121212;
  --color-red-700: #ef233c;
  --color-red-900: #d90429;
  --color-transparent: #0000;

  /* LINE HEIGHT */
  --normal: 1.5;
  --input: 3.2rem;

  /* BORDER */
  --border-sm: 0.3px solid var(--color-blue-300);

  /* BORDER RADIUS */
  --border-radius-tiny: 3px;
  --border-radius-sm: 6px;
  --border-radius-md: 8px;
  --border-radius-lg: 15px;
  --border-radius-xl: 20px;
  --border-radius-xlg: 25px;
  --border-radius-2xlg: 40px;

  /* GENERAL SHADOW EFFECT */
  --shadow-sm: 0px -1.5px 0.5px 1.5px var(--color-blue-300);
  --shadow-md: 0px 1px 1px 0px rgba(0,0,0, .4);
  --shadow-lg: -1.5px 1.5px 2px 1px rgba(0,0,0, .5);
  


  --animation-2-linear:  1.8s linear infinite;
  --filter-timing: 100ms;
  --general-timing: 100ms;

  
}

.dark {
  --color-white: #1D1429;
  --color-offwhite-400: #1F182A;
  --color-offwhite-200: #1F182A;
  --color-pink-200: #312A3D;
  --color-ash-900: #F8F9FA;
  --color-ash-800: #E9ECEF;
  --color-ash-700: #DEE2E6;
  --color-ash-600: #CED4DA;
  --color-ash-500: #ADB5BD;
  --color-ash-400: #6C757D;
  --color-ash-300: #495057;
  --color-ash-200: #343A40;
  --color-ash-100: #212529;
 --color-transparent: #1F182A;
}

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;

    &::-webkit-scrollbar {
      width: .5rem;
      background-color: var(--color-blue-300);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-blue-300);
    }
}

button {
    cursor: pointer;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  background-color: inherit;
}

input,
input:focus,
select:focus,
textarea:focus{
    outline: none
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

::selection {
  color: var(--color-white);
  background-color: var(--color-blue-300);
}


`;

export default GlobalStyles;
