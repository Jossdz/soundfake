import React, { Component } from "react";
import { MyContext } from "../context";
import { Typography } from "antd";

import AuthForm from "../components/AuthForm";

import AUTH_SERVICE from "../services/auth";

class Login extends Component {
  onFinish = async (values) => {
    const { data } = await AUTH_SERVICE.LOGIN(values);
    this.context.logUser(data.user);
    this.props.history.push("/profile");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <section className="diuritainer">
        <Typography.Title style={{ marginBottom: "50px" }}>
          Login
        </Typography.Title>
        <AuthForm
          title="Log in"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        />
      </section>
    );
  }
}

Login.contextType = MyContext;

export default Login;
