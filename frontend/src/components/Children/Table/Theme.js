import React, { Component } from 'react'
import { autoScrollTop } from '../../../function';

export default class Theme extends Component {
    constructor(props) {
        super(props);
        const {
            show,
        } = this.props;
        this.state = {
            page: 1,
            limit: show.sort(function (a, b) {
                return a - b;
            })[0],
        }
    }
    render() {
        const {
            columns,
            rows,
            action,
            show,
            search,
        } = this.props;
        const {
            limit,
        } = this.state;
        const row = rows.filter((v, i) => {
            if ((i + 1) <= limit) {
                return true
            }
            return false
        })
        return (
            <>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                {columns.map(item => {
                                    return <>
                                        <th>{item.text}</th>
                                    </>;
                                })}
                                {action ? <>
                                    <th></th>
                                </> : null}
                            </tr>
                        </thead>
                        <tbody>
                            {row.map((row, i) => {
                                return <>
                                    <tr>
                                        <td>
                                            {i + 1}
                                        </td>
                                        {columns.map(item => {
                                            return <>
                                                <td>{row[item.dataField]}</td>
                                            </>;
                                        })}
                                        {action ? <>
                                            <td>
                                                {this.props.action(row)}
                                            </td>
                                        </> : null}
                                    </tr>
                                </>;
                            })}
                        </tbody>
                    </table>
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            tampilkan <select
                                onChange={e => {
                                    this.setState({
                                        limit: parseInt(e.target.value),
                                    });
                                    autoScrollTop();
                                }}
                            >
                                {show.sort(function (a, b) {
                                    return a - b;
                                }).map(item => {
                                    return <>
                                        <option>{item}</option>
                                    </>;
                                })}
                            </select> data dari urutan # ke # <br /> total {rows.length} data.
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <nav className="text-center">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
