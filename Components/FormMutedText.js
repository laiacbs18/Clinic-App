import React from "react";
import Form from "react-bootstrap/Form";

class FormMutedText extends React.Component {
  render() {
    return (
      <div className="mutedTextLogin">
        <Form.Text className="text-muted">{this.props.text}</Form.Text>
      </div>
    );
  }
}

export default FormMutedText;
