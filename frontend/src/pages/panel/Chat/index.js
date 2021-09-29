import React, { Component } from 'react';
import $ from "jquery";
import socket from "../../../components/SocketIO";

import { config } from '../../../config';

import { timetostring } from "../../../utils/date"

import "./style.css";

import { scrollToBottomChat, smoothScrollToBottomChat } from "../../../utils/scroll";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: [],
            select_client: false,
            message: [],
            input_message: null,
        }
        this.adminClientAvailable = this.adminClientAvailable.bind(this)
        this.adminClientMessage = this.adminClientMessage.bind(this)
        this.chatMessage = this.chatMessage.bind(this)
    }

    componentDidMount() {
        this.props.nowPage(config.routes_frontend.panel.chat)
        document.title = this.props.title;

        // listener
        socket.on("admin:client_available", this.adminClientAvailable); // backend interval
        socket.on("admin:client_message", this.adminClientMessage);
        socket.on("chat:message", this.chatMessage)
    }
    // ================================================================
    adminClientAvailable(client) {
        // console.log({ client });
        this.setState({
            client,
        })
    }
    adminClientMessage(message) {
        // console.log({ message });
        setTimeout(() => {
            this.setState({
                message,
            })
            scrollToBottomChat(".chatContainerScroll");
        }, 200);
    }
    chatMessage(get) {
        delete get._id;
        if (this.state.select_client) {
            if (get.from === this.state.select_client.email.split("@")[0] && !get.isAdmin) {
                const last_message = this.state.message;
                last_message.push(get)
                this.setState({
                    message: last_message,
                })
                smoothScrollToBottomChat(".chatContainerScroll");
            }
        }
    }
    // ================================================================
    componentWillUnmount() {
        socket.off("admin:client_available", this.adminClientAvailable);
        socket.off("admin:client_message", this.adminClientMessage);
        socket.off("chat:message", this.chatMessage)
    }

    sendMessage() {
        const now_time = new Date().getTime();
        //
        const message = this.state.message;
        const new_message = {
            uuid: this.uuid,
            isAdmin: true,
            from: this.state.select_client.email.split("@")[0], // gmail admin
            message: String(this.state.input_message),
            time: now_time,
        };
        message.push(new_message);
        this.setState({
            message,
        })
        //
        socket.emit("chat:message", new_message);
        //
        smoothScrollToBottomChat(".chatContainerScroll");
        //
        document.querySelector(".input-chat").value = null;
        this.setState({
            input_message: null,
        });
    }

    render() {
        return (
            <>
                <h1 class="app-page-title">Chat App</h1>

                {/* <!-- Content wrapper start --> */}
                <div class="content-wrapper chat-wrapper">

                    {/* <!-- Row start --> */}
                    <div class="row gutters">

                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                            <div class="card chat-card m-0">

                                {/* <!-- Row start --> */}
                                <div class="row no-gutters">
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                                        <div class="chat-users-container">
                                            <div class="chat-search-box">
                                                <div class="input-group">
                                                    <input class="form-control chat-form-control" placeholder="Search" />
                                                    <div class="input-group-btn">
                                                        <button type="button" class="btn btn-info chat-btn">
                                                            <i class="fa fa-search chat-i"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="chat-users chat-ul">
                                                {this.state.client.map(client => {
                                                    return (
                                                        <li class={"person chat-li" + (this.state.select_client.email === client.email ? " user-select" : "")} onClick={() => {
                                                            if (this.state.select_client.email !== client.email) {
                                                                this.setState({
                                                                    select_client: client,
                                                                    message: [],
                                                                });
                                                                socket.emit("admin:get_message", client.email.split("@")[0])
                                                            }
                                                        }}>
                                                            <div class="chat-user">
                                                                <img src={client.foto} className="chat-img" alt="Retail Admin" />
                                                                {client.online ? <span class="status online"></span> : null}
                                                            </div>
                                                            <p class="name-time">
                                                                <span class="name">{client.nama_panjang}</span>
                                                                <br />
                                                                <span class="time">{client.email}</span>
                                                            </p>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">

                                        {this.state.select_client ? <>
                                            <div class="selected-chat-user mt-2">
                                                <div class="profile-container">
                                                    <img src={this.state.select_client.foto} className="profile-avatar" alt="Retail Admin" />
                                                    <h5>{this.state.select_client.nama_panjang}</h5>
                                                </div>
                                            </div>
                                            <div class="chat-container">
                                                <ul class="chat-box chat-ul chatContainerScroll">

                                                    {this.state.message.map(client => {
                                                        if (client.isAdmin) {
                                                            return (
                                                                <li class="chat-right chat-li">
                                                                    <div class="chat-text" style={{ marginRight: 10 }}>
                                                                        <div className="msg-wrapper">
                                                                            {client.message}
                                                                        </div>
                                                                        <div class="chat-hour chat-hour-right">
                                                                            <span class="fa fa-check-circle icon-checklist"></span>&nbsp;{timetostring(client.time)}
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        } else {
                                                            return (
                                                                <li class="chat-left chat-li">
                                                                    <div class="chat-text">
                                                                        <div className="msg-wrapper">
                                                                            {client.message}
                                                                        </div>
                                                                        <div class="chat-hour chat-hour-left">
                                                                            <time>{timetostring(client.time)}</time>&nbsp;<span class="fa fa-check-circle icon-checklist"></span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        }
                                                    })}

                                                </ul>
                                                <div class="form-group mt-3 mb-0">
                                                    <textarea
                                                        class="form-control chat-form-control input-chat autoresizing"
                                                        rows="3"
                                                        placeholder="Type your message here..."
                                                        onChange={event => {
                                                            if (String(event.target.value).length > 0) {
                                                                this.setState({
                                                                    input_message: event.target.value
                                                                })
                                                            } else {
                                                                this.setState({
                                                                    input_message: null
                                                                })
                                                            }
                                                        }}
                                                        onKeyDown={event => {
                                                            function autoresizing(event) {
                                                                event.target.style.height = 'auto';
                                                                event.target.setAttribute("style", "height:" + (event.target.scrollHeight) + "px;overflow-y:hidden;");
                                                                event.target.style.height = (event.target.scrollHeight) + 20 + 'px';
                                                            }
                                                            if (event.keyCode === 13 && event.ctrlKey) {
                                                                this.sendMessage()
                                                                autoresizing(event)
                                                            } else if (event.keyCode === 13) {
                                                                // console.log("enter", event.target.scrollHeight)
                                                                autoresizing(event)
                                                                //
                                                                setTimeout(() => {
                                                                    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
                                                                }, 100)
                                                            } else if (event.keyCode === 8) {
                                                                // console.log("backspace", event.target.scrollHeight)
                                                                autoresizing(event)
                                                            }
                                                        }}
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </> : <>
                                            <div className="zero-container">
                                                select client target
                                            </div>
                                        </>}
                                    </div>
                                </div>
                                {/* <!-- Row end --> */}
                            </div>

                        </div>

                    </div>
                    {/* <!-- Row end --> */}

                </div>
                {/* <!-- Content wrapper end --> */}
            </>
        );
    }
}

export default Chat;