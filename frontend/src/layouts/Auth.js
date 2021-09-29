import React, { Component } from 'react';
// react library for routing
import { Route, Switch, Redirect } from "react-router-dom";
// All Routes
import routes from "../routes";
// All configuration
import { config } from "../config";

class Auth extends Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;

        // if (localStorage.getItem("login") !== null) {
        //     this.props.history.push(config.routes_frontend.layout.panel + config.routes_frontend.panel.dashboard);
        // }
    }

    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            const Components = prop.render;
            if (prop.for.some((substring) =>
                config.routes_frontend.layout.auth === substring
            )) {
                return (
                    <Route
                        path={config.routes_frontend.layout.auth + prop.path}
                        render={routeProps => (
                            <Components {...routeProps} />
                        )}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    render() {
        return (<>
            <Switch>
                {this.getRoutes(routes)}
                <Redirect
                    from="*"
                    to={config.routes_frontend.layout.auth + config.routes_frontend.auth.login}
                />
            </Switch>
        </>);
    }
}

export default Auth;