import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import Presentacion from "./Presentacion";
import StateLessComponent from "./StateLess";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    alignContent: "center",
    marginLeft: "3%"
  }
}));

export default function Conteudo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar alt="">1</Avatar>
          <Typography className={classes.heading}>Presentaçao</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Presentacion />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar alt="">2</Avatar>
          <Typography className={classes.heading} align="center">
            Falando sobre o State
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img
            src="https://eco2.com.co/wp-content/uploads/2020/06/state.jpg"
            className="App-logo"
            alt="logo"
          />

          <Typography align="justify">
            * Componentes no React possuim um objeto de estado interno. O objeto
            de estado é onde você armazena valores de propriedade que pertencem
            ao componente. Quando o objeto de estado é alterado, o componente é
            renderizado novamente. <br />
            <br />* o state é privado e completamente controlado pelo
            componente. Graças a la funçao{" "}
            <span style={{ color: "rgb(45, 197, 250)" }}> SetState </span>
            <br /> <br />* Para utilizarmos o state, precisamos primeiro
            conhecer a segunda forma de criar um componente, que são os
            componentes de classe (StatefullComponents).
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar alt="">3</Avatar>
          <Typography className={classes.heading} align="center">
            Um Componente com Estado (Statefull component)
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img
            src="https://eco2.com.co/wp-content/uploads/2020/06/statefullcomponent2.jpg"
            className="img-statefull"
            alt="logo"
          />
          <Typography>
            <Typography align="justify">
              * Acceso as propiedades do componente via{" "}
              <span style={{ color: "rgb(45, 197, 250)" }}>this.props</span>
              <br />
            </Typography>
            <Typography align="justify">
              * Usa um estado interno{" "}
              <span style={{ color: "rgb(45, 197, 250)" }}>this.state</span> e
              pode altera-lo usando a funçao{" "}
              <span style={{ color: "rgb(45, 197, 250)" }}>setState</span>
            </Typography>
            <Typography align="justify">
              * Usa{" "}
              <span style={{ color: "rgb(45, 197, 250)" }}>
                Lifecycle Methods{" "}
              </span>
            </Typography>

            <img
              src="https://eco2.com.co/wp-content/uploads/2020/06/Lifecycle2-2.jpg"
              className="img-lifecycle"
              alt="logo"
            />
            <br />
            <span style={{ color: "rgb(45, 197, 250)", fontSize: 8 }}>
              {" "}
              ** Tomado de React Oficial Documentation
            </span>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar alt="">4</Avatar>
          <Typography className={classes.heading} align="center">
            {" "}
            Componentes sem estado (Stateless Components)
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <StateLessComponent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar alt="">5</Avatar>
          <Typography className={classes.heading} align="center">
            Criando nossos Statefull e Stateless components{" "}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Vamos la ! fazer nossos proprios componentes : <br />
            <br />
            <br />
            <Typography align="justify">
              Crie um componente com estado. O estado deve conter{" "}
              <span style={{ color: "rgb(45, 197, 250)" }}>
                "nome do produto"
              </span>
              ,{" "}
              <span style={{ color: "rgb(45, 197, 250)" }}>
                "imagem do produto"
              </span>
              ,{" "}
              <span style={{ color: "rgb(45, 197, 250)" }}>
                "quantidade do produto"
              </span>{" "}
              e <span style={{ color: "rgb(45, 197, 250)" }}>"preço"</span>. A
              imagem, o nome, a quantidade e o preço do produto devem ser
              renderizados na página.
            </Typography>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
