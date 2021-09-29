import React, { Component } from 'react';
import { config } from '../../../config';

class Settings extends Component {
    componentDidMount() {
        this.props.nowPage(config.routes_frontend.panel.settings);
        document.title = this.props.title;
    }
    render() {
        return (
            <>
                <h1 class="app-page-title">Settings</h1>
                <hr class="mb-4" />
                <div class="row g-4 settings-section">
                    <div class="col-12 col-md-4">
                        <h3 class="section-title">General</h3>
                        <div class="section-intro">Settings section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="help.html">Learn more</a></div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="app-card app-card-settings shadow-sm p-4">

                            <div class="app-card-body">
                                <form class="settings-form">
                                    <div class="mb-3">
                                        <label for="setting-input-1" class="form-label">Business Name<span class="ms-2"
                                            data-container="body" data-bs-toggle="popover" data-trigger="hover"
                                            data-placement="top"
                                            data-content="This is a Bootstrap popover example. You can use popover to provide extra info."><svg
                                                width="1em" height="1em" viewBox="0 0 16 16"
                                                class="bi bi-info-circle" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path
                                                    d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                                                <circle cx="8" cy="4.5" r="1" />
                                            </svg></span></label>
                                        <input type="text" class="form-control" id="setting-input-1" value="Lorem Ipsum Ltd." required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="setting-input-2" class="form-label">Contact Name</label>
                                        <input type="text" class="form-control" id="setting-input-2" value="Steve Doe" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="setting-input-3" class="form-label">Business Email Address</label>
                                        <input type="email" class="form-control" id="setting-input-3" value="hello@companywebsite.com" />
                                    </div>
                                    <button type="submit" class="btn app-btn-primary">Save Changes</button>
                                </form>
                            </div>
                            {/* <!--//app-card-body--> */}

                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                </div>
                {/* <!--//row--> */}
                <hr class="my-4" />
                <div class="row g-4 settings-section">
                    <div class="col-12 col-md-4">
                        <h3 class="section-title">Plan</h3>
                        <div class="section-intro">Settings section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="help.html">Learn more</a></div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="app-card app-card-settings shadow-sm p-4">

                            <div class="app-card-body">
                                <div class="mb-2"><strong>Current Plan:</strong> Pro</div>
                                <div class="mb-2"><strong>Status:</strong> <span class="badge bg-success">Active</span>
                                </div>
                                <div class="mb-2"><strong>Expires:</strong> 2030-09-24</div>
                                <div class="mb-4"><strong>Invoices:</strong> <a href="#">view</a></div>
                                <div class="row justify-content-between">
                                    <div class="col-auto">
                                        <a class="btn app-btn-primary" href="#">Upgrade Plan</a>
                                    </div>
                                    <div class="col-auto">
                                        <a class="btn app-btn-secondary" href="#">Cancel Plan</a>
                                    </div>
                                </div>

                            </div>
                            {/* <!--//app-card-body--> */}

                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                </div>
                {/* <!--//row--> */}
                <hr class="my-4" />
                <div class="row g-4 settings-section">
                    <div class="col-12 col-md-4">
                        <h3 class="section-title">Data &amp; Privacy</h3>
                        <div class="section-intro">Settings section intro goes here. Morbi vehicula, est eget fermentum ornare. </div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="app-card app-card-settings shadow-sm p-4">
                            <div class="app-card-body">
                                <form class="settings-form">
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-1" checked />
                                        <label class="form-check-label" for="settings-checkbox-1">
                                            Keep user app activity history
                                        </label>
                                    </div>
                                    {/* <!--//form-check--> */}
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-2" checked />
                                        <label class="form-check-label" for="settings-checkbox-2">
                                            Keep user app preferences
                                        </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-3" />
                                        <label class="form-check-label" for="settings-checkbox-3">
                                            Keep user app search history
                                        </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-4" />
                                        <label class="form-check-label" for="settings-checkbox-4">
                                            Lorem ipsum dolor sit amet
                                        </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-5" />
                                        <label class="form-check-label" for="settings-checkbox-5">
                                            Aenean quis pharetra metus
                                        </label>
                                    </div>
                                    <div class="mt-3">
                                        <button type="submit" class="btn app-btn-primary">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                            {/* <!--//app-card-body--> */}
                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                </div>
                {/* <!--//row--> */}
                <hr class="my-4" />
                <div class="row g-4 settings-section">
                    <div class="col-12 col-md-4">
                        <h3 class="section-title">Notifications</h3>
                        <div class="section-intro">Settings section intro goes here. Duis velit massa, faucibus non hendrerit eget.</div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="app-card app-card-settings shadow-sm p-4">
                            <div class="app-card-body">
                                <form class="settings-form">
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-1" checked />
                                        <label class="form-check-label" for="settings-switch-1">Project
                                            notifications</label>
                                    </div>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-2" />
                                        <label class="form-check-label" for="settings-switch-2">Web browser push
                                            notifications</label>
                                    </div>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-3" checked />
                                        <label class="form-check-label" for="settings-switch-3">Mobile push
                                            notifications</label>
                                    </div>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-4" />
                                        <label class="form-check-label" for="settings-switch-4">Lorem ipsum
                                            notifications</label>
                                    </div>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-5" />
                                        <label class="form-check-label" for="settings-switch-5">Lorem ipsum
                                            notifications</label>
                                    </div>
                                    <div class="mt-3">
                                        <button type="submit" class="btn app-btn-primary">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                            {/* <!--//app-card-body--> */}
                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Settings;