import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { hanyaAngka } from '../../../function';

export default class InputNumber extends Component {
    render() {
        const {
            label,
            value,
            maxLength,
            placeholder,
        } = this.props;
        return (
            <>
                {label ? <>
                    <label>{label}</label>
                </> : null}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    maxLength={maxLength}
                    onChange={e => {
                        e.target.value = hanyaAngka(e.target.value); // filter
                        if (String(e.target.value).length > 0) {
                            this.props.onChange(e.target.value);
                        } else {
                            this.props.onChange(null);
                        }
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            e.target.value = hanyaAngka(e.target.value); // filter
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

InputNumber.propTypes = {
    onEnter: PropTypes.func,
};
