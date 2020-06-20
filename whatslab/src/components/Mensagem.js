import React from "react";
import styled from 'styled-components';
import send from '../imagem/send.svg';

// Elementos de estilização
const DivInputs = styled.div `
    display: flex;
    background-color: #141414;
    justify-content: space-around;
    align-items: center;
    height: 50px;
`;

const ChatInput = styled.input `
    width: ${props => props.width};
    border-radius: 10px;
    border:none;
    height: 37px;
    &:focus {
      outline: none;
    } 
    padding-left: 8px;
`;


const IconEnviar = styled.img `
    width: 20px;
    &:hover {
      fill: #fff;
    } 
`;

const BotaoEnviar = styled.button `
    width: ${props => props.width};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border:none;
    border-radius: 10px;
    background-color: #fff;
    transition: 400ms;
    &:hover {
      background-color: #E5E5E5;
    } 
    &:focus {
      outline: none;
    } 
`;

const DivChat = styled.div `
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
    background-color: #303030;
`;

const DivContainer = styled.div `
`;

const BotaoRemoverMensagem = styled.button `
    width: 10%;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    margin-right: 10px;
    padding: 5px 0;
    border-radius: 8px;
    color: #fff;
    background-color: rgba(0,0,0,0);
    border: solid 0.5px #fff;
    transition: 300ms;
    &:hover {
      background-color: #fff;
      color: #000;
    } 
`;

const DivMensagemSingle = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px #fff;
    border-radius: 5px 15px 20px 20px;
    margin-bottom: 8px;
`;

const TextoMensagem = styled.div `
    line-height: 1.5em;
    padding: 5px 5px;
    color: #fff;
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

    deletarMensagem = mensagemParaDeletar => {
      const novaListaDeMensagem = this.state.arrayMensagem.filter(item => {
          return item.mensagem !== mensagemParaDeletar;
      });

      this.setState({
          arrayMensagem: novaListaDeMensagem
      });

    };

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
        <DivMensagemSingle key={mensagemSingle.mensagem}>
            <TextoMensagem>
            <strong>{mensagemSingle.usuario}:</strong> {mensagemSingle.mensagem}
            </TextoMensagem>
            <BotaoRemoverMensagem
                onClick={() => {
                 this.deletarMensagem(mensagemSingle.mensagem);
                 }}
            >Deletar</BotaoRemoverMensagem>
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
            width={'65%'}
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            onKeyPress={this.apertouEnter}
            placeholder={"Mensagem"}
          />
          <BotaoEnviar width={'10%'} onClick={this.adicionarNovaMensagem}><IconEnviar src={send} alt=""/></BotaoEnviar>
        </DivInputs>
        
      </DivContainer>
    );
  }
}

export default Mensagem;
