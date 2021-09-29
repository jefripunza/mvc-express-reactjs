import React, { Component } from 'react';

import Slider from "react-slick";
const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                dots: true,
            },
        },
    ],
};

export default class DetailFotoRumah extends Component {
    render() {
        const {
            foto,
        } = this.props;
        return (
            <>
                <Slider {...settings} >
                    {foto.map((item, i) => {
                        return <>
                            <a href={"/img/rumah/" + item.src} onClick={e => {
                                e.preventDefault();
                            }}>
                                <img src={"/img/rumah/" + item.src} alt={item.src} style={{ width: "100%" }} />
                            </a>
                        </>;
                    })}
                </Slider>
            </>
        )
    }
}
