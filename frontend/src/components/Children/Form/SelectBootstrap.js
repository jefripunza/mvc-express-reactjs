import React, { Component } from 'react'

export default class SelectBootstrap extends Component {
    render() {
        const {
            id,
            style,
            hidden,
            defaultValue,
            option,
        } = this.props;
        return (
            <>
                <div className="form-group">
                    <select
                        id={id}
                        className="custom-select"
                        style={{ ...style }}
                        onChange={e => {
                            this.props.onChange(e.target.value);
                        }}
                    >
                        {!defaultValue ? <>
                            <option disabled hidden selected>{hidden}</option>
                        </> : null}
                        {option.map(item => {
                            if (defaultValue === item.value) {
                                return <>
                                    <option selected value={item.value}>{item.text}</option>
                                </>;
                            } else {
                                return <>
                                    <option value={item.value}>{item.text}</option>
                                </>;
                            }
                        })}
                    </select>
                </div>
            </>
        )
    }
}
