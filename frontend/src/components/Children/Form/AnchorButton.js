import React, { Component } from 'react';

// Styling
import {
    UncontrolledTooltip,
} from "reactstrap";

export default class AnchorButton extends Component {
    render() {
        const {
            id_tooltip,
            tooltip,
            //
            href,
            newtab,
            style,
            className,
            children,
        } = this.props;
        let new_props = {};
        if (id_tooltip) {
            new_props.id = "tooltip_a_" + String(id_tooltip)
                .replaceAll(" ", "_")
                .replaceAll("-", "")
                .replaceAll(".", "_")
                .replaceAll(",", "_")
                .replaceAll("__", "_");
        }
        new_props.href = href;
        if (newtab) {
            new_props.target = "_blank";
            new_props.rel = "noreferrer";
        }
        if (style) {
            new_props.style = style;
        }
        if (className) {
            new_props.className = className;
        }
        return (
            <>
                <a {...new_props} onClick={e => {
                    if (!newtab) {
                        e.preventDefault();
                    }
                    if (this.props.onClick) {
                        e.preventDefault();
                        this.props.onClick();
                    }
                }} >{children}</a>
                {tooltip && id_tooltip ? <>
                    <UncontrolledTooltip delay={0} target={new_props.id}>
                        {tooltip}
                    </UncontrolledTooltip>
                </> : null}
            </>
        )
    }
}
