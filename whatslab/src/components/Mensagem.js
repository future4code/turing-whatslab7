import React from "react";
import styled from 'styled-components';

// Elementos de estilização
const DivInputs = styled.div `
    display: flex;
`;

const ChatInput = styled.input `
    width: ${props => props.width};
`;

const BotaoEnviar = styled.button `
    width: ${props => props.width};
`;

const DivChat = styled.div `
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
`;

const DivContainer = styled.div `
`;

const BotaoRemoverMensagem = styled.button `
    width: 10%;
    height: 20px;
    margin-left: 10px;
`;

const DivMensagemSingle = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

class Mensagem extends React.Component {
  state = {
    arrayMensagem: [],
    valorInputUsuario: "",
    valorInputMensagem: "",

  };

  adicionarNovaMensagem = () => {
 
    const objetoMensagem = {
     
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

 
    const novaMensagem = [...this.state.arrayMensagem, objetoMensagem];

    this.setState({ arrayMensagem: novaMensagem });

    this.setState({valorInputMensagem: ""});
  };

//   deletarMensagem = mensagemParaDeletar => {
//     const novaListaDeMensagem = this.state.arrayMensagem.filter(item => {
//         return item.mensagem !== mensagemParaDeletar;
//     });

//     this.setState({
//         arrayMensagem: novaListaDeMensagem
//     });

//   };

  apertouEnter = (event) => {
      if (event.key === 'Enter'){
          this.adicionarNovaMensagem()
      }
  }

  onChangeInputUsuario = event => {
   
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = event => {
    
    this.setState({ valorInputMensagem: event.target.value });
  };


  render() {
    
    const listaNovasMensagens = this.state.arrayMensagem.map(mensagemSingle => {
      return (
        <DivMensagemSingle>
            <p>
            <strong>{mensagemSingle.usuario}:</strong> {mensagemSingle.mensagem}
            </p>
            {/* <BotaoRemoverMensagem
                onClick={() => {
                 this.deletarMensagem(item.mensagem);
                 }}
            >Deletar</BotaoRemoverMensagem> */}
        </DivMensagemSingle>
      );
    });

    return (
      <DivContainer>

        <DivChat>{listaNovasMensagens}</DivChat>
        
        <DivInputs>
          <ChatInput
            width={'15%'}
            value={this.state.valorInputUsuario}
            
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <ChatInput
            width={'75%'}
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            onKeyPress={this.apertouEnter}
            placeholder={"Mensagem"}
          />
          <BotaoEnviar width={'10%'} onClick={this.adicionarNovaMensagem}>Enviar</BotaoEnviar>
        </DivInputs>
        
      </DivContainer>
    );
  }
}

export default Mensagem;
