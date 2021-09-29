import React, { Component } from 'react'

export default class InputTextArea extends Component {
    render() {
        const {
            label,
            placeholder,
            children,
        } = this.props;
        return (
            <>
                {label ? <>
                    <label>{label}</label>
                </> : null}
                <div class="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                        placeholder={placeholder}
                        onChange={e => {
                            if (String(e.target.value).length > 0) {
                                this.props.onChange(e.target.value);
                            } else {
                                this.props.onChange(null);
                            }
                        }}
                    >{children}</textarea>
                </div>
            </>
        )
    }
}
