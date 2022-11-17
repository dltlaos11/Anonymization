import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { Preview } from "../components";

// import { dummyData } from "../data/dummyData";
import { newDummyData } from "../data/newDummyData";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    // context에 저장되는 값
    // rows: [
    //   {
    //     tableName: "memIdTable",
    //     field: "memId",
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   },
    //   {
    //     tableName: "emalTable",
    //     field: "email",
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   },
    //   {
    //     tableName: "birthTable",
    //     field: "birth",
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   },
    //   {
    //     tableName: "heightTable",
    //     field: "height",
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   },
    //   {
    //     tableName: "weightTable",
    //     field: "weight",
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   },
    //   {
    //     tableName: "spermIdTable",
    //     field: "spermId",
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   },
    //   {
    //     tableName: "activityTable",
    //     field: "activity",
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   },
    //   {
    //     tableName: "coTable",
    //     field: "co",
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   },
    //   {
    //     tableName: "dateTable",
    //     field: "date",
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   },
    // ],
    rows: (() =>
      newDummyData[0].columns.map((column, idx) => ({
        tableName: `${column.tableName}`,
        field: `${column.columnName}`,
        dataTypes: `${column.dataType}`,
        algorithm: "미선택",
        type: 0,
        degree: 0,
      })))(),
  };

  // let [initialState, setInitialState] = useState({});

  const [IS, setIS] = useState({});

  // let [initialState, setInitialState] = useState();

  const SET_ALGORITHM_SOURCE = "SET_ALGORITHM_SOURCE";
  const SET_DEGREE_SOURCE = "SET_DEGREE_SOURCE";
  const SET_TYPE_SOURCE = "SET_TYPE_SOURCE";
  const SET_INITIAL_SOURCE = "SET_INITIAL_SOURCE";

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
      case SET_INITIAL_SOURCE:
        return {
          initialState,
        };
      default:
        return prev;
    }
  };

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
    // let rows = [];
    // rows.push({
    //   rows: dummyData.map((column, idx) => ({
    //     tableName: column.tableName,
    //     filed: column.columnName,
    //     algorithm: "미선택",
    //     type: 0,
    //     degree: 0,
    //   })),
    // });

    console.log(newDummyData);
    console.log(newDummyData[0].columns);
    console.log(initialState, "CONFIRN");
    setDataTran(newDummyData);
  }, [save]);

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
