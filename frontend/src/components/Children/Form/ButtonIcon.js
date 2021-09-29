import React, { Component } from 'react';

// Styling
import {
    UncontrolledTooltip,
} from "reactstrap";

export default class ButtonIcon extends Component {
    render() {
        const {
            id,
            icon,
            warna,
            tooltip,
        } = this.props;
        return (
            <>
                <button
                    className={"table-action text-" + warna}
                    style={{ backgroundColor: "transparent" }}
                    id={"tooltip-" + warna + "-" + id}
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.onClick();
                    }}
                >
                    <i className={icon} />
                </button>
                <UncontrolledTooltip delay={0} target={"tooltip-" + warna + "-" + id}>
                    {tooltip}
                </UncontrolledTooltip>
            </>
        )
    }
}
