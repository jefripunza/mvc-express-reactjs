import React, { Component } from 'react';

// Styling
import {
    UncontrolledTooltip,
} from "reactstrap";

export default class Span extends Component {
    render() {
        const {
            id_tooltip,
            tooltip,
            //
            pointer,
            //
            children,
        } = this.props;
        let new_id = "";
        if (id_tooltip) {
            new_id = "tooltip_span_" + String(id_tooltip)
                .replaceAll(" ", "_")
                .replaceAll("-", "")
                .replaceAll(".", "_")
                .replaceAll(",", "_")
        }
        return (
            <>
                <span
                    id={id_tooltip ? new_id : null}
                    style={{ cursor: id_tooltip || pointer ? "pointer" : "none" }}
                    onClick={() => {
                        if (this.props.onClick) {
                            this.props.onClick();
                        }
                    }}
                >{children}</span>
                {tooltip && id_tooltip ? <>
                    <UncontrolledTooltip delay={0} target={new_id}>
                        {tooltip}
                    </UncontrolledTooltip>
                </> : null}
            </>
        )
    }
}
