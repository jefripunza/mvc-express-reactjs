import React, { Component } from 'react';
import { createError, createModal, createSuccess } from '../../SweetAlert';

import Item from "./Item";

import BintangAdd from './BintangAdd';
import BintangView from './BintangView';

// Modals
import ModalAllReviews from './ModalAllReviews';
import { googleLogin, googleLogout } from '../../../function';
import { Button, InputNumber, InputTextArea, SmallNotice } from '../Form';

// google
import Google from "../../Google";

import { postRequest } from '../../Axios';
import { config, url } from '../../../config';

import Loading from "../../Animates/Loading";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,

            id: this.props.id,
            no_wa: localStorage.getItem("google_no_wa") ? localStorage.getItem("google_no_wa") : null, // target

            // input
            bintang: 0,
            ulasan: null,
            //
            agree_baik: false,
            agree_kirim: false,
            agree_tampil: false,

            animasi_loading: false,
        }
    }

    handleKirimNomorWA() {
        this.setState({
            animasi_loading: true,
        });
        const {
            input_no_wa,
        } = this.state;
        // request
        postRequest(this, url + config.routes_backend.auth.google_wa, {
            email: localStorage.getItem("google_email"),
            no_wa: input_no_wa,
        }, hasil => {
            this.setState({
                no_wa: input_no_wa,
            });
            localStorage.setItem("google_no_wa", input_no_wa);
            createSuccess(hasil.message);
        }, error => {
            createError(error);
        }, () => {
            // kosong
            this.setState({
                animasi_loading: false,
            });
        }, false);
    }

    render() {
        const {
            isLogged,
            no_wa,

            input_no_wa,

            bintang,
            ulasan,
            agree_baik,
            agree_kirim,
            agree_tampil,

            animasi_loading,
        } = this.state;

        const list = this.props.list ? this.props.list : [];

        const jumlah_bintang = list.map(item => {
            const ini_bintang = parseInt(item.bintang);
            return ini_bintang;
        }).reduce((a, b) => a + b, 0) / list.length;

        return (
            <>
                <div class="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                    <h4 class="title-2">Review Netizen</h4>
                    <div class="product-ratting">
                        <ul>
                            <BintangView value={jumlah_bintang} />
                            <li class="review-total ml-1"> <a href="#show_all_review" onClick={e => {
                                e.preventDefault();
                                createModal("Semua Reviews", <ModalAllReviews list={list} />)
                            }}> {jumlah_bintang ? jumlah_bintang.toFixed(1) : 0} bintang ( {list.length} Reviews )</a></li>
                        </ul>
                    </div>
                    <hr />
                    {/* <!-- comment-area --> */}
                    <div class="ltn__comment-area mb-30">
                        <div class="ltn__comment-inner">
                            <ul>
                                {list
                                    .filter((item, i) => {
                                        if (i === 0 || i === 1) {
                                            return true
                                        }
                                        return false
                                    })
                                    .map(item => {
                                        return <>
                                            <Item
                                                {...this.props}
                                                reviewSuccess={this.props.reviewSuccess}
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
                    </div>
                    {/* <!-- comment-reply --> */}
                    <div class="ltn__comment-reply-area ltn__form-box mb-30">
                        <form onSubmit={e => {
                            e.preventDefault();
                        }}>
                            <h4>Buat Review</h4>

                            <Google
                                // debug
                                isFirstLogged={response => {
                                    postRequest(this, url + config.routes_backend.auth.google, {
                                        email: response.profileObj.email,
                                        nama: response.profileObj.name,
                                        link_foto: response.profileObj.imageUrl,
                                    }, hasil => {
                                        googleLogin(hasil, response);
                                        this.setState({
                                            isLogged: true,
                                            no_wa: hasil.no_wa, // selipin
                                        });
                                    }, error => {
                                        createError(error);
                                    }, () => {
                                        // kosong
                                    }, false);
                                }}
                                isLogged={isLogged => {
                                    this.setState({
                                        isLogged,
                                        // no_wa dari localStorage
                                    });
                                }}
                                isLogout={user => {
                                    googleLogout();
                                    this.setState({
                                        isLogged: false,
                                        no_wa: null,
                                        // reset semua choy
                                        bintang: 0,
                                        ulasan: null,
                                        agree_baik: false,
                                        agree_kirim: false,
                                        agree_tampil: false,
                                    });
                                }}
                            />

                            {isLogged ? <>
                                {/* loading */}
                                {animasi_loading ? <>
                                    <Loading message={"Request..."} size={50} fontSize={20} />
                                </> : <>
                                    {/* login session */}
                                    {!no_wa ? <>
                                        <div class="mb-30 mt-30">
                                            <h6>Kami meminta nomor whatsapp anda :</h6>
                                            <InputNumber
                                                value={input_no_wa}
                                                maxLength={13}
                                                placeholder="Nomor WhatsApp*"
                                                onChange={input_no_wa => {
                                                    this.setState({
                                                        input_no_wa,
                                                    });
                                                }}
                                                onEnter={() => {
                                                    if (input_no_wa) {
                                                        if (String(input_no_wa).length >= 11) {
                                                            this.handleKirimNomorWA();
                                                        }
                                                    }
                                                }}
                                            />

                                            {input_no_wa ? <>
                                                {String(input_no_wa).length >= 11 ? <>
                                                    <Button
                                                        mt={0}
                                                        children="Simpan Nomor WhatsApp"
                                                        onClick={() => {
                                                            this.handleKirimNomorWA();
                                                        }}
                                                    />
                                                </> : null}
                                            </> : null}
                                        </div>
                                    </> : <>
                                        <div class="mb-30 mt-30">
                                            <div class="add-a-review">
                                                <h6>Kasih Bintang:</h6>
                                                <div class="product-ratting">
                                                    <ul>
                                                        <BintangAdd onClick={bintang => {
                                                            this.setState({
                                                                bintang,
                                                            });
                                                        }} />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {bintang !== 0 ? <>
                                            <div class="input-item input-item-textarea ltn__custom-icon">
                                                <InputTextArea
                                                    placeholder="Tuliskan ulasan anda..."
                                                    onChange={ulasan => {
                                                        this.setState({
                                                            ulasan,
                                                        });
                                                    }}
                                                />
                                                <SmallNotice
                                                    children={<>
                                                        {ulasan ? <>
                                                            {String(ulasan).length} karakter
                                                        </> : <>
                                                            * panjang ulasan harus minimal 50 karakter
                                                        </>}
                                                    </>}
                                                />
                                            </div>

                                            {String(ulasan).length >= 50 ? <>
                                                <label class="mb-3">
                                                    <input type="checkbox"
                                                        value={agree_baik}
                                                        onChange={e => {
                                                            this.setState({
                                                                agree_baik: e.target.checked,
                                                            });
                                                        }}
                                                    />
                                                    &nbsp; Setuju untuk berkata baik, sopan, dan tidak menyinggung pihak lain atau apapun itu dalam perbuatan buruk.
                                                    dan juga pihak kami akan menghapus review anda tanpa sepengetahuan anda jika itu terjadi.
                                                </label>

                                                {agree_baik ? <>
                                                    <label class="mb-3">
                                                        <input type="checkbox"
                                                            value={agree_kirim}
                                                            onChange={e => {
                                                                this.setState({
                                                                    agree_kirim: e.target.checked,
                                                                });
                                                            }}
                                                        />
                                                        &nbsp; Setuju untuk pihak kami mengirimkan validasi ke nomor WhatsApp anda apakah benar yang mengirimkan review ini adalah anda.
                                                    </label>

                                                    {agree_kirim ? <>
                                                        <label class="mb-0">
                                                            <input type="checkbox"
                                                                value={agree_tampil}
                                                                onChange={e => {
                                                                    this.setState({
                                                                        agree_tampil: e.target.checked,
                                                                    });
                                                                }}
                                                            />
                                                            &nbsp; Setuju untuk kami tampilkan review ini ke website dibagian home.
                                                        </label>

                                                        {agree_tampil ? <>
                                                            <div class="btn-wrapper">
                                                                <button class="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                                    onClick={() => {
                                                                        this.setState({
                                                                            animasi_loading: true,
                                                                        });
                                                                        const {
                                                                            id,
                                                                            //
                                                                            bintang,
                                                                            ulasan,
                                                                        } = this.state;

                                                                        postRequest(this, url + config.routes_backend.user.guest.review, {
                                                                            id,
                                                                            email: localStorage.getItem("google_email"),
                                                                            nama: localStorage.getItem("google_nama"),
                                                                            foto: localStorage.getItem("google_foto"),
                                                                            bintang,
                                                                            ulasan,
                                                                        }, hasil => {
                                                                            this.props.reviewSuccess();
                                                                            createSuccess(hasil.message);
                                                                        }, error => {
                                                                            createError(error);
                                                                        }, () => {
                                                                            this.setState({ // reset
                                                                                bintang: 0,
                                                                                ulasan: null,
                                                                                agree_baik: false,
                                                                                agree_kirim: false,
                                                                                agree_tampil: false,
                                                                                //
                                                                                animasi_loading: false,
                                                                            });
                                                                        }, false);

                                                                    }}
                                                                >Submit</button>
                                                            </div>
                                                        </> : null}

                                                    </> : null}
                                                </> : null}
                                            </> : null}
                                        </> : null}
                                    </>}
                                    {/* login session */}
                                </>}
                            </> : null}
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
