import React from "react";
import { Table } from "antd";
import { Header } from "./";

const Example = () => {
  const columns = [
    {
      title: "Algorithm",
      dataIndex: "algorithm",
      width: "30%",
    },
    {
      title: "Before",
      dataIndex: "before",
    },
    {
      title: "After",
      dataIndex: "after",
      width: "40%",
    },
  ];
  const data = [
    {
      key: "1",
      algorithm: "마스킹",
      before: "홍길동",
      after: "홍*동",
    },
    {
      key: "2",
      algorithm: "잡음추가",
      before: "2022-10-03 10:14:45",
      after: "2022-10-07 21:18:11",
    },
    {
      key: "3",
      algorithm: "해쉬",
      before: "234",
      after: "114BD151F8FB0C58642D2170DA4AE7D7C57977260AC2CC8905306CAB6B2ACABC",
    },
    {
      key: "4",
      algorithm: "라운딩",
      before: "14394",
      after: "14000",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div className="m-2 md:m-10 h-[700px] mt-24 p-2 md:p-10 bg-white rounded-3xl ">
        <Header title="예시" />
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          scroll={{ y: 300 }}
          pagination={false}
          bordered
        />
        <div className="h-24 flex justify-end w-full"></div>
      </div>
    </>
  );
};

export default Example;
