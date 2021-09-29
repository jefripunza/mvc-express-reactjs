import React, { Component } from 'react';
import { refreshPage } from '../../function';

import { google } from "./setup";

// add on html : <script src="https://apis.google.com/js/api.js"></script>

class GoogleAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: null,
            isLoaded: false,
            isButton: null,
            email: null,
        };
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: google.clientID,
                    scope: 'email', // and whatever else passed as a string...
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.handleAuthChange();
                    this.auth.isSignedIn.listen(this.handleAuthChange);
                }).catch(error => {
                    console.log(error)
                });
        });
    }

    handleAuthChange = () => {
        if (this.state.isLoaded) {
            const {
                Et,
                Ne,
                RT,
                TR,
                gJ,
                mS,
            } = this.auth.currentUser.Td.Ts;
            const user = {
                email: Et,
                namapanjang: Ne,
                namadepan: RT,
                namabelakang: TR,
                foto: gJ,
                token: mS,
            }
            if (this.state.isButton === "signin") {
                if (this.props.debug) {
                    console.log("login awal", user);
                }
                this.props.isFirstLogged(user);
                this.setState({
                    email: user.email,
                });
            } else {
                if (this.props.debug) {
                    console.log("Logout!", user);
                }
                if (this.props.isLogout) {
                    this.props.isLogout(user);
                }
            }
        } else {
            if (this.props.isLogged) {
                if (this.props.debug) {
                    console.log("status login", this.auth.isSignedIn.get());
                }
                this.props.isLogged(this.auth.isSignedIn.get());
            }
            if (this.auth.isSignedIn.get()) {
                this.setState({
                    email: this.auth.currentUser.Td.Ts.Et,
                });
            }
        }
        this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
            isLoaded: true,
            isButton: null,
        });
    };

    handleSignIn = () => {
        this.setState({
            isButton: "signin",
        });
        this.auth.signIn();
    };

    handleSignOut = (apa) => {
        this.setState({
            isButton: "signout",
        });
        this.auth.signOut();
        if (!apa) {
            refreshPage();
        }
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <>
                <Button
                    onClick={() => this.handleSignOut(null)}
                    children={"Session Habis, Silahkan Login Ulang !!"}
                    style={{ padding: 8 }}
                />
            </>;
        } else if (this.state.isSignedIn) {
            return <>
                <Button
                    onClick={() => this.handleSignOut(true)}
                    children={"Sign Out (" + this.state.email + ")"}
                    style={{ padding: 8 }}
                />
            </>;
        } else {
            return <>
                <Button
                    onClick={this.handleSignIn}
                    children="Sign in with google"
                    style={{ padding: 8 }}
                />
            </>;
        }
    }
    render() {
        return <div>
            <style>
                {`
                    @import url(https://fonts.googleapis.com/css?family=Roboto:500);

                    .google-btn {
                        width: auto;
                        height: 42px;
                        background-color: #4285f4;
                        border-radius: 2px;
                        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
                    }

                    .google-btn .google-icon-wrapper {
                        position: absolute;
                        margin-top: 1px;
                        margin-left: 1px;
                        width: 40px;
                        height: 40px;
                        border-radius: 2px;
                        background-color: #fff;
                    }

                    .google-btn .google-icon {
                        position: absolute;
                        margin-top: 11px;
                        margin-left: 11px;
                        width: 18px;
                        height: 18px;
                    }

                    .google-btn .btn-text {
                        // margin: 11px 11px 0 0;
                        // margin-top: 8px !important;
                        color: #fff;
                        font-size: 14px;
                        letter-spacing: 0.2px;
                        font-family: "Roboto";
                    }

                    .google-btn:hover {
                        box-shadow: 0 0 6px #4285f4;
                    }

                    .google-btn:active {
                        background: #1669F2;
                    }
                `}
            </style>
            {this.renderAuthButton()}
        </div>;
    }
}

export default GoogleAuth;


class Button extends Component {
    render() {
        const {
            style,
            children,
        } = this.props;
        return (
            <>
                <div class="google-btn" onClick={this.props.onClick}>
                    <div class="google-icon-wrapper">
                        <img class="google-icon" src={require("../../assets/img/google-logo.svg").default} alt="google logo" />
                    </div>
                    <p class="btn-text text-center" style={{ ...style }}>
                        {children}
                    </p>
                </div>
            </>
        )
    }
}
