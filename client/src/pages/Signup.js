import React, { Component } from "react";
import { Typography } from "antd";

import AuthForm from "../components/AuthForm";

import AUTH_SERVICE from "../services/auth";

class Signup extends Component {
  onFinish = async (values) => {
    await AUTH_SERVICE.SIGNUP(values);
    this.props.history.push("/login");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <section className="diuritainer">
        <Typography.Title style={{ marginBottom: "50px" }}>
          Signup
        </Typography.Title>
        <AuthForm
          title="Sign up"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        />
      </section>
    );
  }
}

export default Signup;
