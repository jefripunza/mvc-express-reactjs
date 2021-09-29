import React, { Component } from 'react'

export default class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        const {
            id,
            placeholder,
        } = this.props;
        const {
            value,
        } = this.state;
        return (
            <>
                <div class="input-group mb-3 mt-0">
                    <input
                        id={id}
                        type="search"
                        value={value}
                        placeholder={placeholder}
                        class="form-control py-2 border-right-0 border"
                        onChange={e => {
                            if (String(e.target.value).length > 0) {
                                this.setState({
                                    value: e.target.value,
                                });
                                this.props.onChange(e.target.value)
                            } else {
                                this.setState({
                                    value: null,
                                });
                                this.props.onChange(null)
                            }
                        }}
                    />
                    <span class="input-group-append">
                        <div
                            class="input-group-text bg-transparent"
                            onClick={() => {
                                this.setState({
                                    value: null,
                                });
                                this.props.onChange(null)
                            }}
                        >
                            <i class="fa fa-search"></i>
                        </div>
                    </span>
                </div>
            </>
        )
    }
}
