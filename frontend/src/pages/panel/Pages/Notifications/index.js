import React, { Component } from 'react';
import { config } from '../../../../config';

class Notification extends Component {
    componentDidMount() {
        this.props.nowPage(config.routes_frontend.panel.pages.notifications)
        document.title = this.props.title;
    }
    render() {
        return (
            <>
                <div class="position-relative mb-3">
                    <div class="row g-3 justify-content-between">
                        <div class="col-auto">
                            <h1 class="app-page-title mb-0">Notifications</h1>
                        </div>
                        <div class="col-auto">
                            <div class="page-utilities">
                                <select class="form-select form-select-sm w-auto">
                                    <option selected value="option-1">All</option>
                                    <option value="option-2">News</option>
                                    <option value="option-3">Product</option>
                                    <option value="option-4">Project</option>
                                    <option value="option-4">Billing</option>
                                </select>
                            </div>
                            {/* <!--//page-utilities--> */}
                        </div>
                    </div>
                </div>

                <div class="app-card app-card-notification shadow-sm mb-4">
                    <div class="app-card-header px-4 py-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <img class="profile-image" src={require("../../../../assets/images/profiles/profile-1.png").default} alt="" />
                            </div>
                            {/* <!--//col--> */}
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <div class="notification-type mb-2"><span class="badge bg-info">Project</span></div>
                                <h4 class="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                <ul class="notification-meta list-inline mb-0">
                                    <li class="list-inline-item">2 hrs ago</li>
                                    <li class="list-inline-item">|</li>
                                    <li class="list-inline-item">Amy Doe</li>
                                </ul>

                            </div>
                            {/* <!--//col--> */}
                        </div>
                        {/* <!--//row--> */}
                    </div>
                    {/* <!--//app-card-header--> */}
                    <div class="app-card-body p-4">
                        <div class="notification-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            sed ultrices dolor, ac maximus ligula. Donec ex orci, mollis ac purus vel, tempor pulvinar
                            justo. Praesent nibh massa, posuere non mollis vel, molestie non mauris. Aenean
                            consequat facilisis orci, sed sagittis mauris interdum at.
                        </div>
                    </div>
                    {/* <!--//app-card-body--> */}
                    <div class="app-card-footer px-4 py-3">
                        <a class="action-link" href="!#">
                            View all<i className="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                    {/* <!--//app-card-footer--> */}
                </div>
                {/* <!--//app-card--> */}

                <div class="app-card app-card-notification shadow-sm mb-4">
                    <div class="app-card-header px-4 py-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <div class="app-icon-holder">
                                    <i className="bi bi-receipt"></i>
                                </div>
                                {/* <!--//app-icon-holder--> */}
                            </div>
                            {/* <!--//col--> */}
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <div class="notification-type mb-2"><span class="badge bg-warning">Billing</span></div>
                                <h4 class="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                <ul class="notification-meta list-inline mb-0">
                                    <li class="list-inline-item">1 day ago</li>
                                    <li class="list-inline-item">|</li>
                                    <li class="list-inline-item">System</li>
                                </ul>

                            </div>
                            {/* <!--//col--> */}
                        </div>
                        {/* <!--//row--> */}
                    </div>
                    {/* <!--//app-card-header--> */}
                    <div class="app-card-body p-4">
                        <div class="notification-content">Praesent nibh massa, posuere non mollis vel, molestie non
                            mauris. Aenean consequat facilisis orci, sed sagittis mauris interdum at.</div>
                    </div>
                    {/* <!--//app-card-body--> */}
                    <div class="app-card-footer px-4 py-3">
                        <a class="action-link" href="!#">
                            View invoice<i className="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                    {/* <!--//app-card-footer--> */}
                </div>
                {/* <!--//app-card--> */}

                <div class="app-card app-card-notification shadow-sm mb-4">
                    <div class="app-card-header px-4 py-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <div class="app-icon-holder icon-holder-mono">
                                    <i className="bi bi-bar-chart-line"></i>
                                </div>
                                {/* <!--//app-icon-holder--> */}
                            </div>
                            {/* <!--//col--> */}
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <div class="notification-type mb-2"><span class="badge bg-info">Project</span></div>
                                <h4 class="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                <ul class="notification-meta list-inline mb-0">
                                    <li class="list-inline-item">3 days ago</li>
                                    <li class="list-inline-item">|</li>
                                    <li class="list-inline-item">System</li>
                                </ul>

                            </div>
                            {/* <!--//col--> */}
                        </div>
                        {/* <!--//row--> */}
                    </div>
                    {/* <!--//app-card-header--> */}
                    <div class="app-card-body p-4">
                        <div class="notification-content">Proin a magna sit amet mauris mollis mattis in at dui. Fusce
                            laoreet metus et nunc lobortis, suscipit sollicitudin augue pellentesque. Maecenas maximus
                            iaculis scelerisque.</div>
                    </div>
                    {/* <!--//app-card-body--> */}
                    <div class="app-card-footer px-4 py-3">
                        <a class="action-link" href="!#">
                            View invoice<i className="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                    {/* <!--//app-card-footer--> */}
                </div>
                {/* <!--//app-card--> */}

                <div class="app-card app-card-notification shadow-sm mb-4">
                    <div class="app-card-header px-4 py-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <img class="profile-image" src={require("../../../../assets/images/profiles/profile-2.png").default} alt="" />
                            </div>
                            {/* <!--//col--> */}
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <div class="notification-type mb-2"><span class="badge bg-secondary">Product</span>
                                </div>
                                <h4 class="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                <ul class="notification-meta list-inline mb-0">
                                    <li class="list-inline-item">7 days ago</li>
                                    <li class="list-inline-item">|</li>
                                    <li class="list-inline-item">James Smith</li>
                                </ul>

                            </div>
                            {/* <!--//col--> */}
                        </div>
                        {/* <!--//row--> */}
                    </div>
                    {/* <!--//app-card-header--> */}
                    <div class="app-card-body p-4">
                        <div class="notification-content">Sed tempor faucibus arcu, nec tristique erat congue sed.
                            Pellentesque auctor ut elit vel feugiat. Sed a mauris tempor, tempor lacus vel, tristique
                            metus. Nulla interdum felis id metus fermentum laoreet.</div>
                    </div>
                    {/* <!--//app-card-body--> */}
                    <div class="app-card-footer px-4 py-3">
                        <a class="action-link" href="!#">
                            View all<i className="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                    {/* <!--//app-card-footer--> */}
                </div>
                {/* <!--//app-card--> */}


                <div class="app-card app-card-notification shadow-sm mb-4">
                    <div class="app-card-header px-4 py-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <img class="profile-image" src={require("../../../../assets/images/profiles/profile-3.png").default} alt="" />
                            </div>
                            {/* <!--//col--> */}
                            <div class="col-12 col-lg-auto text-center text-lg-start">
                                <div class="notification-type mb-2"><span class="badge bg-success">News</span></div>
                                <h4 class="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                <ul class="notification-meta list-inline mb-0">
                                    <li class="list-inline-item">7 days ago</li>
                                    <li class="list-inline-item">|</li>
                                    <li class="list-inline-item">Kate Sanders</li>
                                </ul>

                            </div>
                            {/* <!--//col--> */}
                        </div>
                        {/* <!--//row--> */}
                    </div>
                    {/* <!--//app-card-header--> */}
                    <div class="app-card-body p-4">
                        <div class="notification-content">Sed tempor faucibus arcu, nec tristique erat congue sed.
                            Pellentesque auctor ut elit vel feugiat. Sed a mauris tempor, tempor lacus vel, tristique
                            metus. Nulla interdum felis id metus fermentum laoreet.</div>
                    </div>
                    {/* <!--//app-card-body--> */}
                    <div class="app-card-footer px-4 py-3">
                        <a class="action-link" href="!#">
                            Read more<i className="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                    {/* <!--//app-card-footer--> */}
                </div>
                {/* <!--//app-card--> */}


                <div class="text-center mt-4">
                    <a class="btn app-btn-secondary" href="!#">Load more notifications</a>
                </div>
            </>
        );
    }
}

export default Notification;