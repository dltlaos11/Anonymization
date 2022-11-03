import { Table, Menu, Select, Dropdown, Button, InputNumber } from "antd";
import { useStateContext } from "../../contexts/ContextProvider";
import { MemIdStateContext } from "../../contexts/MemIdContextProvider";

import React, { useContext, useEffect, useState } from "react";
import { dummyData } from "../../data/dummyData";

const MemIdMenu = (props) => {
  const { onChange } = props;
  let [memIdData, setMemIdData] = useState("미선택");

  let { rowData, setRowData } = useStateContext();
  // const memIdContext = useContext(MemIdStateContext);

  // const setMemIdDataDetail = (data) => {
  //   this.memIdData[data] =
  // }

  const getItem = (label, key, icon, children, type) => {
    return { key, icon, children, label, type };
  };

  const handleOnChange = (index, key) => {
    setMemIdData(key);
  };

  const setItem = (data) => {
    // console.log(data);
    const Items = [];
    // console.log("SETITEM " + data.length);
    for (let i = 0; i < data.length; i++) {
      // console.log("hi" + data[i].algorithm.algorithmName);
      if (data[i]?.types?.length > 1) {
        Items.push(
          getItem(
            data[i].algorithmName,
            data[i].algorithmName,
            null,
            // data[i].types.length
            [
              getItem(
                data[i].algorithmName,
                null,
                null,
                setSub(data[i]?.types),
                "group"
              ),
            ]
          )
        );
      } else {
        Items.push(getItem(data[i].algorithmName, data[i].algorithmName));
      }
    }
    return Items;
  };

  const setSub = (data) => {
    const Subs = [];

    for (let i = 0; i < data?.length; i++) {
      Subs.push(getItem(data[i]?.typeName, data[i]?.typeName));
    }
    return Subs;
  };

  const setGroup = (data) => {
    const Groups = [];
    // console.log("SETGROUP " + data.length);
    for (let i = 0; i < data?.length; i++) {
      Groups.push(
        getItem(
          data[i].groupName,
          null,
          null,
          setItem(props.rowInfo[props.index].algorithm[i].algorithms),
          // setItem(dummyData[props.index].groups[i].algorithms),
          "group"
        )
      );
    }
    return Groups;
  };

  // useEffect(() => {
  //   console.log(dummyData[2].groups[3].algorithms[0].types);
  // }, []);

  let memIdItems = [
    getItem(
      `${memIdData}`,
      null,
      null,

      setGroup(props.rowInfo[props.index]?.algorithm)
      // setGroup(dummyData[props.index].groups)
    ),
  ];

  return (
    <div>
      {/* <Button
        onClick={() => {
          console.log(setItem(dummyData[0].groups[0].algorithms));
          console.log(0);
        }}
      >
        check {props.index} 22
      </Button> */}
      <Menu
        onClick={(e) => {
          props.onChange(e.key);

          // console.log("click", e);
          // console.log("memIdData", memIdData);
          handleOnChange(props.index, e.key);
          // memIdContext.actions.memIdAddDispatch({
          //   type: `${e.key}`,
          // });
        }}
        style={{
          width: 130,
        }}
        mode="vertical"
        items={memIdItems}
      />
    </div>
  );
};

export default MemIdMenu;
