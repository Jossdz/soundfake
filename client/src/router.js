import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AppLayout from "./components/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import CreateSong from "./pages/CreateSong";
import SongDetail from "./pages/SongDetail";

const AppRouter = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/song/create" component={CreateSong} />
        <Route exact path="/song/:songId" component={SongDetail} />
      </Switch>
    </AppLayout>
  </Router>
);

export default AppRouter;
