import React from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  LoginOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MyContext } from "../context";

const { Header, Content, Footer, Sider } = Layout;

class AppLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <MyContext.Consumer>
        {({ loggedUser, logout }) => (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<LoginOutlined />}>
                  <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<LoginOutlined />}>
                  <Link to="/signup">Signup</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<LogoutOutlined />} onClick={logout}>
                  Logout
                </Menu.Item>
                <Menu.Item key="5" icon={<DesktopOutlined />}>
                  <Link to="/song/create">Create song</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "0 16px" }}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  {this.props.children}
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Diejoss | Ironhack
              </Footer>
            </Layout>
          </Layout>
        )}
      </MyContext.Consumer>
    );
  }
}

export default AppLayout;
