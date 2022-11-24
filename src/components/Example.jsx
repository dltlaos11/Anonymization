import React from "react";
import { Table } from "antd";
import { Header } from "./";

const Example = () => {
  const columns = [
    {
      title: "Algorithm",
      dataIndex: "algorithm",
      width: "10%",
    },
    {
      title: "Before",
      dataIndex: "before",
      width: "10%",
    },
    {
      title: "After",
      dataIndex: "after",
      width: "30%",
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
      <div className="m-2 p-5 md:m-10 bg-white w-[1000px]">
        <Header title="예시" />
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          scroll={{ x: true, y: 300 }}
          pagination={false}
          bordered
        />
      </div>
    </>
  );
};

export default Example;
