import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 

* {
    box-sizing: border-box;
    
}

body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins';
    font-size: 1.15em; 
    margin: 0;
    min-width: 900px;
}

p {
  opacity: 1;
    line-height: 1.5;
}
img {
    max-width: 100%;
}


select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    
    color: #444;
    background-color: #fff;
    
    padding: .6em 1.4em .5em .8em;
    margin: 0;
    
    border: 1px solid #aaa;
    border-radius: .5em;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  }
  
  select:hover {
    border-color: #888;
  }
  
  select:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  
  select:disabled {
    opacity: 0.5;
  }


`;

export default GlobalStyles;
