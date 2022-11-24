/* React Library */
import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";

// import { dummyData } from "../data/dummyData";
import { newDummyData } from "../data/newDummyData";

/* Context 생성 */
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
        dataTypes: Number(`${column.dataType}`),
        algorithm: "미선택",
        type: 0,
        degree: 0,
      })))(),
  };

  /* useReducer에서 발생되는 이벤트들 */
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
  /* save에 initialState저장, 이벤트 전달할 saveDispatch 생성*/
  const [save, saveDispatch] = useReducer(ContextReducer, initialState);

  let [dataTran, setDataTran] = useState([]);

  useEffect(() => {
    setDataTran(newDummyData);
  }, [save]);

  return (
    <StateContext.Provider
      value={{
        state: { save },
        actions: { saveDispatch },
        dataTran,
        setDataTran,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
