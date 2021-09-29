import React, { Component } from 'react'

export default class InformasiPerumahan extends Component {
    render() {
        return (
            <>
                {/* <!-- COUNTER UP AREA START --> */}
                <div class="ltn__counterup-area section-bg-1 pt-120 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-6 align-self-center">
                                <div class="ltn__counterup-item text-color-white---">
                                    <div class="counter-icon">
                                        <i class="flaticon-select"></i>
                                    </div>
                                    <h1><span class="counter animated fadeInDownBig">560</span><span class="counterUp-icon">+</span> </h1>
                                    <h6>Total Area Sq</h6>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 align-self-center">
                                <div class="ltn__counterup-item text-color-white---">
                                    <div class="counter-icon">
                                        <i class="flaticon-office"></i>
                                    </div>
                                    <h1><span class="counter animated fadeInDownBig">197</span><span class="counterUp-letter">K</span><span class="counterUp-icon">+</span> </h1>
                                    <h6>Apartments Sold</h6>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 align-self-center">
                                <div class="ltn__counterup-item text-color-white---">
                                    <div class="counter-icon">
                                        <i class="flaticon-excavator"></i>
                                    </div>
                                    <h1><span class="counter animated fadeInDownBig">268</span><span class="counterUp-icon">+</span> </h1>
                                    <h6>Total Constructions</h6>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 align-self-center">
                                <div class="ltn__counterup-item text-color-white---">
                                    <div class="counter-icon">
                                        <i class="flaticon-armchair"></i>
                                    </div>
                                    <h1><span class="counter animated fadeInDownBig">340</span><span class="counterUp-icon">+</span> </h1>
                                    <h6>Apartio Rooms</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- COUNTER UP AREA END --> */}
            </>
        )
    }
}
