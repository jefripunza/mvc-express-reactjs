import React, { Component } from 'react'

export default class SmallNotice extends Component {
    render() {
        const {
            children,
            color,
        } = this.props;
        return (
            <>
                <p>
                    <small style={{ color }}>{children}</small>
                </p>
            </>
        )
    }
}
