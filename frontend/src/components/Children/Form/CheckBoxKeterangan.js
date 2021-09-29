import React, { Component } from 'react'

export default class CheckBoxKeterangan extends Component {
    constructor(props) {
        super(props);
        const {
            defaultChecked,
        } = this.props;
        this.state = {
            checked: defaultChecked ? defaultChecked : false,
        }
    }
    render() {
        const {
            keterangan,
        } = this.props;
        const {
            checked,
        } = this.state;
        return (
            <>
                <label class="checkbox-inline">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={e => {
                            const {
                                checked,
                            } = this.state;
                            this.props.onChange(!checked);
                            this.setState({
                                checked: !checked,
                            });
                        }}
                    />
                    &nbsp; {keterangan}
                </label>
            </>
        )
    }
}
