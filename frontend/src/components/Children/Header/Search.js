import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        const {
            value,
        } = this.state;
        this.props.searchValue(value);
        return (
            <>
                <div class="header-search-wrap">
                    <div class="header-search-1">
                        <div class="search-icon">
                            <i class="icon-search for-search-show"></i>
                            <i class="icon-cancel for-search-close"></i>
                        </div>
                    </div>
                    <div class="header-search-1-form">
                        <form onSubmit={e => {
                            e.preventDefault();
                        }}>
                            <input type="text" name="search" placeholder="Search here..."
                                value={value}
                                onFocus={() => {
                                    this.props.searchFocus(true);
                                }}
                                onChange={e => {
                                    if (String(e.target.value).length > 0) {
                                        this.setState({ value: e.target.value });
                                    } else {
                                        this.setState({ value: null });
                                    }
                                }}
                                onBlur={() => {
                                    this.props.searchFocus(false);
                                    document.querySelector(".for-search-close").click();
                                }}
                            />
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
