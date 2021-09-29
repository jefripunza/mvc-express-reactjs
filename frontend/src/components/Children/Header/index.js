import React, { Component } from 'react';

import $ from "jquery";

// Components
// eslint-disable-next-line
import Mini from "./Mini";

import routes from '../../../routes';

import {
    autoScrollTop, prettyNumberPhone,
} from "../../../function";

import Search from "./Search";
import Account from './Account';
import { config } from '../../../config';

// Styling
import {
    UncontrolledTooltip,
} from "reactstrap";

export default class index extends Component {
    constructor(props) {
        super(props);
        const kontak = this.props.kontak;
        this.state = {
            kontak,
            kontak_look: kontak !== null || kontak.kontak !== null ? prettyNumberPhone(kontak.kontak) : "belum terkoneksi bot",
            pp_look: kontak !== null ? kontak.pp : null,
        }
    }
    componentDidMount() {
        // default
        this.props.searchFocus(false);
        this.props.searchValue(null);

        var $body = $('body');

        /* --------------------------------------------------------
            5. Toogle Search
        -------------------------------------------------------- */
        // Handle click on toggle search button
        $('.header-search-1').on('click', function () {
            $('.header-search-1, .header-search-1-form').toggleClass('search-open');
            return false;
        });

        var $ltn__utilizeToggle = $('.ltn__utilize-toggle'),
            $ltn__utilize = $('.ltn__utilize'),
            $ltn__utilizeOverlay = $('.ltn__utilize-overlay'),
            $mobileMenuToggle = $('.mobile-menu-toggle');
        $ltn__utilizeToggle.on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr('href');
            $body.addClass('ltn__utilize-open');
            $($target).addClass('ltn__utilize-open');
            $ltn__utilizeOverlay.fadeIn();
            if ($this.parent().hasClass('mobile-menu-toggle')) {
                $this.addClass('close');
            }
        });
        $('.ltn__utilize-close, .ltn__utilize-overlay').on('click', function (e) {
            e.preventDefault();
            $body.removeClass('ltn__utilize-open');
            $ltn__utilize.removeClass('ltn__utilize-open');
            $ltn__utilizeOverlay.fadeOut();
            $mobileMenuToggle.find('a').removeClass('close');
        });
    }
    render() {
        const {
            kontak,
            kontak_look,
            pp_look,
        } = this.state;
        return (
            <>
                {/* <!-- HEADER AREA START (header-5) --> */}
                <header class="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
                    {/* <Mini {...this.props} /> */}

                    {/* <!-- ltn__header-middle-area start --> */}
                    <div class="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="site-logo-wrap">
                                        <div class="site-logo">
                                            <img
                                                src={"/img/LOGO HAJI ANDI.png"}
                                                alt="Logo"
                                                style={{ width: 80 }}
                                            />
                                        </div>
                                        <div class="get-support clearfix">
                                            <div class="get-support-icon color-green-50">
                                                <i class="icon-whatsapp"></i>
                                            </div>
                                            <div class="get-support-info">
                                                <h6>Kontak BOT</h6>
                                                <h4>
                                                    <a id={"tooltip-profile-picture-whatsapp"} href={"https://wa.me/" + kontak + "?text=Assalamu'alaikum..."} target="_blank" rel="noreferrer">
                                                        {kontak_look}
                                                    </a>
                                                    <UncontrolledTooltip placement="right" delay={0} target={"tooltip-profile-picture-whatsapp"}>
                                                        <img
                                                            src={pp_look}
                                                            alt="profile pict whatsapp"
                                                            style={{ width: 200 }}
                                                        />
                                                    </UncontrolledTooltip>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col header-menu-column">
                                    <div class="header-menu d-none d-xl-block">
                                        <nav>
                                            <div class="ltn__main-menu">
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
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div class="ltn__header-options ltn__header-options-2 mb-sm-20">
                                    {window.location.pathname !== config.routes_frontend.layout.panel + config.routes_frontend.user[localStorage.getItem("status")] ? <>
                                        {/* <!-- header-search-1 --> */}
                                        <Search {...this.props}
                                            searchFocus={val => {
                                                this.props.searchFocus(val);
                                            }}
                                            searchValue={val => {
                                                this.props.searchValue(val);
                                            }}
                                        />
                                        {/* <!-- user-menu --> */}
                                        <Account {...this.props} />
                                    </> : null}
                                    {/* <!-- mini-cart --> */}
                                    <div class="mini-cart-icon d-none">
                                        <a id="button-show-chat" href="#ltn__utilize-cart-menu" class="ltn__utilize-toggle">
                                            <i class="flaticon-chat"></i>
                                            <sup>X</sup>
                                        </a>
                                    </div>
                                    {/* <!-- mini-cart --> */}
                                    {/* <!-- Mobile Menu Button --> */}
                                    <div class="mobile-menu-toggle d-xl-none">
                                        <a href="#ltn__utilize-mobile-menu" class="ltn__utilize-toggle">
                                            <svg viewBox="0 0 800 600">
                                                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                                    id="top"></path>
                                                <path d="M300,320 L540,320" id="middle"></path>
                                                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                                    id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ltn__header-middle-area end --> */}
                </header>
                {/* <!-- HEADER AREA END --> */}
            </>
        )
    }
}
