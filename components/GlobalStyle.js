import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html,
body {
  background-color: #12121C;
  padding: 0;
  margin: 0;
  /* font-family: 'Sora', sans-serif; */
  font-family: 'Sora', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

code {
  background: #f7f8fa;
  border: 1px solid #f4f6f8;
  color: #041434;
  width: 100%;
  padding: 10px 20px;

}


/* width */
::-webkit-scrollbar {
  overflow: overlay;
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #88888d59; 
  border-radius: 15px;
  opacity:0.1;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:  #88888dad; 
  opacity:1;
}
`;
