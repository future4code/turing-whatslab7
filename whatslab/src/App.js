import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Mensagem from './components/Mensagem.js';

// const GlobalStyle = createGlobalStyle `
//   body{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;

const DivAplicativo = styled.div `
    width: 600px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-image: initial;
    margin: 0 auto;
    justify-content: flex-end;
    background-color: #303030;
`;


const DivContainer = styled.div `
    display: flex;
    height: 100vh;
    align-items: center;
`;



function App() {
  return (
    <DivContainer>

      <DivAplicativo>

        <Mensagem/>

      </DivAplicativo>

    </DivContainer>
  );
}

export default App;
