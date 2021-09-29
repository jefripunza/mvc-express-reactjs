import React, { Component } from 'react'

export default class BintangView extends Component {
    bintangProcess() {
        const {
            value,
        } = this.props;
        const indents = [];
        for (var i = 0; i < 5; i++) {
            const a = i;
            if (a < value) {
                if ((a - Math.floor(value)) === 0) {
                    indents.push(<li><a href={"#bintang_" + (a - value)} onClick={e => {
                        e.preventDefault();
                    }}><i class="fas fa-star-half-alt"></i></a></li>);
                } else {
                    indents.push(<li><a href={"#bintang_" + (a + 1)} onClick={e => {
                        e.preventDefault();
                    }}><i class="fas fa-star"></i></a></li>);
                }
            } else {
                indents.push(<li><a href={"#bintang_" + (a + 1)} onClick={e => {
                    e.preventDefault();
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
