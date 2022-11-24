/* React Library */
import React, { useState, useEffect } from "react";
/* Ant Design */
import { Select } from "antd";

const MemIdInPutNum = (props) => {
  const { Option } = Select;

  let [options, setOptions] = useState();
  let [subIdx, setSubIdx] = useState();

  useEffect(() => {
    let sub = [];
    let subIndex = [];
    props.setType(props.degreeOptions?.typeValue);
    props.degreeOptions?.degrees?.forEach((row) => {
      sub.push({ value: row });
      subIndex.push(row);
    });
    if (sub.length === 0) {
      sub.push({ value: "0" });
    }
    setOptions(sub);
    setSubIdx(subIndex);
  }, [props.degreeOptions]);

  return (
    <div>
      <Select
        onChange={(e) => {
          console.log(e, subIdx.indexOf(e) + 1, "degree");
          props.onChange(subIdx.indexOf(e) + 1);
        }}
        defaultValue="0"
        style={{ width: 100 }}
        options={options}
      ></Select>
    </div>
  );
};

export default MemIdInPutNum;
