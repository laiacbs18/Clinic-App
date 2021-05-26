import React from "react";
import MainHeader from "./Components/MainHeader";
import LoginForm from "./Components/LoginForm";
import UserDao from "./data/UserDao";

class App extends React.Component {
  render() {
    return (
      <div className="container login">
        <div className="row">
          <div className="col col-md-6 offset-md-3">
            <MainHeader text={"Bienvenidos"} />
            <LoginForm />
            <UserDao />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
