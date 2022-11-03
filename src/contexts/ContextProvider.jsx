import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { Preview } from "../components";

import { dummyData } from "../data/dummyData";
export const StateContext = createContext();

const initialState = {
  // context에 저장되는 값
  rows: [
    {
      field: "memId",
      algorithm: "미선택",
      type: 0,
      degree: 0,
    },
    {
      field: "email",
      algorithm: "미선택",
      type: 0,
      degree: 0,
    },
    {
      field: "birth",
      algorithm: "미선택",
      type: 0,
      degree: 0,
    },
    {
      field: "height",
      algorithm: "미선택",
      type: 0,
      degree: 0,
    },
    {
      field: "weight",
      algorithm: "미선택",
      type: 0,
      degree: 0,
    },
    {
      field: "spermId",
      algorithm: "미선택",
      type: 0,
      degree: 0,
    },
    {
      field: "activity",
      algorithm: "미선택",
      type: 0,
      degree: 0,
    },
    {
      field: "co",
      algorithm: "미선택",
      type: 0,
      degree: 0,
    },
    {
      field: "date",
      algorithm: "미선택",
      type: 0,
      degree: 0,
    },
  ],
};

const SET_ALGORITHM_SOURCE = "SET_ALGORITHM_SOURCE";
const SET_DEGREE_SOURCE = "SET_DEGREE_SOURCE";
const SET_TYPE_SOURCE = "SET_TYPE_SOURCE";

const ContextReducer = (prev, action) => {
  switch (action.types) {
    case SET_ALGORITHM_SOURCE:
      return {
        // prev: action.payload,
        ...prev,
        algorithm: action.payload,
      };
    case SET_DEGREE_SOURCE:
      return {
        ...prev,
        degree: action.payload,
      };
    case SET_TYPE_SOURCE:
      return {
        ...prev,
        type: action.payload,
      };
    default:
      return prev;
  }
};

export const ContextProvider = ({ children }) => {
  const [save, saveDispatch] = useReducer(ContextReducer, initialState);

  let value = {
    state: { save },
    actions: { saveDispatch },
  };

  let [story, setStory] = useState([]);
  let [isRowSelected, setIsRowSelected] = useState([]);

  let [rowData, setRowData] = useState([]);
  let [dataTran, setDataTran] = useState([]);

  useEffect(() => {
    // let row = dummyData.map((column, idx) => ({
    //   key: column.columnName,
    //   filed: column.columnName,
    //   algorithm: column.groups, // MemIdMenu에서 !
    // }));
    // setRowData(row);

    // setRowData(
    //   dummyData.map((column, idx) => ({
    //     key: column.columnName,
    //     filed: column.columnName,
    //     algorithm: column.groups, // MemIdMenu에서 !
    //   }))
    // );
    setDataTran(dummyData);
    // console.log(rowData);
  }, [save]);
  // console.log(dataTran);

  let [memIdData, setMemIdData] = useState("미선택"); // InputNum 공간
  let [emailData, setEmailData] = useState("미선택");
  let [birthData, setBirthData] = useState("미선택");

  let [memId, setMemId] = useState([]); // 정보들 담길 공간
  let [emailId, setEmailId] = useState([]);
  let [birthId, setBirthId] = useState([]);

  return (
    <StateContext.Provider
      value={{
        state: { save },
        actions: { saveDispatch },
        dataTran,
        setDataTran,
        rowData,
        setRowData,
        birthData,
        setBirthData,
        birthId,
        setBirthId,
        emailData,
        setEmailData,
        memId,
        setMemId,
        emailId,
        setEmailId,
        story,
        setStory,
        isRowSelected,
        setIsRowSelected,
        memIdData,
        setMemIdData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
