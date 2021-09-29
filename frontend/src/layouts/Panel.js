import React, { Component } from 'react';
// react library for routing
import { Route, Switch, Redirect } from "react-router-dom";
// All Routes
import routes from "../routes";
// All configuration
import { config } from "../config";

import { ContainerPanel } from '../components/Container';



class Panel extends Component {
    constructor(props) {
        super(props)
        const now_page = "/" + String(this.props.location.pathname).split("/")[2];
        this.state = {
            page: now_page,
        }
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;

        // if (localStorage.getItem("login") === null) {
        //     this.props.history.push(config.routes_frontend.layout.auth + config.routes_frontend.auth.login);
        // }
    }

    getRoutes = (routes, submenu = false) => {
        return routes.map((prop, key) => {
            if (prop.submenu) {
                return this.getRoutes(prop.submenu, prop.path)
            }
            if ((prop.for && prop.for.some((substring) =>
                config.routes_frontend.layout.panel === substring
            )) || submenu) {
                const Components = prop.render;
                let new_path = config.routes_frontend.layout.panel;
                if (submenu) {
                    new_path += submenu + prop.path
                } else {
                    new_path += prop.path
                }
                // console.log(new_path);
                return (
                    <Route
                        path={new_path}
                        render={routeProps => (
                            <Components
                                {...routeProps}
                                nowPage={(page) => {
                                    // console.log("layout", page);
                                    this.setState({
                                        page,
                                    })
                                }}
                            />
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return (<>
            <ContainerPanel {...this.props} page={this.state.page}>
                <Switch>
                    {this.getRoutes(routes)}
                    <Redirect
                        from="*"
                        to={config.routes_frontend.layout.panel + config.routes_frontend.panel.dashboard}
                    />
                </Switch>
            </ContainerPanel>
        </>);
    }
}

export default Panel;