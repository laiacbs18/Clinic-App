import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonDisabled: false,
    };
  }

  setInputValue(property, value) {
    value = value.trim();

    if (value.length > 12) {
      return;
    }

    this.setState({
      [property]: value,
    });
  }

  resetForm() {
    this.setState({
      username: "",
      password: "",
      buttonDisabled: false,
    });
  }

  async doLogin() {
    if (!this.state.username) {
      return;
    }

    if (!this.password) {
      return;
    }

    this.setState({
      buttonDisabled: true,
    });

    try {
    } catch (e) {}
  }

  render() {
    return <div className="loginForm"></div>;
  }
}

export default LoginForm;
