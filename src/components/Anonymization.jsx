import React, {
  useState,
  useEffect,
  useReducer,
  memo,
  useContext,
  useRef,
} from "react";
import { Header, Preview, MemIdInPutNum } from "./";
import { Table, Menu, Select, Dropdown, Button, InputNumber } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useStateContext, StateContext } from "../contexts/ContextProvider";
import MemIdMenu from "./AlgorithmMenu/MemIdMenu";

import { dummyData } from "../data/dummyData";

const Anonymization = (props) => {
  const { Option, OptGroup } = Select;

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  let [res, setRes] = useState([]);

  const rowSelection = {
    onChange: (newSelectedRowKeys) => {
      console.log("selectedRowKeys changed: ", newSelectedRowKeys);
      setRes(
        newSelectedRowKeys.map(
          (row, idx) =>
            context.state.save.rows.find(({ field }) => field === row)

          // console.log(row)
        )
      );
      // context.state.save.rows.find(({ field }) => field === "email")

      console.log(context.state.save.rows);
      setSelectedRowKeys(newSelectedRowKeys);
    },
    selectedRowKeys,
  };

  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setRes([]);
      setLoading(false);
    }, 1000);
  };

  const columns = [
    Table.SELECTION_COLUMN,
    {
      title: "Table",
      dataIndex: "table",
      key: "table",
      width: "15%",
    },
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
      width: "15%",
    },
    {
      title: "Algorithm",
      dataIndex: "algorithm",
      key: "algorithm",
      width: "40%",
    },
    {
      title: "Degree",
      dataIndex: "degree",
      key: "degree",
      width: "30%",
    },
  ];

  let [row, setRow] = useState();

  let { dataTran, setDataTran } = useStateContext();

  const context = useContext(StateContext);

  const [dataSource, setDatasource] = useState([]);
  let data = [];

  useEffect(() => {
    const getDegree = ({ field, algorithm, type }) => {
      // console.log(field, algorithm, type);
      let degree = [];
      const fieldObject = dataTran.find(
        ({ columnName }) => columnName === field
      );
      const algorithms = fieldObject?.groups.map(
        ({ algorithms }) => algorithms
      );

      const algorithmObject = algorithms?.map(([{ types }]) =>
        types?.map((row) => degree.push(row))
      );

      const a = degree.find(({ typeName }) => typeName === algorithm);

      return a;
    };

    const partDegree = (val) => {
      const res = [];
      for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < val[i].algorithms.length; j++) {
          res.push(val[i]?.algorithms[j]?.types);
        }
      }
      return res;
    };

    const rowInfo = dataTran.map((column, idx) => ({
      key: column.columnName,
      table: column.tableName,
      field: column.columnName,
      algorithm: column.groups, // MemIdMenu에서 !
      degree: partDegree(column.groups),
    }));

    let tableData = rowInfo.map((row, idx) => ({
      key: row.key,
      table: row.table,
      field: row.field,
      algorithm: (
        <MemIdMenu
          index={idx}
          rowInfo={rowInfo}
          onChange={(value) => {
            const now = context.state.save.rows;
            now[idx].algorithm = value;
            context.actions.saveDispatch({
              types: "SET_ALGORITHM_SOURCE",
              algorithm: now,
            });
            console.log(context.state.save.rows);
          }}
        />
      ),
      degree: (
        <MemIdInPutNum
          index={idx}
          degreeOptions={getDegree(context?.state?.save?.rows[idx])}
          onChange={(value) => {
            const now = context.state.save.rows;
            now[idx].degree = value;
            context.actions.saveDispatch({
              types: "SET_DEGREE_SOURCE",
              degree: now,
            });
            console.log(context.state.save.rows);
          }}
          setType={(value) => {
            const now = context.state.save.rows;
            now[idx].type = value;
            context.actions.saveDispatch({
              types: "SET_TYPE_SOURCE",
              type: now,
            });

            console.log(context.state.save.rows);
          }}
        />
      ),
    }));
    console.log(context?.state);
    setDatasource(tableData);
  }, [context.actions]);

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <div className="m-2 md:m-10 h-[700px] mt-24 p-2 md:p-10 bg-white rounded-3xl ">
        <Header title="알고리즘 적용" />
        <Table
          columns={columns}
          rowSelection={rowSelection}
          dataSource={dataSource}
          pagination={false}
          loading={loading}
          scroll={{ x: true, y: 500 }}
        />

        <Button
          onClick={() => {
            // console.log(select);
            start();
            console.log(res);
            // console.log(context.state.save.rows);
            // context.actions.saveDispatch({
            //   types: "SET_INITIAL_SOURCE",
            // });
          }}
        >
          {" "}
          check
        </Button>
      </div>
    </>
  );
};

export default Anonymization;
