import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  memo,
} from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Table, Menu, Select, Dropdown, Button, InputNumber } from "antd";
import { MemIdStateContext } from "../../contexts/MemIdContextProvider";

const MemIdInPutNum = (props) => {
  const { Option } = Select;

  let { memId, setMemId } = useStateContext();

  const memIdContext = useContext(MemIdStateContext);

  // useEffect(() => {
  //   console.log(props.degreeInfo);

  //   for (let i = 0; i < props.degreeInfo?.length; i++) {
  //     for (let j = 0; j < props.degreeInfo[i]?.length; j++) {
  //       console.log(props.degreeInfo[i][j]);
  //       return (
  //         <Option value={props.degreeInfo[i][j]}>props.degreeInfo[i][j]</Option>
  //       );
  //     }
  //   }
  // }, []);

  // const a = () => {
  //   for (let i = 0; i < props.degreeInfo?.length; i++) {
  //     for (let j = 0; j < props.degreeInfo[i]?.length; j++) {
  //       // console.log(props.degreeInfo[i][j]);
  //       return (
  //         <Option value={props.degreeInfo[i][j]}>props.degreeInfo[i][j]</Option>
  //       );
  //     }
  //   }
  // };

  let [options, setOptions] = useState();
  useEffect(() => {
    let sub = [];
    console.log(props.degreeOptions?.typeValue);
    props.setType(props.degreeOptions?.typeValue);
    props.degreeOptions?.degrees?.forEach((row) => sub.push({ value: row }));
    console.log(options);
    setOptions(sub);
  }, [props.degreeOptions]);

  return (
    <div>
      <Select
        onChange={(e) => {
          // console.log(e[e.length - 1]);
          // console.log(props.degreeOptions?.typeValue);
          props.onChange(Number(e[e.length - 1]));
        }}
        defaultValue="미적용"
        style={{ width: 120 }}
        options={options}
      ></Select>
      {/* {options.map((option, idx) => (
          <Option value={option.value}>
            {option.value}
            {(() => {
              console.log(options.value);
            })()}
          </Option>
        ))} */}
    </div>
  );
};

export default MemIdInPutNum;
