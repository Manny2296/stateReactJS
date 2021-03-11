import React from "react";
import "./styles.css";
import Mycomponent from "./mycomponent";
import { Divider } from "@material-ui/core";
import DespedidaComponent from "./DespedidaComponent";

export default function App() {
  return (
    <div className="App">
      <Divider />
      <h1 style={{ color: "white" }}>
        Ola! <p style={{ color: "rgb(45, 197, 250)" }}>Ironhackers !</p>
      </h1>
      <img
        src="https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
        className="App-logo"
        alt="logo"
      />
      <h2 style={{ color: "white" }}>
        Vamos aprender um pouco mais sobre o{" "}
        <p style={{ color: "rgb(45, 197, 250)" }}>React State </p>
      </h2>
      {/* <img src="https://eco2.com.co/wp-content/uploads/2020/06/react.png" className="App-logo" alt="logo" />
       */}
      <Divider />
      <Mycomponent />
      <DespedidaComponent />
    </div>
  );
}
