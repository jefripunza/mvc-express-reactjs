import React, { Component } from 'react'

export default class Pembatas extends Component {
    render() {
        const {
            mt,
            mb,
            tebal,
            warna,
            radius,
        } = this.props;
        return (
            <>
                <hr style={{
                    marginTop: mt ? mt : 20,
                    marginBottom: mb ? mb : 0,
                    border: tebal ? tebal + "px solid " + warna : "",
                    borderRadius: radius,
                }} />
            </>
        )
    }
}
