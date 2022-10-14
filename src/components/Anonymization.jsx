import React, { useState, useEffect, useReducer, useContext } from "react";
import { Header, Preview } from "./";
import { Table, Menu, Space, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useStateContext } from "../contexts/ContextProvider";

const Anonymization = (props) => {
  // let [selected, setSelected] = useState([]);

  let { isSelected, setIsSelected } = useStateContext();

  let { isRowSelected, setIsRowSelected } = useStateContext();
  const initialState = {
    memBirthType: "",
    memEmailType: "",
    memHeightType: "",
    memNumType: "",
    memWeightType: "",
    spemNumType: "",
    spermActivityType: "",
    spermCoType: "",
    spermDateType: "",
    spermNumType: "",
    useMemBirth: false,
    useMemEmail: false,
    useMemHeight: false,
    useMemNum: false,
    useMemWeight: false,
    useSpermActivity: false,
    useSpermCo: false,
    useSpermDate: false,
    useSpermNum: false,
  };

  const useMemNum = "useMemNum";
  const useMemEmail = "useMemEmail";
  const useMemHeight = "useMemHeight";
  const useMemWeight = "useMemWeight";
  const useSpermActivity = "useSpermActivity";
  const useSpermCo = "useSpermCo";
  const useSpermDate = "useSpermDate";
  const useSpermNum = "useSpermNum";
  const useMemBirth = "useMemBirth";
  const initial = "initial";

  const [btnclick, setBtnclick] = useState(0);

  const changeReducer = (prev, action) => {
    switch (action.type) {
      case useMemNum:
        // return { ...prev, useMemNum: true };
        return { ...prev, useMemNum: !prev.useMemNum };
      case useMemEmail:
        return { ...prev, useMemEmail: !prev.useMemEmail };
      case useMemHeight:
        return { ...prev, useMemHeight: !prev.useMemHeight };
      case useMemBirth:
        return { ...prev, useMemBirth: !prev.useMemBirth };
      case useMemWeight:
        return { ...prev, useMemWeight: !prev.useMemWeight };
      case useSpermActivity:
        return { ...prev, useSpermActivity: !prev.useSpermActivity };
      case useSpermCo:
        return { ...prev, useSpermCo: !prev.useSpermCo };
      case useSpermDate:
        return { ...prev, useSpermDate: !prev.useSpermDate };
      case useSpermNum:
        return { ...prev, useSpermNum: !prev.useSpermNum };

      case initial:
        return { ...initialState };

      default:
        return prev;
    }
    // if (action === "useMemNum") {
    //   return { ...initialState, useMemNum: true };
    // } else if (action === "useMemEmail") {
    //   return { ...initialState, useMemEmail: true };
    // }
  };

  const [change, changeDispatch] = useReducer(changeReducer, initialState);
  const changeUseMemBirth = () => {
    changeDispatch("useMemNum");
  };

  const [select, setSelect] = useState({
    selectedRowKeys: [],
  });
  let { selectedRowKeys } = select;
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelect({ ...select, selectedRowKeys });
    },
  };

  useEffect(() => {
    // selectedRowKeys.map((e) => {
    //   console.log(e, "22");
    //   changeDispatch({ type: `${e}` });
    // });
  }, [btnclick]);

  const columns = [
    {
      title: "Filed",
      dataIndex: "filed",
      key: "filed",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    Table.SELECTION_COLUMN,
    {
      title: "Check",
      dataIndex: "check",
      key: "check",
    },
    {
      title: "Algorithm",
      dataIndex: "algorithm",
      key: "algorithm",
      render: () => (
        <Dropdown
          onChange={(e) => {
            console.log(e);
          }}
          overlay={menu}
        >
          <Button
            onClick={() => {
              console.log("hi");
            }}
          >
            해시 <DownOutlined />
          </Button>
          {/* <Menu
            items={[
              {
                label: "해시",
                key: "hash",
                children: [
                  {
                    type: "group",
                    // label: "가명화 기법",
                    children: [
                      {
                        label: "마스킹",
                        key: "setting:1",
                      },
                      {
                        label: "해시",
                        key: "setting:2",
                      },
                    ],
                  },
                ],
              },
            ]}
          /> */}
        </Dropdown>
      ),
    },
  ];
  const data = [
    {
      key: "useMemNum",
      filed: "MemID",
      type: "INT",
      check: "미사용",
      algorithm: "해시",
    },
    {
      key: "useMemEmail",
      filed: "Email",
      type: "STRING",
      check: "미사용",
      algorithm: "해시",
    },
    {
      key: "useMemBirth",
      filed: "Birth",
      type: "INT",
      check: "미사용",
      algorithm: "해시",
    },
    {
      key: "useMemHeight",
      filed: "Height",
      type: "STING",
      check: "미사용",
      algorithm: "해시",
    },
    {
      key: "useMemWeight",
      filed: "Weight",
      type: "STRING",
      check: "미사용",
      algorithm: "해시",
    },
    {
      key: "useSpermNum",
      filed: "SpermID",
      type: "INT",
      check: "미사용",
      algorithm: "해시",
    },
    {
      key: "useSpermActivity",
      filed: "Activity",
      type: "STING",
      check: "미사용",
      algorithm: "해시",
    },
    {
      key: "useSpermCo",
      filed: "Co",
      type: "INT",
      check: "미사용",
      algorithm: "해시",
    },
    {
      key: "useSpermDate",
      filed: "Date",
      type: "STING",
      check: "미사용",
      algorithm: "해시",
    },
  ];

  // const items = [
  //   {
  //     label: 'Navigation Three - Submenu',
  //     key: 'SubMenu',
  //     icon: <SettingOutlined />,
  //     children: [
  //       {
  //         type: 'group',
  //         label: 'Item 1',
  //         children: [
  //           {
  //             label: 'Option 1',
  //             key: 'setting:1',
  //           },
  //           {
  //             label: 'Option 2',
  //             key: 'setting:2',
  //           },
  //         ],
  //       },
  //       {
  //         type: 'group',
  //         label: 'Item 2',
  //         children: [
  //           {
  //             label: 'Option 3',
  //             key: 'setting:3',
  //           },
  //           {
  //             label: 'Option 4',
  //             key: 'setting:4',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]
  const menu = (
    <Menu
      items={[
        {
          type: "group",
          label: "가명화 기법",
          children: [
            {
              label: "마스킹",
              key: "setting:1",
            },
            {
              label: "해시",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "일반화 기술",
          children: [
            {
              label: "라운딩",
              key: "setting:3",
            },
          ],
        },
      ]}
    />
  );
  const [loading, setLoading] = useState(false);

  let { story, setStory } = useStateContext();
  const addStory = () => {
    setStory(story.concat(<Preview />));
  };
  return (
    <>
      <div className="m-2 md:m-10 h-[700px] mt-24 p-2 md:p-10 bg-white rounded-3xl ">
        <Header title="알고리즘 적용" />
        <Table
          columns={columns}
          // rowSelection={{
          //   onSelect: (record) => {
          //     // console.log(record);
          //     setSelected((prev) => {
          //       return [...prev, record];
          //     });
          //     console.log(selected);
          //   },

          //   onSelectMultiple: (record) => {
          //     console.log(record, "@@@");
          //   },
          // }}

          rowSelection={rowSelection}
          dataSource={data}
          pagination={false}
          loading={loading}
          scroll={{ x: true, y: 500 }}
        />
        <Button
          className="bg-red-600"
          onClick={() => {
            // changeUseMemBirth();

            console.log("----------");
            console.log(select.selectedRowKeys);
            selectedRowKeys.map((e) => {
              console.log(e, "22");
              changeDispatch({ type: `${e}` });
            });
            setLoading(!loading);
          }}
        >
          값 설정 생성하기
        </Button>
        <br></br>
        <Button
          className="bg-red-600"
          onClick={() => {
            console.log(change);
            changeDispatch({ type: "initial" });
            setLoading(!loading);
            setIsSelected(change);
          }}
        >
          값 보기 후 초기화
        </Button>
        <div className="h-24 flex justify-end w-full">
          <Button
            className="bg-red-600"
            onClick={() => {
              console.log(isSelected);
              console.log(select.selectedRowKeys);
              setIsRowSelected(select.selectedRowKeys);
              // props.setData(select.selectedRowKeys);
              // addStory();
            }}
          >
            테이블 생성
          </Button>
          {/* <button
          onClick={() => {
            console.log("hi");
          }}
          className="bg-red-600 shadow-lg my-auto text-center rounded-2xl text-white p-3 w-32 mr-7"
        >
          export
        </button> */}
        </div>
      </div>
    </>
  );
};

export default Anonymization;
