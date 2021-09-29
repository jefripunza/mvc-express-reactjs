import React, { Component } from 'react';

import Item from "./Item";

export default class ModalAllReviews extends Component {
    render() {
        const {
            list,
        } = this.props;
        return (
            <>
                <div class="ltn__comment-inner text-left">
                    <ul>
                        {list.map(item => {
                            return <>
                                <Item
                                    id={item.id}
                                    foto={item.foto}
                                    nama={item.nama}
                                    email={item.email}
                                    bintang={parseInt(item.bintang)}
                                    ulasan={item.ulasan}
                                    tanggal={parseInt(item.input_at)}
                                />
                            </>;
                        })}
                    </ul>
                </div>
            </>
        )
    }
}
