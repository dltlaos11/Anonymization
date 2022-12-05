/* React Library */
import React, { useState, useEffect, useContext } from "react";
/* Internal Files */
import { Header, MemIdInPutNum, Example } from "./";
import MemIdMenu from "./AlgorithmMenu/MemIdMenu";
/* API */
import algorithmService from "../api/algorithm.service";
import axios from "axios";
import api from "../api/axios";

/* Ant Design */
import { Table, Select, Button, Popover } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
/* Context API */
import { useStateContext, StateContext } from "../contexts/ContextProvider";
/* Emotion */
import styled from "@emotion/styled";

const Anonymization = (props) => {
  const { Option, OptGroup } = Select;

  let [res, setRes] = useState([]);

  /* ContextProvider에서 생성한 context 가져오는 부분  */
  const context = useContext(StateContext);

  /* 알고리즘 적용 테이블 datasource */
  const [dataSource, setDatasource] = useState([]);

  /* context에서 dataTran, setDataTran 함수 가져오는 부분 */
  let { dataTran, setDataTran } = useStateContext();
  /* 알고리즘 적용 Export 버튼 클릭 시 true, false */
  const [loading, setLoading] = useState(false);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  /* 알고리즘 적용 테이블에서 선택된 row 확인 */
  const rowSelection = {
    onChange: (newSelectedRowKeys) => {
      console.log("selectedRowKeys changed: ", newSelectedRowKeys);
      setRes(
        newSelectedRowKeys.map((row, idx) =>
          context.state.save.rows.find(({ field }) => field === row)
        )
      );
      console.log(context.state.save.rows);
      setSelectedRowKeys(newSelectedRowKeys);
    },
    selectedRowKeys,
  };

  /* Export 버튼 클릭시, 선택했던 row들 초기화 */
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setRes([]);
      setLoading(false);
    }, 1000);
  };

  /* Table Columns */
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

  /* useEffect */
  useEffect(() => {
    /* Algorithm에 따라 달라지는 Degree 부분을 나타내는 함수 */
    const getDegree = ({ field, algorithm, dataTypes, type }) => {
      let degree = [];
      const fieldObject = dataTran[0]?.algorithms?.find(
        ({ dataType }) => dataType === Number(dataTypes)
      );

      const algorithms = fieldObject?.groups.map(
        ({ algorithms }) => algorithms
      );

      const algorithmObject = algorithms?.map(([{ types }]) =>
        types?.map((row) => {
          degree.push(row);
        })
      );

      const a = degree.find(({ type }) => type === algorithm);

      return a;
    };

    /* row별 dataType에 따른 algorithms에서 해당되는 dataType에서의 groups 가져오는 함수 */
    const findAlgorithm = (columnDataType) => {
      const algorithmObject = dataTran[0]?.algorithms.find(
        ({ dataType }) => dataType === columnDataType
      );
      return algorithmObject.groups;
    };

    /* findAlgorithm을 거치고 groups에서 types를 선별하는 함수 */
    const partDegree = (val) => {
      const res = [];
      for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < val[i].algorithms.length; j++) {
          res.push(val[i]?.algorithms[j]?.types);
        }
      }
      return res;
    };

    /* context에서 받은 dataTran으로 table구성할 데이터 생성하는 함수 */
    const rowInfo = dataTran[0]?.columns?.map((column, idx) => ({
      key: column.columnName,
      table: column.tableName,
      field: column.columnName,
      algorithm: findAlgorithm(column.dataType), // MemIdMenu에서 !
      degree: partDegree(findAlgorithm(column.dataType)),
    }));

    let tableData = rowInfo?.map((row, idx) => ({
      key: row.key,
      table: row.table,
      field: row.field,
      /* algorithm col에  MemIdMenu컴포넌트 대입하여 idx, 해당하는 idx의 rowInfo(row값들),
        이벤트 클릭 시, 호출되는 onChange함수를 넘김
      */
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
      /* degree col에 MemIdInPutNum 컴포넌트 대입하여 위와 마찬가지로 idx, degreeOptions, onChange(이벤트)를
      prop으로 넘겨줌, 선택한 row별 type값 저장을 위해 setType 함수도 넘겨줌
       */
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
    console.log(rowInfo, "ROWINFO");
    setDatasource(tableData);
  }, [context.actions]);

  /* Antd Icon에 Emotion styled 적용 */
  const ExamIcon = styled(QuestionCircleOutlined)`
    font-size: 22px;
    color: gray;
  `;

  return (
    <>
      <div className="m-2 md:m-10 h-[700px] mt-24 p-2 md:p-10 bg-white rounded-3xl ">
        <div className=" w-full h-20 flex ">
          <div className="my-auto text-3xl pl-4">
            <Header title="알고리즘 적용" />
          </div>
          <div className="my-auto text-xl flex justify-start">
            <div className="my-auto ml-3 mb-9">
              <Popover content={<Example />} title="Example">
                <ExamIcon />
              </Popover>
            </div>
            <div className="absolute right-[160px]">
              <Button
                type="primary"
                onClick={async () => {
                  start();
                  console.log(res); 

                  // /api/select

                  var body = {
                    selectForms: res,
                  };
                  console.log(body);

                  /*
                                    const usersName = JSON.stringify({ selectForms: res });
                  const customConfig = {
                      headers: {
                      'Content-Type': 'application/json'
                      }
                  };
                  const result = await axios.post('/api/select', body, customConfig);
                  
                  console.log(result.data); // '{"name":"John Doe"}'
                  console.log(result.data.headers['Content-Type']); // 'application/json',
                  */

                  /* 
                    var url = new URL("http://localhost:3000/api/select");
                    for (let k in body) { url.searchParams.append(k, body[k]); }
                    fetch(url).then((res)=> console.log(res));
                  */

                    const signupAPI = () => {
                      let data = JSON.stringify( { selectForms: res } );
                      let config = {
                          method: 'get',
                          url: "/api/select" ,
                          headers: { 'Content-Type': 'text/plain' },
                          data: data
                      };
                      axios( config ).then( res => {
                        console.log(res.data)
                      } ).catch( err => {
                          console.log(err);
                      })
                    };
                    signupAPI();


                }}
                
              >
                Export
              </Button>
            </div>
          </div>
        </div>
        <Table
          columns={columns}
          rowSelection={rowSelection}
          dataSource={dataSource}
          pagination={false}
          loading={loading}
          scroll={{ x: true, y: 500 }}
        />
      </div>
    </>
  );
};

export default Anonymization;
