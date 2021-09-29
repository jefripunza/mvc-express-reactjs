import React, { Component } from 'react';

// Components
import Loading from "../Animates/Loading";

// Sweet Alert 2 Package
import MySwal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { convertTimeToDateFullIndo } from '../../utils/date';
import TOS from './TOS';
const Swal = withReactContent(MySwal);

const createModal = (title, children, width = 600) => {
  Swal.fire({
    title: <p>{title}</p>,
    html: children,
    width,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    allowOutsideClick: false,

    didOpen: () => {
      //
    },

    didClose: () => {
      //
    },
  });
}

const createSuccess = (message, timer = 3000, ifClose = false) => {
  Swal.fire({
    title: <p>{message}</p>,
    icon: "success",

    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,

    willClose: () => {
      if (ifClose) {
        ifClose();
      }
    },

    timer,
  });
}
const createError = (message) => {
  Swal.fire({
    title: <p>{message}</p>,
    icon: "error",

    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
  });
}
const createWarning = (message) => {
  Swal.fire({
    title: <p>{message}</p>,
    icon: "warning",

    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
  });
}
const createInfo = (message) => {
  Swal.fire({
    title: <p>{message}</p>,
    icon: "info",

    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
  });
}

const createDelete = (onConfirm, message) => {
  Swal.fire({
    html: message,

    showConfirmButton: true,
    confirmButtonText: <span>Ya</span>,
    confirmButtonColor: "#dc3545",

    showCancelButton: true,
    cancelButtonText: <span>Batal</span>,
    cancelButtonColor: "#6c757d",

    reverseButtons: false,
    showCloseButton: true,
    allowOutsideClick: false,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      onConfirm();
    } else if (result.isDenied) {
      Swal.close();
    }
  });
}

class ModalValidasiPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masukan_password: null,
      password_ok: false,

      // styling
      animasi_loading: false,
    };
  }

  render() {
    const {
      masukan_password,
      password_ok,

      animasi_loading,
    } = this.state;
    return (
      <>
        {animasi_loading ? <>
          <Loading message={"Request..."} size={50} fontSize={20} />
        </> : <>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              onChange={(e) => {
                if (String(e.target.value) === localStorage.getItem("password")) {
                  this.setState({
                    masukan_password: e.target.value,
                    password_ok: true,
                  });
                } else {
                  this.setState({
                    masukan_password: e.target.value,
                    password_ok: false,
                  });
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (masukan_password === localStorage.getItem("password")) {
                    this.props.onMatch();
                  }
                }
              }}
            />
          </div>

          {password_ok ? <>
            <button
              type="button"
              className={"btn btn-" + this.props.warna}
              onClick={() => {
                if (masukan_password === localStorage.getItem("password")) {
                  this.props.onMatch();
                  this.setState({
                    animasi_loading: true,
                  });
                }
              }}
            >{this.props.nama_button}</button>
          </> : null}
        </>}
      </>
    );
  }
}

function validasiPassword(nama_button, onMatch, warna = "success") {
  createModal("Masukan Password", <ModalValidasiPassword nama_button={nama_button} onMatch={onMatch} warna={warna} />);
}

function modalLoading(message) {
  Swal.fire({
    html: <>
      <Loading message={message} size={60} fontSize={20} />
    </>,

    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: false,
    allowOutsideClick: false,
  });
}

function riwayatPeminjaman(nama, array) {
  createModal("Riwayat Peminjaman", <>
    <h4><b>{nama}</b></h4>

    <ul>
      {array.reverse().map(val => {
        return <>
          <li className="text-left mb-3">
            {val.judul} ({val.penerbit}) <br />
            dipinjam : {convertTimeToDateFullIndo(val.tanggal_peminjaman, false)} <br />
            dikembalikan : {convertTimeToDateFullIndo(val.kapan_dikembalikan, false)}
          </li>
        </>;
      })}
    </ul>
  </>);
}

function tampilkanTOS() {
  createModal(null, <TOS />)
}

function closeModal() {
  Swal.close();
}

export {
  createModal,
  createSuccess,
  createError,
  createWarning,
  createInfo,
  createDelete,

  validasiPassword,
  modalLoading,

  riwayatPeminjaman,

  tampilkanTOS,

  closeModal,
}

// Example Modal Components (copy)
// eslint-disable-next-line 
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ok: "ABC",
    };
  }

  render() {
    const {
      ok,
    } = this.state;
    return (
      <>
        {ok}
      </>
    );
  }
}