import React, { Component } from 'react';

export default class ListAngka extends Component {
    render() {
        const {
            list,
            ol_style,
            li_style,
        } = this.props;
        return (
            <>
                <ol
                    style={{ ...ol_style }}
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
                </ol>
            </>
        )
    }
}
