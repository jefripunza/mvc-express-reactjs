import React from 'react';

// Table
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import { pagination } from "../../../config";

// eslint-disable-next-line
const { SearchBar } = Search;

const index = ({ rows, columns, search }) => {
  return (
    <>
      <style>
        {`
          .expanded-container{
            width: 97vw;
            white-space: nowrap;
          }
          table thead tr th{
            text-align: center;
          }
        `}
      </style>
      <ToolkitProvider
        keyField="id"
        data={rows}
        columns={columns}
        search={search !== undefined ? true : false}
      >
        {props => {
          // console.log(props.searchProps)
          return <>
            <div
              style={{ overflowX: "auto" }}
            >
              <div
              // className="expanded-container"
              >
                {/* <hr />
            {search !== undefined ? <>
              <SearchBar {...props.searchProps} />
            </> : null} */}
                <BootstrapTable
                  {...props.baseProps}
                  pagination={pagination}
                  bootstrap4={true}
                  footerClasses="text-center"
                  wrapperClasses="expanded-container"
                  striped
                  hover
                  condensed
                />
              </div>
            </div>
          </>
        }}
      </ToolkitProvider>

    </>
  );
};

export default index;