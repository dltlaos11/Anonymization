import React, { useState, useEffect } from "react";
import { Table, ExportTableButton } from "ant-table-extensions";
import { Button } from "antd";
import "antd/dist/antd.css";
// import { Header, PreviewTable } from "./";
import { dummy } from "../data/SendData"; // 경로 수정 ! -> 햇습니당

const Preview = () => {
  const [memberDTO, setMemberDTO] = useState([]);
  const [Column, setColumn] = useState([]);
  //const [Data, setData] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  let Rdata = [];

  // useEffect(() => {
  //   setMemberDTO(Object.keys(dummy[1]));
  //   setColumn([...memberDTO]);
  //   handleData();
  // }, []);

  // useEffect(() => {
  //   handleData();
  // }, [Rdata]);

  const handleData = () => {
    dummy.map((item) => {
      Rdata.push(item);
      // console.log(item);
    });
    setDataSource(Rdata);
  };
  //!data['key'] key값 추가하기
  const columns = Column.map((column, index) => {
    return {
      key: index,
      title: column,
      dataIndex: column,
    };
  });

  let a = 0;
  const Data = dataSource.map((dummy) => {
    a += 1;
    // console.log(dummy);
    dummy.key = a;
    // console.log("hi");
    return dummy; // key 없는 경우
  });

  useEffect(() => {
    // setTimeout(() => {
    //   handleData();
    //   setMemberDTO(Object.keys(dummy[1]));
    //   setColumn([...memberDTO]);
    // }, 1000);

    // store.forEach((e) => {
    //   console.log(e);
    //   if (e === "key") {
    //     e = "";
    //   }
    // });

    handleData();

    // console.log(Object.keys(dummy[0]));
    const store = Object.keys(dummy[0]).filter((e) => e !== "key");

    // console.log(store);
    // console.log(dummy[0]);
    setMemberDTO(store);
    setColumn([...memberDTO]);
    // console.log(Column);
  }, [Data.length]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div className="m-2 md:m-10 h-[700px] mt-24 p-2  bg-white rounded-3xl ">
        {/* <Header title="예시" /> */}
        <ExportTableButton
          dataSource={Data}
          columns={columns}
          btnProps={{ type: "primary" }}
          showColumnPicker
        >
          Export to CSV
        </ExportTableButton>

        <Table
          columns={columns}
          dataSource={Data}
          onChange={onChange}
          scroll={{ y: 500 }}
          pagination={false}
          // exportableProps={{ fileName: "알고리즘미리보기" }}
          // exportable
        />

        {/* <div className="absolute inset-y-[910px]">
          <Button
            onClick={() => {
              console.log(columns, Data);
            }}
          >
            dsdsds
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default Preview;
