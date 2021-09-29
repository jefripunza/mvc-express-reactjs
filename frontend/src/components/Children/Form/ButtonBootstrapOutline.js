import React, { Component } from 'react'

export default class ButtonBootstrapOutline extends Component {
    render() {
        const {
            warna,
            children,
            className,
            style,
        } = this.props;
        return (
            <>
                <button
                    type="button"
                    className={"btn btn-outline-" + warna + " " + className}
                    style={{ ...style }}
                    onClick={() => {
                        this.props.onClick();
                    }}
                >{children}</button>
            </>
        )
    }
}
