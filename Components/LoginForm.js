import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputField from "./InputField";
import FormMutedText from "./FormMutedText";
import SubmitButton from "./SubmitButton";

class LoginForm extends Component {
  render() {
    return (
      <Form className="loginForm">
        <InputField
          text={"Usuario"}
          type={"user"}
          placeholder={"Escriba su Usuario"}
        />
        <InputField
          text={"Contraseña"}
          type={"password"}
          placeholder={"Escriba su Contraseña"}
        />
        <FormMutedText
          text={"Introduzca sus credenciales para accesar al sistema."}
        />
        <SubmitButton text={"Iniciar"} disabled={false} />
      </Form>
    );
  }
}

export default LoginForm;

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       buttonDisabled: false,
//     };
//   }

//   setInputValue(property, value) {
//     value = value.trim();

//     if (value.length > 12) {
//       return;
//     }

//     this.setState({
//       [property]: value,
//     });
//   }

//   resetForm() {
//     this.setState({
//       username: "",
//       password: "",
//       buttonDisabled: false,
//     });
//   }

//   async doLogin() {
//     if (!this.state.username) {
//       return;
//     }

//     if (!this.password) {
//       return;
//     }

//     this.setState({
//       buttonDisabled: true,
//     });

//     try {
//     } catch (e) {}
//   }

//   render() {
//     return <div className="loginForm"></div>;
//   }
// }

// export default LoginForm;
