import React, { Component } from 'react';
import $ from "jquery";

import GoogleLoginButton from "../Google/GoogleLoginButton"
import GoogleLogoutButton from "../Google/GoogleLogoutButton"

import socket from "../../components/SocketIO";

import { timetostring } from "../../utils/date";

import { scrollToBottomChat, smoothScrollToBottomChat } from "../../utils/scroll";

import "./style.css";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            message: [],
            input_message: null,
            length: 0,
            google: false,
        }
        this.chatLastMessage = this.chatLastMessage.bind(this)
        this.newChatMessage = this.newChatMessage.bind(this)
    }

    uuid = localStorage.getItem("uuid");

    componentDidMount() {
        socket.on("chat:last_message", this.chatLastMessage); // listener
        //
        socket.on("chat:message", this.newChatMessage); // listener
    }
    //==============================================================
    chatLastMessage(get) {
        if (get.uuid === localStorage.getItem("uuid")) {
            this.setState({
                message: get.last_message,
            })
        }
    }
    newChatMessage(new_message) {
        // console.log({ new_message });
        if (localStorage.getItem("google_email") !== null && new_message.isAdmin && new_message.from === localStorage.getItem("google_email").split("@")[0]) { // add chat lawan
            const message = this.state.message;
            message.push(new_message);
            this.setState({
                message,
            })
            smoothScrollToBottomChat(".chat-care");
        }
    }
    //==============================================================
    componentWillUnmount() {
        socket.off("chat:last_message", this.chatLastMessage) // listener off
        socket.off("chat:message", this.newChatMessage) // listener off
    }

    formatChatSaya(message, time) {
        return <li class="saya clearfix">
            <div class="chat-body saya-color clearfix">
                <div class="header clearfix">
                    <small class="right text-muted">
                        {timetostring(time)}
                    </small>
                </div>
                <p className="msg-wrapper">
                    {message}
                </p>
            </div>
        </li>
    }

    formatChatLawan(from, foto, message, time) {
        return <li class="lawan clearfix">
            {/* <span class="chat-img left clearfix mx-2">
                <img src={foto} alt="lawan" class="img-circle" />
            </span> */}
            <div class="chat-body lawan-color clearfix">
                <div class="header clearfix">
                    {/* <strong class="primary-font">{from}</strong><br /> */}
                    <small class="right text-muted">
                        {timetostring(time)}
                    </small>
                </div>
                <p className="msg-wrapper">
                    {message}
                </p>
            </div>
        </li>
    }

    sendMessage() {
        const now_time = new Date().getTime();
        const {
            email,
        } = this.state.google.profileObj;
        //
        const message = this.state.message;
        const new_message = {
            uuid: this.uuid,
            from: email.split("@")[0], // gmail
            message: this.state.input_message,
            time: now_time,
        };
        message.push(new_message);
        this.setState({
            message,
        })
        //
        socket.emit("chat:message", new_message);
        //
        smoothScrollToBottomChat(".chat-care");
        //
        document.querySelector(".input-chat").value = null;
        this.setState({
            input_message: null,
        });
    }

    render() {
        return (
            <>
                <input
                    type="checkbox"
                    id="check"
                    value={this.state.check}
                />
                <label
                    class="live-chat-btn"
                    for="check"
                    onClick={e => {
                        this.setState({
                            check: !this.state.check,
                        });
                        if (!this.state.check) {
                            if (this.state.google) {
                                setTimeout(() => {
                                    smoothScrollToBottomChat(".chat-care");
                                }, 200);
                            }
                        }
                    }}
                >
                    <i class="fa fa-commenting-o comment"></i> 1
                    <i class="fa fa-close close"></i>
                </label>

                {/* <!-- Panel Chat --> */}
                {this.state.check ? <>
                    <div class="card live-chat-container">
                        <div class="card-header">
                            {this.state.google ? <>
                                <div class="d-table w-100">
                                    <p class="d-table-cell">
                                        <b className="text-left">{this.state.google.profileObj.name}</b>
                                        <br />
                                        <small>{this.state.google.profileObj.email}</small>
                                    </p>
                                    <div class="d-table-cell" style={{ textAlign: "right" }}>
                                        <GoogleLogoutButton
                                            className="text-right"
                                            onSuccessLogout={() => {
                                                // console.log(this.state.google.profileObj.email)
                                                socket.emit("chat:logout", this.state.google.profileObj.email)
                                                this.setState({
                                                    google: false,
                                                })
                                                localStorage.removeItem("google_email")
                                            }}
                                            onFailureLogout={failure => {
                                                // console.log({ failure })
                                                //
                                            }}
                                        >Logout</GoogleLogoutButton>
                                    </div>
                                </div>
                            </> : <>
                                <div className="col-12 text-center">
                                    <span className="text-left">Chat Box</span>
                                </div>
                            </>}
                        </div>
                        {!this.state.google ? <>
                            <div className="card-body text-center">
                                <GoogleLoginButton
                                    // debug
                                    onSuccessLogin={success => {
                                        this.setState({
                                            google: success,
                                        });
                                        const {
                                            givenName,
                                            name,
                                            email,
                                            imageUrl,
                                        } = success.profileObj;
                                        socket.emit("chat:add_user", {
                                            uuid: this.uuid,
                                            nama: givenName,
                                            nama_panjang: name,
                                            email,
                                            foto: imageUrl,
                                            create_at: (new Date()).getTime(),
                                        })
                                        localStorage.setItem("google_email", email)
                                        setTimeout(() => {
                                            smoothScrollToBottomChat(".chat-care");
                                        }, 200);
                                    }}
                                    onFailureLogin={failure => {
                                        //
                                    }}
                                >Login Google</GoogleLoginButton>
                            </div>
                        </> : <>
                            <div class="card-body chat-care">
                                <ul class="chat">
                                    {this.state.message.map(item => {
                                        if (item.from === this.state.google.profileObj.email.split("@")[0] && item.isAdmin) { // harusnya hanya admin
                                            return this.formatChatLawan(item.from, item.foto, item.message, item.time);
                                        } else {
                                            return this.formatChatSaya(item.message, item.time);
                                        }
                                    })}
                                </ul>
                            </div>
                        </>}
                        {this.state.google ? <>
                            <div class="card-footer">
                                <div class="input-group">
                                    <input type="text"
                                        class="form-control input-sm input-chat"
                                        placeholder="Type your message here..."
                                        value={this.state.input_message}
                                        onChange={event => {
                                            if (String(event.target.value).length > 0) {
                                                this.setState({
                                                    input_message: event.target.value,
                                                })
                                            } else {
                                                this.setState({
                                                    input_message: null,
                                                })
                                            }
                                        }}
                                        onKeyDown={event => {
                                            if (event.key === 'Enter') {
                                                this.sendMessage()
                                            }
                                        }}
                                    />
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary btn-radius" onClick={() => {
                                            this.sendMessage();
                                        }}>
                                            Send
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </> : null}
                    </div>
                </> : null}
                {/* <!-- End Panel Chat --> */}

            </>
        );
    }
}

export default index;

