/* React Library */
import React, { useState, useEffect } from "react";
/* Ant Design */
import { Table, ExportTableButton } from "ant-table-extensions";
/* Internal Files */
import { dummy } from "../data/SendData";
import Header from "./Header";

const Preview = () => {
  let data = [];
  /* Table dataSource */
  let dataItem = [];

  console.log(dummy);
  //칼럼 설정
  let Column = dummy[0].map((row) => row.columnName);
  console.log(Column, "Column");

  /* Columns */
  const columns = Column.map((column, index) => {
    return {
      key: index,
      title: column,
      dataIndex: column,
      width: "20%",
    };
  });

  /* Data */
  dummy.map((item) => {
    data.push(item.map((row) => row.data));
  });
  console.log(data, "data");

  /* key, value data */
  data.map((item) => {
    let Tdata = {};
    item.forEach((dataSource, idx) => {
      console.log("datasource" + idx + ":" + dataSource);
      Tdata[Column[idx]] = dataSource;
    });
    dataItem.push(Tdata);
  });
  console.log(dataItem, "dataItem");

  /* 테이블 key 넣기 */
  let a = 0;
  const Data = dataItem.map((dummy) => {
    a += 1;
    dummy.key = a;
    return dummy;
  });

  useEffect(() => {}, [Data.length]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div className="m-2 md:m-10 h-[700px] mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div className=" w-full h-20 flex">
          <div className="my-auto text-3xl pl-4 flex justify-start">
            <Header title="[알고리즘] 미리보기" />
            <div className="mb-2 absolute right-[160px]">
              <ExportTableButton
                dataSource={dataItem}
                columns={columns}
                btnProps={{ type: "primary" }}
                showColumnPicker
              >
                Export to CSV
              </ExportTableButton>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl">
          <Table
            columns={columns}
            dataSource={dataItem}
            onChange={onChange}
            scroll={{ x: true, y: 500 }}
            pagination={false}
          />
        </div>
      </div>
    </>
  );
};

export default Preview;
