import React, { Component } from 'react'

export default class CardWithTitle extends Component {
    render() {
        const {
            title,
            children,
        } = this.props;
        return (
            <>
                <div class="ltn__product-item ltn__product-item-4 text-center--- p-2">
                    <fieldset>
                        <legend>{title}</legend>
                        <div class="row">
                            <div class="col-md-12">
                                {children}
                            </div>
                        </div>
                    </fieldset>
                </div>
            </>
        )
    }
}
