import React from "react";

import "./styles.css";
import Conteudo from "./Conteudo";
import HelloMessage from "./HelloMessage";
class Mycomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //console.log(props);
  }

  render() {
    return (
      <div className="mycomponent">
        <h3>Conteudo</h3>
        <Conteudo />
        <h3>Demostraçao</h3>
        <HelloMessage />
      </div>
    );
  }
}
export default Mycomponent;
