import React, { Component } from 'react';

import Slider from "react-slick";
const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                dots: true,
            },
        },
    ],
};

export default class HomeHeroSlider extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <>
                {/* <!-- SLIDER AREA START (slider-3) --> */}
                <Slider {...settings} className={"section-bg-1 m-0 p-0"}>
                    <div class="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 slick-slide slick-current slick-active"
                        style={{ width: "778", position: "relative", left: 0, top: 0, zIndex: 999, opacity: 1 }}
                        tabindex="-1" role="option" aria-describedby="slick-slide00"
                        data-slick-index="0" aria-hidden="false"
                    >
                        <div class="ltn__slide-item-inner">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 align-self-center">
                                        <div class="slide-item-info">
                                            <div class="slide-item-info-inner ltn__slide-animation">
                                                <div class="slide-video mb-50 d-none">
                                                    <a class="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection" tabindex="0">
                                                        <i class="fa fa-play"></i>
                                                    </a>
                                                </div>
                                                <h6 class="slide-sub-title white-color--- animated"><span><i class="fas fa-home"></i></span> Real Estate Agency</h6>
                                                <h1 class="slide-title animated ">Find Your Dream <br /> House By Us
                                                </h1>
                                                <div class="slide-brief animated">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                </div>
                                                <div class="btn-wrapper animated">
                                                    <a href="about.html" class="theme-btn-1 btn btn-effect-1" tabindex="0">Make An Enquiry</a>
                                                    <a class="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&amp;showinfo=0" data-rel="lightcase" tabindex="0">
                                                        <i class="icon-play  ltn__secondary-color"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slide-item-img">
                                            <img src="img/slider/21.png" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 slick-slide"
                        style={{ width: 778, position: "relative", left: -778, top: 0, zIndex: 998, opacity: 0 }}
                        tabindex="-1" role="option" aria-describedby="slick-slide01"
                        data-slick-index="1" aria-hidden="true">
                        <div class="ltn__slide-item-inner  text-right">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 align-self-center">
                                        <div class="slide-item-info">
                                            <div class="slide-item-info-inner ltn__slide-animation">
                                                <h6 class="slide-sub-title white-color--- animated"><span><i class="fas fa-home"></i></span> Real Estate Agency</h6>
                                                <h1 class="slide-title animated ">The Right Place <br />of House Finding
                                                </h1>
                                                <div class="slide-brief animated">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                </div>
                                                <div class="btn-wrapper animated">
                                                    <a href="service.html" class="theme-btn-1 btn btn-effect-1" tabindex="-1">OUR SERVICES</a>
                                                    <a href="about.html" class="btn btn-transparent btn-effect-3" tabindex="-1">LEARN MORE</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slide-item-img slide-img-left">
                                            <img src="img/slider/21.png" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* <!-- SLIDER AREA END --> */}
            </>
        )
    }
}
