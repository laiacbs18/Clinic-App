import React from "react";
import Button from "react-bootstrap/Button";

class SubmitButton extends React.Component {
  render() {
    return (
      <div className="loginButton">
        <Button
          className="btn"
          disabled={this.props.disabled}
          // onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </Button>
      </div>
    );
  }
}

export default SubmitButton;
