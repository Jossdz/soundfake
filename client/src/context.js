import React, { createContext } from "react";
import AUTH_SERVICE from "./services/auth";

export const MyContext = createContext();

class MyProvider extends React.Component {
  state = {
    loggedUser: null,
  };

  componentDidMount = async () => {
    const {
      data: { user },
    } = await AUTH_SERVICE.CURRENT_USER();
    this.logUser(user);
  };

  logUser = (user) => {
    this.setState({ loggedUser: user });
  };

  logout = async () => {
    await AUTH_SERVICE.LOGOUT();
    this.setState({
      loggedUser: null,
    });
  };

  render() {
    const { loggedUser } = this.state;
    const { logUser, logout } = this;
    return (
      <MyContext.Provider value={{ loggedUser, logUser, logout }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
