import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Mensagem from './components/Mensagem.js';

const GlobalStyle = createGlobalStyle `
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const DivContainer = styled.div `
    max-width: 600px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-image: initial;
    flex: 1 1 0%;
    /* Revisar sobre flex 1 1 0% */
`;

const DivChat = styled.div `
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    flex: 1 1 0%;
    padding: 20px;
`;




function App() {
  return (
    <DivContainer>

      <DivChat>
        
      </DivChat>

       <Mensagem/>

    </DivContainer>
  );
}

export default App;
