import React, { Component } from 'react'

export default class InputPassword extends Component {
    render() {
        const {
            id,
            label,
            value,
            placeholder,
        } = this.props;
        return (
            <>
                {label ? <>
                    <label>{label}</label>
                </> : null}
                <input
                    type="password"
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={e => {
                        if (String(e.target.value).length > 0) {
                            this.props.onChange(e.target.value)
                        } else {
                            this.props.onChange(null);
                        }
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            if (String(e.target.value).length > 0) {
                                if (this.props.onEnter) {
                                    this.props.onEnter(e.target.value);
                                }
                            }
                        }
                    }}
                />
            </>
        )
    }
}
