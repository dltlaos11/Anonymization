import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  useReducer,
} from "react";
import { useStateContext } from "./ContextProvider";

export const MemIdStateContext = createContext();

let initialState = [];

const memId = "memId";
const 마스킹 = "마스킹";
const 해시 = "해시";
const AES = "AES";
const degree = "degree";
const initial = "initial";

const MemIdAddReducer = (prev, action) => {
  switch (action.type) {
    case memId:
      return { ...prev, ColumnName: action.payload };
    case 마스킹:
      return { ...prev, algorithm: 0, type: 0, degree: 0 };
    case 해시:
      return { ...prev, algorithm: 1, type: 0, degree: 0 };
    case AES:
      return { ...prev, algorithm: 2, type: 0, degree: 0 };
    case degree:
      return { ...prev, degree: action.payload };
    case initial:
      return { initialState };
    default:
      return prev;
  }
};

export const MemIdContextProvider = ({ children }) => {
  // let [isSelected, setIsSelected] = useState(initialState);
  const [memIdAdd, memIdAddDispatch] = useReducer(
    MemIdAddReducer,
    initialState
  );

  let { memId, setMemId } = useStateContext();

  let value = {
    state: { memIdAdd },
    actions: { memIdAddDispatch },
  };

  useEffect(() => {
    setMemId(value.state);
    // console.log(memId);
  }, [memIdAdd]);

  return (
    <MemIdStateContext.Provider value={value}>
      {children}
    </MemIdStateContext.Provider>
  );
};

export const useMemIdStateContext = () => useContext(MemIdStateContext);
