import React, { Component } from 'react'

export default class InputTextNumber extends Component {
    render() {
        const {
            id,
            label,
            value,
            style,
            maxLength,
            placeholder,
            upperCase,
        } = this.props;
        return (
            <>
                {label ? <>
                    <label>{label}</label>
                </> : null}
                <input
                    id={id}
                    type="text"
                    value={value}
                    style={{...style}}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    onChange={e => {
                        if (upperCase) {
                            e.target.value = String(e.target.value).toUpperCase();
                        }
                        if (String(e.target.value).length > 0) {
                            this.props.onChange(e.target.value)
                        } else {
                            this.props.onChange(null)
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
