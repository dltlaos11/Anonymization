import React, {
  useState,
  useEffect,
  useReducer,
  memo,
  useContext,
} from "react";
import { Header, Preview, MemIdInPutNum } from "./";
import { Table, Menu, Select, Dropdown, Button, InputNumber } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useStateContext, StateContext } from "../contexts/ContextProvider";
import { EmailStateContext } from "../contexts/EmailContextProvider";
import { MemIdStateContext } from "../contexts/MemIdContextProvider";
import EmailInPutNum from "./InputNum/EmailInPutNum";
import MemIdMenu from "./AlgorithmMenu/MemIdMenu";
import EmailMenu from "./AlgorithmMenu/EmailMenu";

import { dummyData } from "../data/dummyData";

const Anonymization = (props) => {
  const { Option, OptGroup } = Select;
  // let [selected, setSelected] = useState([]);

  let { isSelected, setIsSelected } = useStateContext();
  let { isRowSelected, setIsRowSelected } = useStateContext();

  const initialState2 = {
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

  const memNumType = "memNumType";
  const memEmailType = "memEmailType";
  const memBirthType = "memBirthType";
  const memHeightType = "memHeightType";
  const memWeightType = "memWeightType";
  const spemNumType = "spemNumType";
  const spermActivityType = "spermActivityType";
  const spermCoType = "spermCoType";
  const spermDateType = "spermDateType";

  const changeReducer = (prev, action) => {
    switch (action.type) {
      case useMemNum:
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

      case memNumType:
        return { ...prev, memNumType: action.memNumType };
      case memEmailType:
        return { ...prev, memEmailType: action.memEmailType };
      case memBirthType:
        return { ...prev, memBirthType: action.memBirthType };
      case memHeightType:
        return { ...prev, memHeightType: action.memHeightType };
      case memWeightType:
        return { ...prev, memWeightType: action.memWeightType };
      case spemNumType:
        return { ...prev, spemNumType: action.spemNumType };
      case spermActivityType:
        return { ...prev, spermActivityType: action.spermActivityType };
      case spermCoType:
        return { ...prev, spermCoType: action.spermCoType };
      case spermDateType:
        return { ...prev, spermDateType: action.spermDateType };

      case initial:
        return { ...initialState2 };

      default:
        return prev;
    }
  };

  let [change, changeDispatch] = useReducer(changeReducer, initialState2);

  let { emailId, setEmailId } = useStateContext();
  let { memId, setMemId } = useStateContext();
  let [menuList, setMenuList] = useState(new Array());

  const memIdContext = useContext(MemIdStateContext);
  const emailContext = useContext(EmailStateContext);

  // const email = "email";
  // const 마스킹 = "마스킹";
  // const 해시 = "해시";
  // const AES = "AES";

  // const addReducer = (prev, action) => {
  //   switch (action.type) {
  //     case email:
  //       return { ...prev, ColumnName: action.payload };
  //     case 마스킹:
  //       return { ...prev, algorithm: 0, type: 0 };
  //     case 해시:
  //       return { ...prev, algorithm: 1, type: 0 };
  //     case AES:
  //       return { ...prev, algorithm: 2, type: 0 };
  //     default:
  //       return prev;
  //   }
  // };
  // let [add, addDispatch] = useReducer(addReducer, initialState);

  // const [inputs, setInputs] = useState({
  //   ColumnName: "",
  //   algorithm: "",
  //   type: "",
  //   degree: "",
  // });

  // const { ColumnName, algorithm, type, degree } = inputs;

  // const onChange2 = (e) => {
  //   const { ColumnName } = e;
  //   setInputs({
  //     ...inputs,
  //     [ColumnName]: e,
  //   });
  //   console.log(inputs);
  // };

  // const onRest = () => {
  //   setInputs({
  //     ColumnName: "",
  //     algorithm: "",
  //     type: "",
  //     degree: "",
  //   });
  // };

  let [select, setSelect] = useState({
    selectedRowKeys: [],
  });
  let { selectedRowKeys } = select;

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: (selectedRowKeys) => {
  //     console.log(selectedRowKeys);
  //     selectedRowKeys.map((e) => {
  //       emailContext.actions.emailAddDispatch({
  //         type: `${selectedRowKeys[selectedRowKeys.length - 1]}`,
  //         payload: selectedRowKeys[selectedRowKeys.length - 1],
  //       });
  //       memIdContext.actions.memIdAddDispatch({
  //         type: `${selectedRowKeys[selectedRowKeys.length - 1]}`,
  //         payload: selectedRowKeys[selectedRowKeys.length - 1],
  //       });
  //     });
  //     setSelect({ ...select, selectedRowKeys });
  //   },
  // };
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked

      filed: record.columnName,
    }),
  };

  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelect({ selectedRowKeys: [] });
      setLoading(false);
    }, 1000);
  };

  const columns = [
    Table.SELECTION_COLUMN,

    {
      title: "Filed",
      dataIndex: "filed",
      key: "filed",
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
      width: "10%",
    },
  ];

  const onChangeInput = (value) => {
    console.log("changed", value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  //   const items = [
  //   const getItem = (label, key, icon, children, type) => {
  //     return { key, icon, children, label, type };
  //   };

  //   let { emailData, setEmailData } = useStateContext();
  //   let { memIdData, setMemIdData } = useStateContext();

  //   let emailItems = [
  //     getItem(`${emailData}`, null, null, [
  //       getItem(
  //         "가명화 기법",
  //         null,
  //         null,
  //         [getItem("마스킹", "마스킹"), getItem("해시", "해시")],
  //         "group"
  //       ),
  //       getItem("암호화 기술", null, null, [getItem("AES", "AES")], "group"),
  //     ]),
  //   ];

  //   const [birthData, setBirthData] = useState("미선택");

  //   let birthItems = [
  //     getItem(`${birthData}`, null, null, [
  //       getItem(
  //         "가명화 기법",
  //         null,
  //         null,
  //         [getItem("마스킹", "마스킹"), getItem("해시", "해시")],
  //         "group"
  //       ),
  //       getItem(
  //         "일반화 기술",
  //         null,
  //         null,
  //         [
  //           getItem("라운딩", "라운딩", null, [
  //             getItem(
  //               "라운딩",
  //               null,
  //               null,
  //               [
  //                 getItem("반올림", "라운딩-반올림"),
  //                 getItem("올림", "라운딩-올림"),
  //                 getItem("내림", "라운딩-내림"),
  //               ],
  //               "group"
  //             ),
  //           ]),
  //         ],
  //         "group"
  //       ),
  //       getItem("암호화 기술", null, null, [getItem("AES", "AES")], "group"),
  //     ]),
  //   ];

  //   const [heightData, setHeightData] = useState("미선택");

  //   let heightItems = [
  //     getItem(`${heightData}`, null, null, [
  //       getItem(
  //         "가명화 기법",
  //         null,
  //         null,
  //         [getItem("마스킹", "마스킹"), getItem("해시", "해시")],
  //         "group"
  //       ),
  //       getItem(
  //         "일반화 기술",
  //         null,
  //         null,
  //         [
  //           getItem("라운딩", "라운딩", null, [
  //             getItem(
  //               "라운딩",
  //               null,
  //               null,
  //               [
  //                 getItem("반올림", "라운딩_반올림"),
  //                 getItem("올림", "라운딩_올림"),
  //                 getItem("내림", "라운딩_내림"),
  //               ],
  //               "group"
  //             ),
  //           ]),
  //           getItem("상하단 코딩", "상하단 코딩"),
  //         ],
  //         "group"
  //       ),
  //       getItem(
  //         "통계 기법",
  //         null,
  //         null,
  //         [getItem("총계 처리", "총계 처리")],
  //         "group"
  //       ),
  //       getItem("암호화 기술", null, null, [getItem("AES", "AES")], "group"),
  //     ]),
  //   ];

  //   const [weightData, setWeightData] = useState("미선택");

  //   let weightItems = [
  //     getItem(`${weightData}`, null, null, [
  //       getItem(
  //         "가명화 기법",
  //         null,
  //         null,
  //         [getItem("마스킹", "마스킹"), getItem("해시", "해시")],
  //         "group"
  //       ),
  //       getItem(
  //         "일반화 기술",
  //         null,
  //         null,
  //         [

  //           getItem("라운딩", "라운딩", null, [
  //             getItem(
  //               "라운딩",
  //               null,
  //               null,
  //               [
  //                 getItem("반올림", "라운딩_반올림"),
  //                 getItem("올림", "라운딩_올림"),
  //                 getItem("내림", "라운딩_내림"),
  //               ],
  //               "group"
  //             ),
  //           ]),
  //         ],
  //         "group"
  //       ),
  //       getItem(
  //         "통계 기법",
  //         null,
  //         null,
  //         [getItem("총계 처리", "총계 처리")],
  //         "group"
  //       ),
  //       getItem("암호화 기술", null, null, [getItem("AES", "AES")], "group"),
  //     ]),
  //   ];

  //   const [spermIdData, setSpermIdData] = useState("미선택");

  //   let spermIdItems = [
  //     getItem(`${spermIdData}`, null, null, [
  //       getItem(
  //         "가명화 기법",
  //         null,
  //         null,
  //         [getItem("마스킹", "마스킹"), getItem("해시", "해시")],
  //         "group"
  //       ),
  //       getItem("암호화 기술", null, null, [getItem("AES", "AES")], "group"),
  //     ]),
  //   ];

  //   const [activityData, setActivityData] = useState("미선택");

  //   let activitItems = [
  //     getItem(`${activityData}`, null, null, [
  //       getItem("가명화 기법", null, null, [getItem("해시", "해시")], "group"),
  //       getItem("암호화 기술", null, null, [getItem("AES", "AES")], "group"),
  //     ]),
  //   ];

  //   const [coData, setCoData] = useState("미선택");

  //   let coItems = [
  //     getItem(`${coData}`, null, null, [
  //       getItem("가명화 기법", null, null, [getItem("해시", "해시")], "group"),
  //       getItem("암호화 기술", null, null, [getItem("AES", "AES")], "group"),
  //       getItem(
  //         "일반화 기술",
  //         null,
  //         null,
  //         [
  //           getItem("라운딩", "라운딩", null, [
  //             getItem(
  //               "라운딩",
  //               null,
  //               null,
  //               [
  //                 getItem("반올림", "라운딩_반올림"),
  //                 getItem("올림", "라운딩_올림"),
  //                 getItem("내림", "라운딩_내림"),
  //               ],
  //               "group"
  //             ),
  //           ]),
  //           getItem("상하단 코딩", "상하단 코딩"),
  //         ],
  //         "group"
  //       ),
  //       getItem(
  //         "통계 기법",
  //         null,
  //         null,
  //         [getItem("총계 처리", "총계 처리")],
  //         "group"
  //       ),
  //     ]),
  //   ];

  //   const [dateData, setDateData] = useState("미선택");

  //   let dateItems = [
  //     getItem(`${dateData}`, null, null, [
  //       getItem(
  //         "가명화 기법",
  //         null,
  //         null,
  //         [getItem("마스킹", "마스킹"), getItem("해시", "해시")],
  //         "group"
  //       ),
  //       getItem("암호화 기술", null, null, [getItem("AES", "AES")], "group"),
  //       getItem(
  //         "무작위화 기술",
  //         null,
  //         null,
  //         [
  //           getItem("잡음추가", "잡음추가", null, [
  //             getItem(
  //               "잡음추가",
  //               null,
  //               null,
  //               [
  //                 getItem("초", "잡음추가_초"),
  //                 getItem("분", "잡음추가_분"),
  //                 getItem("시", "잡음추가_시"),
  //                 getItem("일", "잡음추가_일"),
  //                 getItem("월", "잡음추가_월"),
  //               ],
  //               "group"
  //             ),
  //           ]),
  //           getItem("부분 총계", "부분 총계"),
  //         ],
  //         "group"
  //       ),
  //     ]),
  //   ];
  // ];

  // let data = [
  //   {
  //     key: "memId",
  //     filed: "memId",
  //     check: "미사용",
  //     algorithm: <MemIdMenu index={z} />,
  //     degree: <MemIdInPutNum />,
  //   },
  // ];
  //   // {
  //   //   key: "email",
  //   //   filed: "Email",
  //   //   check: "미사용",
  //   //   algorithm: <EmailMenu />,
  //   //   degree: <EmailInPutNum />,
  //   // },
  //   // {
  //   //   key: "birth",
  //   //   filed: "Birth",
  //   //   check: "미사용",
  //   //   algorithm: (
  //   //     <Menu
  //   //       onClick={(e) => {
  //   //         console.log("click", e);
  //   //         setBirthData(e.key);
  //   //       }}
  //   //       style={{
  //   //         width: 130,
  //   //       }}
  //   //       mode="vertical"
  //   //       items={birthItems}
  //   //     />
  //   //   ),
  //   //   degree: (
  //   //     <InputNumber
  //   //       style={{
  //   //         width: 80,
  //   //       }}
  //   //       min={0}
  //   //       max={10}
  //   //       defaultValue={0}
  //   //       onChange={onChangeInput}
  //   //     />
  //   //   ),
  //   // },
  //   // {
  //   //   key: "height",
  //   //   filed: "Height",
  //   //   check: "미사용",
  //   //   algorithm: (
  //   //     <Menu
  //   //       onClick={(e) => {
  //   //         console.log("click", e);
  //   //         setHeightData(e.key);
  //   //       }}
  //   //       style={{
  //   //         width: 130,
  //   //       }}
  //   //       mode="vertical"
  //   //       items={heightItems}
  //   //     />
  //   //   ),
  //   //   degree: (
  //   //     <InputNumber
  //   //       style={{
  //   //         width: 80,
  //   //       }}
  //   //       min={0}
  //   //       max={10}
  //   //       defaultValue={0}
  //   //       onChange={onChangeInput}
  //   //     />
  //   //   ),
  //   // },
  //   // {
  //   //   key: "weight",
  //   //   filed: "Weight",
  //   //   check: "미사용",
  //   //   algorithm: (
  //   //     <Menu
  //   //       onClick={(e) => {
  //   //         console.log("click", e);
  //   //         setWeightData(e.key);
  //   //       }}
  //   //       style={{
  //   //         width: 130,
  //   //       }}
  //   //       mode="vertical"
  //   //       items={weightItems}
  //   //     />
  //   //   ),
  //   //   degree: (
  //   //     <InputNumber
  //   //       style={{
  //   //         width: 80,
  //   //       }}
  //   //       min={0}
  //   //       max={10}
  //   //       defaultValue={0}
  //   //       onChange={onChangeInput}
  //   //     />
  //   //   ),
  //   // },
  //   // {
  //   //   key: "spermId",
  //   //   filed: "SpermID",
  //   //   check: "미사용",
  //   //   algorithm: (
  //   //     <Menu
  //   //       onClick={(e) => {
  //   //         console.log("click", e);
  //   //         setSpermIdData(e.key);
  //   //       }}
  //   //       style={{
  //   //         width: 130,
  //   //       }}
  //   //       mode="vertical"
  //   //       items={spermIdItems}
  //   //     />
  //   //   ),
  //   //   degree: (
  //   //     <InputNumber
  //   //       style={{
  //   //         width: 80,
  //   //       }}
  //   //       min={0}
  //   //       max={10}
  //   //       defaultValue={0}
  //   //       onChange={onChangeInput}
  //   //     />
  //   //   ),
  //   // },
  //   // {
  //   //   key: "activity",
  //   //   filed: "Activity",
  //   //   check: "미사용",
  //   //   algorithm: (
  //   //     <Menu
  //   //       onClick={(e) => {
  //   //         console.log("click", e);
  //   //         setActivityData(e.key);
  //   //       }}
  //   //       style={{
  //   //         width: 130,
  //   //       }}
  //   //       mode="vertical"
  //   //       items={activitItems}
  //   //     />
  //   //   ),
  //   //   degree: (
  //   //     <InputNumber
  //   //       style={{
  //   //         width: 80,
  //   //       }}
  //   //       min={0}
  //   //       max={10}
  //   //       defaultValue={0}
  //   //       onChange={onChangeInput}
  //   //     />
  //   //   ),
  //   // },
  //   // {
  //   //   key: "co",
  //   //   filed: "Co",
  //   //   check: "미사용",
  //   //   algorithm: (
  //   //     <Menu
  //   //       onClick={(e) => {
  //   //         console.log("click", e);
  //   //         setCoData(e.key);
  //   //       }}
  //   //       style={{
  //   //         width: 130,
  //   //       }}
  //   //       mode="vertical"
  //   //       items={coItems}
  //   //     />
  //   //   ),
  //   //   degree: (
  //   //     <InputNumber
  //   //       style={{
  //   //         width: 80,
  //   //       }}
  //   //       min={0}
  //   //       max={10}
  //   //       defaultValue={0}
  //   //       onChange={onChangeInput}
  //   //     />
  //   //   ),
  //   // },
  //   // {
  //   //   key: "date",
  //   //   filed: "Date",
  //   //   check: "미사용",
  //   //   algorithm: (
  //   //     <Menu
  //   //       onClick={(e) => {
  //   //         console.log("click", e);
  //   //         setDateData(e.key);
  //   //       }}
  //   //       style={{
  //   //         width: 130,
  //   //       }}
  //   //       mode="vertical"
  //   //       items={dateItems}
  //   //     />
  //   //   ),
  //   //   degree: (
  //   //     <InputNumber
  //   //       style={{
  //   //         width: 80,
  //   //       }}
  //   //       min={0}
  //   //       max={10}
  //   //       defaultValue={0}
  //   //       onChange={onChangeInput}
  //   //     />
  //   //   ),
  //   // },
  // ];
  // ]

  // const object = {
  //     key: dummyData[0].columnName,
  //     filed: dummyData[0].columnName,
  //     check: "미사용",
  //     algorithm: <MemIdMenu index={i}/>,
  //     degree: <MemIdInPutNum />,
  // };

  // data.push()
  // let [data, setData] = useState([]);

  let [row, setRow] = useState();

  let { dataTran, setDataTran } = useStateContext();

  const context = useContext(StateContext);

  const [dataSource, setDatasource] = useState([]);
  let data = [];

  useEffect(() => {
    // console.log(select);

    // const allDegree = (val) => {
    //   const res = [];
    //   for (let i = 0; i < val.length; i++) {
    //     for (let j = 0; j < val[i].algorithms.length; j++) {
    //       console.log(val[i].algorithms[j].types);
    //       for (let z = 0; z < val[i].algorithms[j]?.types?.length; z++) {
    //         res.push(val[i].algorithms[j].types[z]?.degrees);
    //       }
    //     }
    //   }
    //   return res;
    // };

    const getDegree = ({ field, algorithm, type }) => {
      // console.log(field, algorithm, type);
      let degree = [];
      const fieldObject = dataTran.find(
        ({ columnName }) => columnName === field
      );
      const algorithms = fieldObject?.groups.map(
        ({ algorithms }) => algorithms
      );

      // const _algorithmObject = algorithms?.find(
      // ([{ algorithmName, types }]) => algorithmName === algorithm
      //  || types
      // );

      // if (algorithmObject === undefined) console.log("hi");

      const algorithmObject = algorithms?.map(([{ types }]) =>
        types?.map((row) => degree.push(row))
      );

      const a = degree.find(({ typeName }) => typeName === algorithm);

      // degreeRes.push(a);

      // const typeObject = algorithmObject?.find(
      //   (e) => e?.forEach((row) => row) === algorithm
      //   ? console.log("same")
      //   : e?.forEach((row) => console.log(row, algorithm))
      // );

      // const typeObject = algorithmObject?.forEach((row) =>
      //   row?.forEach((rows) => console.log(rows))
      // );

      // console.log(a?.degrees);

      // console.log(degrees?.types[0]?.degrees);
      // degree.push(fieldObject);

      // console.log(a, "@@@");
      return a;
    };

    const partDegree = (val) => {
      const res = [];
      for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < val[i].algorithms.length; j++) {
          // console.log(val[i].algorithms[j].types);
          res.push(val[i]?.algorithms[j]?.types);
        }
      }
      // console.log(res, "res입니다");
      // console.log("-------------------");
      return res;
    };

    // const contextRows = context.state.save.rows.map((row) =>
    //   console.log(
    //     // getDegree(row),
    //     // row
    //     context.state.save.rows
    //   )
    // );

    // console.log(contextRowss);
    const rowInfo = dataTran.map((column, idx) => ({
      key: column.columnName,
      filed: column.columnName,
      algorithm: column.groups, // MemIdMenu에서 !
      degree: partDegree(column.groups),
    }));

    // for (let idx = 0; idx < dummyData.length; idx++) {
    //   let object = {
    //     key: rowInfo[idx].key,
    //     filed: rowInfo[idx].filed,
    //     algorithm: <MemIdMenu index={idx} />,
    //     degree: <MemIdInPutNum index={idx} />,
    //   };
    //   // console.log(object);
    //   // let a = data.concat(...data, { object });
    //   // setData([...data, { object }]); // 안되면 객체 다만든 후 data에 push
    //   // console.log(data);
    //   // data.push(object);
    // }
    // setDatasource(data);

    // const a = dataTran.map((row, idx) => row.groups);
    // console.log(
    //   a.forEach((row, idx) => {
    //     for (let i = 0; i < row.length; i++) {
    //       for (let j = 0; j < row[i].algorithms.length; j++) {
    //         console.log(row[i].algorithms[j]);
    //       }
    //     }
    //     console.log("------------------------");
    //     console.log(rowInfo);
    //   })
    // );

    let tableData = rowInfo.map((row, idx) => ({
      key: row.key,
      filed: row.filed,
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
          s
        />
      ),
      degree: (
        <MemIdInPutNum
          index={idx}
          // degreeInfo={row.degree}
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
    setDatasource(tableData);

    // console.log(rowInfo.degree, "@@@@@@@@@@");
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
            start();
          }}
        >
          {" "}
          check
        </Button>

        {/*         
        <Button
          className="bg-red-600"
          onClick={() => {
            console.log(dummyData);
            console.log(dummyData[0].groups);
            console.log(dummyData[0].groups.length);
            console.log(dummyData[1].groups);
            console.log(dummyData[1].groups.length);
            console.log(data);
            // console.log(dummyData[0].groups[0].groupName);
            // console.log(dummyData[0].groups.length);

            // console.log(dummyData[0].columnName);
            // console.log(
            //   dummyData[0].groups[0].algorithms[0].algorithm.algorithmName
            // );
          }}
        >
          값 확인
        </Button>
        <br></br>
        <Button
          className="bg-red-600"
          disabled={!hasSelected}
          loading={loading}
          onClick={() => {
            memIdContext.actions.memIdAddDispatch({
              type: "initial",
            });
            emailContext.actions.emailAddDispatch({
              type: "initial",
            });
            // setEmailData("미선택");
            // setMemIdData("미선택");
            start();
          }}
        >
          값 보기 후 초기화
        </Button>
        <div className="h-24 flex justify-end w-full">
          <Button
            className="bg-red-600"
            onClick={() => {
              // console.log(change);
              console.log(select);
              // console.log(add);
              console.log(emailContext.state.emailAdd);
              console.log(emailId, memId);

              // setIsRowSelected(select.selectedRowKeys); // 전역 저장
              // console.log(change.useMemNum);
            }}
          >
            테이블 생성
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default Anonymization;
