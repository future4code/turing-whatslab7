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

class Mensagem extends React.Component {
  state = {
    pessoas: [
      {
        nome: "João",
        email: "joao@f4.com"
      },
      {
        nome: "Amanda",
        email: "amanda@f4.com"
      }
    ],
    valorInputPessoa: "",
    valorInputEmail: "",
    valorInputTelefone: ""
  };

  adicionaPessoa = () => {
 
    const novaPessoa = {
     
      nome: this.state.valorInputPessoa,
      email: this.state.valorInputEmail,
      telefone: this.state.valorInputTelefone
    };

 
    const novoPessoas = [...this.state.pessoas, novaPessoa];

    this.setState({ pessoas: novoPessoas });
  };

  onChangeInputPessoa = event => {
   
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputEmail = event => {
    
    this.setState({ valorInputEmail: event.target.value });
  };

  onChangeInputTelefone = event => {
    this.setState({ valorInputTelefone: event.target.value });
  };

  render() {
    
    const listaDeComponentes = this.state.pessoas.map(pessoa => {
      return (
        <p>
          {pessoa.nome} - {pessoa.email} - {pessoa.telefone}
        </p>
      );
    });

    return (
      <div>

        <div>{listaDeComponentes}</div>
        
        <DivInputs>
          <ChatInput
            width={'20%'}
            value={this.state.valorInputPessoa}
            
            onChange={this.onChangeInputPessoa}
            placeholder={"Usuário"}
          />
          <ChatInput
            width={'70%'}
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"Mensagem"}
          />
          <BotaoEnviar width={'10%'} onClick={this.adicionaPessoa}>Enviar</BotaoEnviar>
        </DivInputs>
        
      </div>
    );
  }
}

export default Mensagem;
