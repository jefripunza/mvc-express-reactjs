import React, { Component } from 'react';

export default class HomePilihPerumahan extends Component {
    render() {
        return (
            <>
                {/* <!-- CAR DEALER FORM AREA START --> */}
                <div class="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="ltn__car-dealer-form-tab">
                                    <div class="ltn__tab-menu  text-uppercase d-none">
                                        <div class="nav">
                                            <a class="active show" data-toggle="tab" href="#ltn__form_tab_1_1"><i class="fas fa-car"></i>Find A
                                                Car</a>
                                            <a data-toggle="tab" href="#ltn__form_tab_1_2" class=""><i class="far fa-user"></i>Get a Dealer</a>
                                        </div>
                                    </div>
                                    <div class="tab-content bg-white box-shadow-1 pb-10">
                                        <div class="tab-pane fade active show" id="ltn__form_tab_1_1">
                                            <div class="car-dealer-form-inner">
                                                <form action="#" class="ltn__car-dealer-form-box row">
                                                    <div class="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                                                        <select class="nice-select" style={{ display: "none" }}>
                                                            <option>Choose Area</option>
                                                            <option>chicago</option>
                                                            <option>London</option>
                                                            <option>Los Angeles</option>
                                                            <option>New York</option>
                                                            <option>New Jersey</option>
                                                        </select>
                                                        <div class="nice-select" tabindex="0"><span class="current">Choose
                                                            Area</span>
                                                            <ul class="list">
                                                                <li data-value="Choose Area" class="option selected">Choose Area
                                                                </li>
                                                                <li data-value="chicago" class="option">chicago</li>
                                                                <li data-value="London" class="option">London</li>
                                                                <li data-value="Los Angeles" class="option">Los Angeles</li>
                                                                <li data-value="New York" class="option">New York</li>
                                                                <li data-value="New Jersey" class="option">New Jersey</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                                                        <select class="nice-select" style={{ display: "none" }}>
                                                            <option>Property Status</option>
                                                            <option>Open house</option>
                                                            <option>Rent</option>
                                                            <option>Sale</option>
                                                            <option>Sold</option>
                                                        </select>
                                                        <div class="nice-select" tabindex="0"><span class="current">Property
                                                            Status</span>
                                                            <ul class="list">
                                                                <li data-value="Property Status" class="option selected">
                                                                    Property Status</li>
                                                                <li data-value="Open house" class="option">Open house</li>
                                                                <li data-value="Rent" class="option">Rent</li>
                                                                <li data-value="Sale" class="option">Sale</li>
                                                                <li data-value="Sold" class="option">Sold</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                                                        <select class="nice-select" style={{ display: "none" }}>
                                                            <option>Property Type</option>
                                                            <option>Apartment</option>
                                                            <option>Co-op</option>
                                                            <option>Condo</option>
                                                            <option>Single Family Home</option>
                                                        </select>
                                                        <div class="nice-select" tabindex="0"><span class="current">Property
                                                            Type</span>
                                                            <ul class="list">
                                                                <li data-value="Property Type" class="option selected">Property Type
                                                                </li>
                                                                <li data-value="Apartment" class="option">Apartment</li>
                                                                <li data-value="Co-op" class="option">Co-op</li>
                                                                <li data-value="Condo" class="option">Condo</li>
                                                                <li data-value="Single Family Home" class="option">Single Family Home
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                                        <div class="btn-wrapper text-center mt-0">
                                                            {/* <!-- <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> --> */}
                                                            <a href="shop-right-sidebar.html" class="btn theme-btn-1 btn-effect-1 text-uppercase">Find
                                                                Now</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="ltn__form_tab_1_2">
                                            <div class="car-dealer-form-inner">
                                                <form action="#" class="ltn__car-dealer-form-box row">
                                                    <div class="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                                                        <select class="nice-select" style={{ display: "none" }}>
                                                            <option>Choose Area</option>
                                                            <option>chicago</option>
                                                            <option>London</option>
                                                            <option>Los Angeles</option>
                                                            <option>New York</option>
                                                            <option>New Jersey</option>
                                                        </select>
                                                        <div class="nice-select" tabindex="0"><span class="current">Choose
                                                            Area</span>
                                                            <ul class="list">
                                                                <li data-value="Choose Area" class="option selected">Choose Area
                                                                </li>
                                                                <li data-value="chicago" class="option">chicago</li>
                                                                <li data-value="London" class="option">London</li>
                                                                <li data-value="Los Angeles" class="option">Los Angeles</li>
                                                                <li data-value="New York" class="option">New York</li>
                                                                <li data-value="New Jersey" class="option">New Jersey</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                                                        <select class="nice-select" style={{ display: "none" }}>
                                                            <option>Property Status</option>
                                                            <option>Open house</option>
                                                            <option>Rent</option>
                                                            <option>Sale</option>
                                                            <option>Sold</option>
                                                        </select>
                                                        <div class="nice-select" tabindex="0"><span class="current">Property
                                                            Status</span>
                                                            <ul class="list">
                                                                <li data-value="Property Status" class="option selected">
                                                                    Property Status</li>
                                                                <li data-value="Open house" class="option">Open house</li>
                                                                <li data-value="Rent" class="option">Rent</li>
                                                                <li data-value="Sale" class="option">Sale</li>
                                                                <li data-value="Sold" class="option">Sold</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                                                        <select class="nice-select" style={{ display: "none" }}>
                                                            <option>Property Type</option>
                                                            <option>Apartment</option>
                                                            <option>Co-op</option>
                                                            <option>Condo</option>
                                                            <option>Single Family Home</option>
                                                        </select>
                                                        <div class="nice-select" tabindex="0"><span class="current">Property
                                                            Type</span>
                                                            <ul class="list">
                                                                <li data-value="Property Type" class="option selected">Property Type
                                                                </li>
                                                                <li data-value="Apartment" class="option">Apartment</li>
                                                                <li data-value="Co-op" class="option">Co-op</li>
                                                                <li data-value="Condo" class="option">Condo</li>
                                                                <li data-value="Single Family Home" class="option">Single Family Home
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                                        <div class="btn-wrapper text-center mt-0">
                                                            {/* <!-- <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> --> */}
                                                            <a href="shop-right-sidebar.html" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search
                                                                Properties</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- CAR DEALER FORM AREA END --> */}
            </>
        )
    }
}
