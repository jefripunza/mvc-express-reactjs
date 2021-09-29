import React, { Component } from 'react';
// react library for routing
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import socket from "./components/SocketIO";

import {
  Error404,
  ErrorMaintenance,
  ErrorWebsocketDisconnect,
} from "./pages/errors";

import { generateRandomString } from "./helper/generate";
import { config, separate } from "./config";

import {
  LayoutAuth,
  LayoutPanel,
} from "./layouts";

import LiveChat from "./components/LiveChat";

import routes from "./routes";

let isLoaded = false;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maintenance: false,
      socket_disconnected: true,
    }
    this.thisInterval = this.thisInterval.bind(this)
  }

  thisInterval() {
    if (this.state.socket_disconnected !== socket.disconnected) {
      this.setState({
        socket_disconnected: socket.disconnected,
      });
      if (socket.disconnected) {
        clearInterval(this.interval);
      }
    }
  }

  componentDidMount() {
    // create uuid if not exist
    let uuid = localStorage.getItem("uuid");
    if (!uuid || uuid === null) {
      uuid = generateRandomString(30);
      localStorage.setItem("uuid", uuid)
    }

    // handle anchor button
    document.addEventListener('click', function (event) {
      event.preventDefault();                     // Don't navigate!
      const anchor = event.target.closest("a");   // Find closest Anchor (or self)
      if (!anchor) return;                        // Not found. Exit here.
      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');
      if (String(href).startsWith("#")) {
        const id = String(href).replaceAll("#", "");
        if (document.getElementById(id)) {
          document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
          });
        }
      } else if (target === "_blank") {
        window.open(href, '_blank').focus();
      }
    });

    // socket listener
    socket.on("welcome", welcome => this.welcome(welcome, uuid))
    socket.on("maintenance", this.maintenance);
  }
  // ===========================================================
  welcome(welcome, uuid) {
    // console.log({ welcome });
    this.interval = setInterval(this.thisInterval, 1000);
    socket.emit("thanks", {
      uuid,
    });
    this.setState({
      socket_disconnected: false,
    });
  }
  maintenance(maintenance) {
    this.setState({
      maintenance,
    });
  }
  // ===========================================================
  componentWillUnmount() {
    socket.off("welcome", this.welcome)
    socket.off("maintenance", this.maintenance);
    clearInterval(this.interval);
  }

  render() {
    const {
      maintenance,
      socket_disconnected,
    } = this.state;
    if (socket_disconnected && isLoaded) {
      return <ErrorWebsocketDisconnect />
    } else {
      if (maintenance) {
        return <ErrorMaintenance />
      } else {
        isLoaded = true;
        return (
          <>
            <BrowserRouter>
              <Switch>
                {/* Setup Layout */}
                <Route
                  path={config.routes_frontend.layout.auth}
                  render={(props) => <LayoutAuth {...props} />}
                />
                <Route
                  path={config.routes_frontend.layout.panel}
                  render={(props) => <LayoutPanel {...props} />}
                />

                {/* if route path "/login" ? redirect to real path */}
                {[
                  config.routes_frontend.auth.login,
                  "/masuk",
                  config.routes_frontend.layout.auth + "/masuk",
                ].map(login => {
                  return <Redirect
                    from={login}
                    to={config.routes_frontend.layout.auth + config.routes_frontend.auth.login} // real path login
                  />
                })}

                {/* if route path "/reset-password" ? redirect to real path */}
                {[
                  config.routes_frontend.auth.reset_password,
                ].map(login => {
                  return <Redirect
                    from={login}
                    to={config.routes_frontend.layout.auth + config.routes_frontend.auth.reset_password} // real path login
                  />
                })}

                {/* if route path "/signup" ? redirect to real path */}
                {[
                  config.routes_frontend.auth.signup,
                  "/daftar",
                  config.routes_frontend.layout.auth + "/daftar",
                ].map(signup => {
                  return <Redirect
                    from={signup}
                    to={config.routes_frontend.layout.auth + config.routes_frontend.auth.signup} // real path signup
                  />
                })}

                {/* if route path "/logout" ? redirect to real path */}
                {[
                  config.routes_frontend.auth.logout,
                  "/keluar",
                  config.routes_frontend.layout.auth + "/keluar",
                ].map(logout => {
                  return <Redirect
                    from={logout}
                    to={config.routes_frontend.layout.auth + config.routes_frontend.auth.logout} // real path logout
                  />
                })}

                {/* add index routes to routes.js */}
                {routes
                  .filter((route) => {
                    return route.for.some((substring) => substring === "index");
                  })
                  .map((route) => {
                    const Components = route.render;
                    return <Route
                      path={route.path}
                      exact
                      render={routeProps => (
                        <Components {...routeProps} />
                      )}
                    />;
                  })}

                {/* Error 404 */}
                <Route
                  path={"*"}
                  render={(props) => <Error404
                    {...props}
                    title={"404 Page Not Found!" + separate + config.app_name}
                  />}
                />
              </Switch>
            </BrowserRouter>
            <LiveChat />
          </>
        );
      }
    }
  }
}

export default App;



