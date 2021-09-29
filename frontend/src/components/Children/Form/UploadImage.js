import React, { Component } from 'react'
import { byteToMegabyte } from '../../../function';
import { createError } from '../../SweetAlert';

export default class UploadImage extends Component {
    componentDidMount() {
        const {
            id,
            value,
        } = this.props;
        if (value) {
            let output = document.getElementById(`foto_${id}_preview`);
            output.src = URL.createObjectURL(value);
            output.onload = function () {
                URL.revokeObjectURL(output.src) // free memory
            }
        }
    }
    render() {
        const {
            id,
            src,
            value,
            style,
            keterangan,
            syarat,
        } = this.props;
        const {
            max_size,
            extension,
        } = syarat;
        return (
            <>
                <img
                    id={`foto_${id}_preview`}
                    src={src}
                    alt="foto preview"
                    style={{ width: "100%", display: value ? "" : src ? src : "none", ...style }}
                    onClick={() => {
                        document.getElementById(`input_foto_${id}`).click(); // klik input file yang ter-hidden
                    }}
                />
                <label
                    id={`label_foto_${id}_preview`}
                    for={`input_foto_${id}`}
                    class="btn theme-btn-3 mb-10"
                    style={{ display: value ? "none" : src ? "none" : "" }}
                >
                    <i class="fa fa-camera"></i> {keterangan}
                </label>
                <input
                    type="file"
                    id={`input_foto_${id}`}
                    style={{ display: "none" }}
                    onChange={(e) => {
                        const {
                            type,
                            size,
                        } = e.target.files[0];
                        let output = document.getElementById(`foto_${id}_preview`);
                        const onChange = (value) => {
                            this.props.onChange(value)
                        }
                        if (extension.some(v =>
                            type.includes(String(v).toLowerCase())
                        )) {
                            if (byteToMegabyte(size) <= max_size) {
                                output.src = URL.createObjectURL(e.target.files[0]);
                                output.onload = function () {
                                    URL.revokeObjectURL(output.src) // free memory
                                    // const width = this.naturalWidth,
                                    //     height = this.naturalHeight;
                                    output.style.display = "";
                                    document.getElementById(`label_foto_${id}_preview`).style.display = "none";
                                    onChange(e.target.files[0]);
                                }
                            } else {
                                createError(`Ukuran foto maksimal ${max_size} MB !!`)
                                if (document.getElementById(`label_foto_${id}_preview`)) {
                                    document.getElementById(`label_foto_${id}_preview`).style.display = "";
                                }
                                output.style.display = "none";
                                onChange(null);
                            }
                        } else {
                            createError(`Format foto harus ${extension.map(val => {
                                return String(val).toUpperCase()
                            }).join("/")} !!`)
                            if (document.getElementById(`label_foto_${id}_preview`)) {
                                document.getElementById(`label_foto_${id}_preview`).style.display = "";
                            }
                            output.style.display = "none";
                            onChange(null);
                        }
                    }}
                />
                <p>
                    <small>
                        * Format foto harus {extension.map(val => {
                            return String(val).toUpperCase()
                        }).join("/")}.
                    </small><br />
                    <small>
                        * Ukuran foto maksimal {max_size} MB.
                    </small>
                </p>
            </>
        )
    }
}
