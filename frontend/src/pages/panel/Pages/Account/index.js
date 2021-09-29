import React, { Component } from 'react';
import { config } from '../../../../config';

class Account extends Component {
    componentDidMount() {
        this.props.nowPage(config.routes_frontend.panel.pages.account)
        document.title = this.props.title;
    }
    render() {
        return (
            <>
                <h1 class="app-page-title">My Account</h1>
                <div class="row gy-4">
                    <div class="col-12 col-lg-6">
                        <div class="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
                            <div class="app-card-header p-3 border-bottom-0">
                                <div class="row align-items-center gx-3">
                                    <div class="col-auto">
                                        <div class="app-icon-holder">
                                            <i className="bi bi-person" style={{ fontSize: 22 }}></i>
                                        </div>
                                        {/* <!--//icon-holder--> */}

                                    </div>
                                    {/* <!--//col--> */}
                                    <div class="col-auto">
                                        <h4 class="app-card-title">Profile</h4>
                                    </div>
                                    {/* <!--//col--> */}
                                </div>
                                {/* <!--//row--> */}
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body px-4 w-100">
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label mb-2"><strong>Photo</strong></div>
                                            <div class="item-data"><img class="profile-image" src="assets/images/user.png" alt="" /></div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Name</strong></div>
                                            <div class="item-data">James Doe</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Email</strong></div>
                                            <div class="item-data">james.doe@website.com</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Website</strong></div>
                                            <div class="item-data">
                                                https://johndoewebsite.com
                                            </div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Location</strong></div>
                                            <div class="item-data">
                                                New York
                                            </div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                            </div>
                            {/* <!--//app-card-body--> */}
                            <div class="app-card-footer p-4 mt-auto">
                                <a class="btn app-btn-secondary" href="!#">Manage Profile</a>
                            </div>
                            {/* <!--//app-card-footer--> */}

                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                    {/* <!--//col--> */}
                    <div class="col-12 col-lg-6">
                        <div class="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
                            <div class="app-card-header p-3 border-bottom-0">
                                <div class="row align-items-center gx-3">
                                    <div class="col-auto">
                                        <div class="app-icon-holder">
                                            <i className="bi bi-sliders" style={{ fontSize: 22 }}></i>
                                        </div>
                                        {/* <!--//icon-holder--> */}

                                    </div>
                                    {/* <!--//col--> */}
                                    <div class="col-auto">
                                        <h4 class="app-card-title">Preferences</h4>
                                    </div>
                                    {/* <!--//col--> */}
                                </div>
                                {/* <!--//row--> */}
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body px-4 w-100">

                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Language </strong></div>
                                            <div class="item-data">English</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Time Zone</strong></div>
                                            <div class="item-data">Central Standard Time (UTC-6)</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Currency</strong></div>
                                            <div class="item-data">$(US Dollars)</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Email Subscription</strong></div>
                                            <div class="item-data">Off</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>SMS Notifications</strong></div>
                                            <div class="item-data">On</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                            </div>
                            {/* <!--//app-card-body--> */}
                            <div class="app-card-footer p-4 mt-auto">
                                <a class="btn app-btn-secondary" href="!#">Manage Preferences</a>
                            </div>
                            {/* <!--//app-card-footer--> */}

                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                    {/* <!--//col--> */}
                    <div class="col-12 col-lg-6">
                        <div class="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
                            <div class="app-card-header p-3 border-bottom-0">
                                <div class="row align-items-center gx-3">
                                    <div class="col-auto">
                                        <div class="app-icon-holder">
                                            <i className="bi bi-shield-check" style={{ fontSize: 22 }}></i>
                                        </div>
                                        {/* <!--//icon-holder--> */}

                                    </div>
                                    {/* <!--//col--> */}
                                    <div class="col-auto">
                                        <h4 class="app-card-title">Security</h4>
                                    </div>
                                    {/* <!--//col--> */}
                                </div>
                                {/* <!--//row--> */}
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body px-4 w-100">

                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Password</strong></div>
                                            <div class="item-data">••••••••</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Change</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><strong>Two-Factor Authentication</strong></div>
                                            <div class="item-data">You haven't set up two-factor authentication. </div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Set up</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                            </div>
                            {/* <!--//app-card-body--> */}

                            <div class="app-card-footer p-4 mt-auto">
                                <a class="btn app-btn-secondary" href="!#">Manage Security</a>
                            </div>
                            {/* <!--//app-card-footer--> */}

                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
                            <div class="app-card-header p-3 border-bottom-0">
                                <div class="row align-items-center gx-3">
                                    <div class="col-auto">
                                        <div class="app-icon-holder">
                                            <i className="bi bi-credit-card" style={{ fontSize: 22 }}></i>
                                        </div>
                                        {/* <!--//icon-holder--> */}

                                    </div>
                                    {/* <!--//col--> */}
                                    <div class="col-auto">
                                        <h4 class="app-card-title">Payment methods</h4>
                                    </div>
                                    {/* <!--//col--> */}
                                </div>
                                {/* <!--//row--> */}
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body px-4 w-100">

                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><i class="fab fa-cc-visa me-2"></i><strong>Credit/Debit Card </strong>
                                            </div>
                                            <div class="item-data">1234*******5678</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Edit</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                                <div class="item border-bottom py-3">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-auto">
                                            <div class="item-label"><i class="fab fa-paypal me-2"></i><strong>PayPal</strong></div>
                                            <div class="item-data">Not connected</div>
                                        </div>
                                        {/* <!--//col--> */}
                                        <div class="col text-end">
                                            <a class="btn-sm app-btn-secondary" href="!#">Connect</a>
                                        </div>
                                        {/* <!--//col--> */}
                                    </div>
                                    {/* <!--//row--> */}
                                </div>
                                {/* <!--//item--> */}
                            </div>
                            {/* <!--//app-card-body--> */}
                            <div class="app-card-footer p-4 mt-auto">
                                <a class="btn app-btn-secondary" href="!#">Manage Payment</a>
                            </div>
                            {/* <!--//app-card-footer--> */}

                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                </div>
                {/* <!--//row--> */}
            </>
        );
    }
}

export default Account;