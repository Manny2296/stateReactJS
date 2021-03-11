import React, { Component } from "react";
//{}
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensagem: "",
      data: "",
      nome: ""
    };
  }
  render() {
    /* Agora o conteudo de nosso componente va a 
    virar um stateless component ! 
    */
    return (
      <div>
        <h4>
          {this.state.mensagem} - {this.state.nome}
        </h4>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}
