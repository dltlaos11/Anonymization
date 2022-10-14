import React from "react";

import { Table, Button } from "antd";

const PreviewTable = ({ col }) => {
  const data = [
    {
      key: "1",
      useMemBirth: "김개똥",
      useMemNum: "2022-10-03 10:14:45",
      useMemEmail: "234",
    },
  ];
  return (
    <div>
      {" "}
      <Table
        columns={col}
        dataSource={data}
        scroll={{ y: 300 }}
        pagination={false}
      />
    </div>
  );
};

export default PreviewTable;
