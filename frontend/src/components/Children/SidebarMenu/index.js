import React, { Component } from 'react';
import { config } from '../../../config';
import { autoScrollTop } from '../../../function';

import routes from '../../../routes';

export default class index extends Component {
    render() {
        return (
            <>
                {/* <!-- Utilize Mobile Menu Start --> */}
                <div id="ltn__utilize-mobile-menu" class="ltn__utilize ltn__utilize-mobile-menu">
                    <div class="ltn__utilize-menu-inner ltn__scrollbar">
                        <div class="ltn__utilize-menu-head">
                            <div class="site-logo">
                                <a href="index.html"><img src="/img/logo.png" alt="Logo" /></a>
                            </div>
                            <button class="ltn__utilize-close">×</button>
                        </div>
                        <div class="ltn__utilize-menu">
                            <ul>
                                {routes.filter(val => {
                                    if (val.for.some(v => "webmenu".includes(v))) {
                                        return true
                                    }
                                    return false
                                }).map(val => {
                                    return <>
                                        <li>
                                            <a href={val.path} onClick={(e) => {
                                                e.preventDefault();
                                                if (this.props.location.pathname !== val.path) {
                                                    this.props.history.push(val.path);
                                                    autoScrollTop();
                                                }
                                            }}>{val.title}</a>
                                        </li>
                                    </>;
                                })}
                                {localStorage.getItem("login") ? <>
                                    <li onClick={() => {
                                        this.props.history.push(config.routes_frontend.layout.auth + config.routes_frontend.auth.logout)
                                    }}>
                                        <a href={config.routes_frontend.layout.auth + config.routes_frontend.auth.logout} onClick={e => {
                                            e.preventDefault();
                                        }}>Keluar</a>
                                    </li>
                                </> : <>

                                </>}
                            </ul>
                        </div>
                        <div class="ltn__social-media-2">
                            <ul>
                                <li><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="#" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- Utilize Mobile Menu End --> */}
            </>
        )
    }
}
