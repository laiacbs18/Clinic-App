import React from "react";
import Form from "react-bootstrap/Form";

class InputField extends React.Component {
  render() {
    return (
      <div className="inputLogin">
        <Form.Group>
          <Form.Label>{this.props.text}</Form.Label>
          <Form.Control
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </Form.Group>
      </div>
    );
  }
}

export default InputField;
