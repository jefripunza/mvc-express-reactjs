import React, { Component } from 'react';

import { createError, createSuccess } from '../../SweetAlert';
import { ButtonBootstrapOutline, InputTextArea, SelectBootstrap, SmallNotice } from '../Form';
import Loading from '../../Animates/Loading';
import { postRequest } from '../../Axios';
import { config, url } from '../../../config';

export default class ModalLaporkan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jenis_laporan: null,
            keterangan: null,

            animasi_loading: false,
        }
    }

    render() {
        const {
            id,
            email,
        } = this.props;
        const {
            jenis_laporan,
            keterangan,

            animasi_loading,
        } = this.state;
        return (
            <>
                {animasi_loading ? <>
                    <Loading message={"Request..."} size={50} fontSize={20} />
                </> : <>
                    <SelectBootstrap
                        hidden="-- pilih jenis laporan --"
                        option={[
                            {
                                text: "Berkata Kasar",
                                value: "Berkata Kasar",
                            },
                            {
                                text: "Pelecehan",
                                value: "Pelecehan",
                            },
                            {
                                text: "Informasi Palsu",
                                value: "Informasi Palsu",
                            },
                            {
                                text: "Spam",
                                value: "Spam",
                            },
                            {
                                text: "Ujaran Kebencian",
                                value: "Ujaran Kebencian",
                            },
                            {
                                text: "Penipuan",
                                value: "Penipuan",
                            },
                        ]}
                        onChange={jenis_laporan => {
                            this.setState({
                                jenis_laporan,
                            });
                        }}
                    />

                    {jenis_laporan ? <>
                        <InputTextArea
                            placeholder="Keterangan*"
                            onChange={keterangan => {
                                this.setState({
                                    keterangan,
                                });
                            }}
                        />
                        <SmallNotice
                            children={<>
                                {keterangan ? <>
                                    {String(keterangan).length} karakter
                                </> : <>
                                    * panjang keterangan harus minimal 20 karakter
                                </>}
                            </>}
                        />

                        {String(keterangan).length >= 20 ? <>
                            <ButtonBootstrapOutline
                                warna="success"
                                children="Kirim Laporan"
                                onClick={() => {
                                    // request
                                    const {
                                        jenis_laporan,
                                        keterangan,
                                    } = this.state;
                                    this.setState({
                                        animasi_loading: true,
                                    });

                                    postRequest(this, url + config.routes_backend.user.guest.laporkan, {
                                        saat: "detail rumah", // dimana
                                        path: window.location.pathname, // ok
                                        tabel: "review", // nama tabel
                                        id_tabel: id, // is item
                                        email, // target
                                        jenis_laporan, // about
                                        keterangan, // content
                                    }, hasil => {
                                        createSuccess(hasil.message, 5000);
                                    }, error => {
                                        createError(error);
                                    }, () => {
                                        // kosong
                                    }, false);
                                }}
                            />
                        </> : null}
                    </> : null}
                </>}
            </>
        )
    }
}

