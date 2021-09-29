import React, { Component } from 'react'
import { hanyaHuruf } from '../../../function';

export default class InputText extends Component {
    render() {
        const {
            id,
            label,
            value,
            placeholder,
            upperCase,
        } = this.props;
        return (
            <>
                {label ? <>
                    <label>{label}</label>
                </> : null}
                <input
                    type="text"
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={e => {
                        if (upperCase) {
                            e.target.value = String(e.target.value).toUpperCase();
                        }
                        e.target.value = hanyaHuruf(e.target.value); // filter
                        if (String(e.target.value).length > 0) {
                            this.props.onChange(e.target.value)
                        } else {
                            this.props.onChange(null)
                        }
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            e.target.value = hanyaHuruf(e.target.value); // filter
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
