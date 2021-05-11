import React from "react";
import LoginForm from "./Components/LoginForm";

class App extends React.Component {
  render() {
    return (
      <div className="container login">
        <div className="row">
          <div className="col col-md-6 offset-md-3">
            <h1>Bienvenidos</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
