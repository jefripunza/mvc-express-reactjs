import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";
import { google } from "../setup";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // wajib
    };
    this.onSuccessLogout = this.onSuccessLogout.bind(this)
    this.onFailureLogout = this.onFailureLogout.bind(this)
  }

  onSuccessLogout() {
    if (this.props.debug) {
      console.log(`Success Logout!`);
    }
    this.props.onSuccessLogout(true);
  }

  onFailureLogout(e) {
    if (this.props.debug) {
      console.log(`Failed: `, e);
    }
    this.props.onFailureLogout(e);
  }

  render() {
    return (
      <GoogleLogout
        {...this.props}
        clientId={google.clientID}
        buttonText={this.props.children}
        onLogoutSuccess={this.onSuccessLogout}
        onFailure={this.onFailureLogout}
      ></GoogleLogout>
    );
  }
}
