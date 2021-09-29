import React, { Component } from 'react'

export default class BintangAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bintang: 0,
        }
    }

    bintangProcess() {
        const {
            bintang,
        } = this.state;
        const indents = [];
        for (var i = 0; i < 5; i++) {
            const a = i;
            if (a < bintang) {
                indents.push(<li><a href={"#bintang_" + (a + 1)} onClick={e => {
                    e.preventDefault();
                    this.props.onClick(a + 1);
                    this.setState({
                        bintang: a + 1,
                    });
                }}><i class="fas fa-star"></i></a></li>);
            } else {
                indents.push(<li><a href={"#bintang_" + (a + 1)} onClick={e => {
                    e.preventDefault();
                    this.props.onClick(a + 1);
                    this.setState({
                        bintang: a + 1,
                    });
                }}><i class="far fa-star"></i></a></li>);
            }
        }
        return indents;
    }

    render() {
        return (
            <>
                {this.bintangProcess()}
            </>
        )
    }
}
