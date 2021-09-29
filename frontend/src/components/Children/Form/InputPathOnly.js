import React, { Component } from 'react'
import { hanyaPath } from '../../../function';

export default class InputPathOnly extends Component {
    render() {
        const {
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
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={e => {
                        e.target.value = hanyaPath(e.target.value);
                        if (String(e.target.value).length > 0) {
                            this.props.onChange(e.target.value);
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
