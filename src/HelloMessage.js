import React, { Component } from "react";
class HelloMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Jhon",
      lastName: "Doe",
      avatarUrl: ""
    };
  }

  changeName = () => {
    this.setState({
      lastName: "IronHacker",
      avatarUrl:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    });
  };
  limpiar = () => {
    this.setState({
      firstName: "Jhon",
      lastName: "Doe",
      avatarUrl: ""
    });
  };
  render() {
    return (
      <div>
        Muito obrigado, {this.state.firstName} {this.state.lastName}!
        <br />
        <br />
        <img src={this.state.avatarUrl} className="img-lifecycle" alt="logo" />
        <button onClick={this.changeName}>Mudar o valor do State </button>
        <button onClick={this.limpiar}>Limpar </button>
      </div>
    );
  }
}
export default HelloMessage;
