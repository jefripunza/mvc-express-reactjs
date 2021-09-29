import React, { Component } from 'react';

// Styling
import {
    UncontrolledTooltip,
} from "reactstrap";
import { config, url } from '../../../config';

import { convertTimeToTanggalIndo } from '../../../function';
import { postRequest } from '../../Axios';
import { createDelete, createError, createModal, createSuccess, modalLoading } from '../../SweetAlert';
import { ButtonIcon } from '../Form';

import BintangView from './BintangView';

// Modals
import ModalLaporkan from './ModalLaporkan';

export default class Item extends Component {
    render() {
        const {
            id, // for request report
            foto,
            nama,
            email,
            bintang,
            ulasan,
            tanggal,
        } = this.props;
        return (
            <>
                <li>
                    <div class="ltn__comment-item clearfix">
                        <div class="ltn__commenter-img">
                            <div className="text-center text-danger">
                                <img
                                    id={"tooltip-" + String(nama).replaceAll(" ", "_").replaceAll("'", "_") + "-" + String(email).split("@")[0]}
                                    src={foto}
                                    alt="foto review"
                                />
                                <a href="#report" onClick={e => {
                                    e.preventDefault();
                                    createModal("Laporkan!", <ModalLaporkan {...this.props} id={id} email={email} />);
                                }}>
                                    <b>Laporkan!</b>
                                </a>
                                <br />
                                <ButtonIcon
                                    id={"hapus_" + String(email).replaceAll("@", "_").replaceAll(".", "_")}
                                    warna={"danger"}
                                    icon="fas fa-trash"
                                    tooltip={<>
                                        <text style={{ color: "tomato" }} >Hapus</text> review saya
                                    </>}
                                    onClick={() => {
                                        createDelete(() => {
                                            modalLoading("Menghapus Review...");
                                            postRequest(this, url + config.routes_backend.user.guest.hapus_review, {
                                                id,
                                            }, hasil => {
                                                createSuccess(hasil.message)
                                                this.props.reviewSuccess();
                                            }, error => {
                                                createError(error);
                                            }, () => {
                                                // kosong
                                            }, false);
                                        }, <>
                                            apakah anda ingin menghapus review ini??
                                        </>);
                                    }}
                                />
                            </div>
                        </div>
                        <div class="ltn__commenter-comment">
                            <h6>{nama}</h6>
                            <div class="product-ratting">
                                <ul>
                                    <BintangView value={bintang} />
                                </ul>
                            </div>
                            <p>{ulasan}</p>
                            <span class="ltn__comment-reply-btn">{convertTimeToTanggalIndo(tanggal)}</span>
                        </div>
                    </div>
                    <UncontrolledTooltip delay={0} target={"tooltip-" + String(nama).replaceAll(" ", "_").replaceAll("'", "_") + "-" + String(email).split("@")[0]}>
                        {email}
                    </UncontrolledTooltip>
                </li>
            </>
        )
    }
}
