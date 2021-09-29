import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const {
            children,
            mt,
        } = this.props;
        return (
            <>
                <div class={`btn-wrapper mt-${mt ? mt : 2}`}>
                    <button
                        class="theme-btn-1 btn reverse-color btn-block"
                        onClick={() => this.props.onClick()}
                    >{children}</button>
                </div>
            </>
        )
    }
}
