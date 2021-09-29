import React, { Component } from 'react'

export default class ListDot extends Component {
    render() {
        const {
            list,
            ul_style,
            li_style,
        } = this.props;
        return (
            <>
                <ul
                    style={{ ...ul_style }}
                >
                    {list.map(item => {
                        return <>
                            <li
                                style={{ ...li_style }}
                            >
                                {item}
                            </li>
                        </>;
                    })}
                </ul>
            </>
        )
    }
}
