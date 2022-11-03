import React, { useState } from "react";

import { Table, Button } from "antd";
import { Header, PreviewTable } from "./";

import { useStateContext } from "../contexts/ContextProvider";
const PastPreview = () => {
  let { isSelected, setIsSelected } = useStateContext();
  let columns = [];
  let [story, setStory] = useState([]);

  let { isRowSelected, setIsRowSelected } = useStateContext();
  console.log(isSelected);
  for (let i = 0; i < isRowSelected.length; i++) {
    columns.push({
      title: isRowSelected[i],
      dataIndex: isRowSelected[i],
    });
  }

  const addStory = () => {
    setStory(story.concat(<PreviewTable col={columns} />));
  };
  const data = [
    {
      key: "1",
      useMemBirth: "김개똥",
      useMemNum: "2022-10-03 10:14:45",
      useMemEmail: "234",
    },
  ];

  return (
    <>
      <div className="m-2 md:m-10  mt-24 p-2 md:p-10 bg-white rounded-3xl ">
        <Button
          onClick={() => {
            addStory();
          }}
        >
          테이블 추가
        </Button>
        {story}
      </div>
    </>
  );
};

export default PastPreview;
