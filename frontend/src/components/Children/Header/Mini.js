import React, { Component } from 'react'

export default class Mini extends Component {
    render() {
        return (
            <>
                {/* <!-- ltn__header-top-area start --> */}
                <div class="ltn__header-top-area section-bg-6 top-area-color-white---">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="ltn__top-bar-menu">
                                    <ul>
                                        <li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i class="icon-mail"></i>
                                            info@webmail.com</a></li>
                                        <li><a href="locations.html"><i class="icon-placeholder"></i> 15/A, Nest Tower,
                                            NYC</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="top-bar-right text-right">
                                    <div class="ltn__top-bar-menu">
                                        <ul>
                                            <li class="d-none">
                                                {/* <!-- ltn__language-menu --> */}
                                                <div class="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                                    <ul>
                                                        <li><a href="#" class="dropdown-toggle"><span class="active-currency">English</span></a>
                                                            <ul>
                                                                <li><a href="#">Arabic</a></li>
                                                                <li><a href="#">Bengali</a></li>
                                                                <li><a href="#">Chinese</a></li>
                                                                <li><a href="#">English</a></li>
                                                                <li><a href="#">French</a></li>
                                                                <li><a href="#">Hindi</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                {/* <!-- ltn__social-media --> */}
                                                <div class="ltn__social-media">
                                                    <ul>
                                                        <li><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                                                        </li>

                                                        <li><a href="#" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a href="#" title="Dribbble"><i class="fab fa-dribbble"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                {/* <!-- header-top-btn --> */}
                                                <div class="header-top-btn">
                                                    <a href="add-listing.html">Add Listing</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__header-top-area end --> */}
            </>
        )
    }
}
