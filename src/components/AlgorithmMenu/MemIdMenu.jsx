/* Ant Design */
import { Menu } from "antd";
/* React Library */
import React, { useState } from "react";

const MemIdMenu = (props) => {
  const { onChange } = props;
  let [memIdData, setMemIdData] = useState("미선택");

  const getItem = (label, key, icon, children, type) => {
    return { key, icon, children, label, type };
  };

  const handleOnChange = (index, key) => {
    setMemIdData(key);
  };

  const setItem = (data) => {
    const Items = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i]?.types?.length > 1) {
        Items.push(
          getItem(data[i].algorithmName, data[i].algorithmName, null, [
            getItem(
              data[i].algorithmName,
              null,
              null,
              setSub(data[i]?.types),
              "group"
            ),
          ])
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
      Subs.push(getItem(data[i]?.type, data[i]?.type));
    }
    return Subs;
  };

  const setGroup = (data) => {
    const Groups = [];
    for (let i = 0; i < data?.length; i++) {
      Groups.push(
        getItem(
          data[i].groupName,
          null,
          null,
          setItem(props.rowInfo[props.index].algorithm[i].algorithms),
          "group"
        )
      );
    }
    return Groups;
  };

  let memIdItems = [
    getItem(
      `${memIdData}`,
      null,
      null,

      setGroup(props.rowInfo[props.index]?.algorithm)
    ),
  ];

  return (
    <div className="mb-7">
      <Menu
        onClick={(e) => {
          props.onChange(e.key);

          handleOnChange(props.index, e.key);
        }}
        style={{
          width: 150,
          height: 5,
        }}
        mode="vertical"
        items={memIdItems}
      />
    </div>
  );
};

export default MemIdMenu;
