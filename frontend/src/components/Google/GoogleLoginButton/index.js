import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { google } from "../setup";

import GoogleLogoutButton from "../GoogleLogoutButton"


export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  componentDidMount() {
    console.log({ window });
  }

  onSuccessLogin(response) {
    if (this.props.debug) {
      console.log(`Success: `, response);
    }
    this.props.onSuccessLogin(response);
  }
  onFailureLogin(response) {
    if (this.props.debug) {
      console.log(`Failed: `, response);
    }
    if (this.props.onFailureLogin) {
      this.props.onFailureLogin(response);
    }
  }

  render() {
    return (
      <>
        <GoogleLogin
          clientId={google.clientID}
          buttonText={this.props.children}
          onSuccess={(e) => this.onSuccessLogin(e)}
          onFailure={(e) => this.onFailureLogin(e)}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </>
    );
  }
}
