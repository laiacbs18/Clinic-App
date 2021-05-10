import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
// import App from "../../node-postgres/App";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class User extends React.Component {
  render() {
    return (
      <div className="container login">
        <div className="row">
          <div className="col col-md-6 offset-md-3">
            <h1>Bienvenidos</h1>
            <Form className="loginForm">
              <Form.Group controlId="Login">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="user" placeholder="Digíte su Usuario" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digíte su Contraseña"
                />
              </Form.Group>
              <Form.Text className="text-muted">
                Introduzca sus credenciales para accesar al sistema.
              </Form.Text>
              <Button className="loginButton" variant="primary" type="submit">
                Entrar
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<User />, document.getElementById("root"));
