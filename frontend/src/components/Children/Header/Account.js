import React, { Component } from 'react'
import { config } from '../../../config';

export default class Account extends Component {
    render() {
        return (
            <>
                <div class="ltn__drop-menu user-menu">
                    <ul>
                        <li>
                            <a href="#account" onClick={e => {
                                e.preventDefault();
                            }}><i class="icon-user"></i></a>
                            <ul>
                                {localStorage.getItem("login") ? <>
                                    {this.props.location.pathname !== config.routes_frontend.layout.panel + config.routes_frontend.user[localStorage.getItem("status")] ? <>
                                        <li onClick={() => {
                                            this.props.history.push(config.routes_frontend.layout.panel + config.routes_frontend.user[localStorage.getItem("status")]) // dynamic user
                                        }}>
                                            <a href={config.routes_frontend.layout.panel + config.routes_frontend.user[localStorage.getItem("status")]} onClick={e => {
                                                e.preventDefault();
                                            }}>Akun Saya</a>
                                        </li>
                                    </> : null}
                                    <li onClick={() => {
                                        this.props.history.push(config.routes_frontend.layout.auth + config.routes_frontend.auth.logout)
                                    }}>
                                        <a href={config.routes_frontend.layout.auth + config.routes_frontend.auth.logout} onClick={e => {
                                            e.preventDefault();
                                        }}>Keluar</a>
                                    </li>
                                </> : <>
                                    <li onClick={() => {
                                        this.props.history.push(config.routes_frontend.layout.auth + config.routes_frontend.auth.login)
                                    }}>
                                        <a href={config.routes_frontend.layout.auth + config.routes_frontend.auth.login} onClick={e => {
                                            e.preventDefault();
                                        }}>Masuk</a>
                                    </li>
                                    <li onClick={() => {
                                        this.props.history.push(config.routes_frontend.layout.auth + config.routes_frontend.auth.signup)
                                    }}>
                                        <a href={config.routes_frontend.layout.auth + config.routes_frontend.auth.signup} onClick={e => {
                                            e.preventDefault();
                                        }}>Daftar</a>
                                    </li>
                                </>}
                            </ul>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
