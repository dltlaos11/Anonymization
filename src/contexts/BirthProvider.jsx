import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  useReducer,
} from "react";
import { useStateContext } from "./ContextProvider";

export const BirthStateContext = createContext();

let initialState = [];

const birth = "birth";
const 마스킹 = "마스킹";
const 해시 = "해시";
const 라운딩_반올림 = "라운딩_반올림";
const 라운딩_올림 = "라운딩_올림";
const 라운딩_내림 = "라운딩_내림";
const AES = "AES";
const degree = "degree";
const initial = "initial";

const BirthAddReducer = (prev, action) => {
  switch (action.type) {
    case birth:
      return { ...prev, ColumnName: action.payload };
    case 마스킹:
      return { ...prev, algorithm: 0, type: 0, degree: 0 };
    case 해시:
      return { ...prev, algorithm: 1, type: 0, degree: 0 };
    case AES:
      return { ...prev, algorithm: 2, type: 0, degree: 0 };
    case 라운딩_반올림:
      return { ...prev, algorithm: 3, type: 1, degree: 0 };
    case 라운딩_올림:
      return { ...prev, algorithm: 3, type: 2, degree: 0 };
    case 라운딩_내림:
      return { ...prev, algorithm: 3, type: 3, degree: 0 };
    case degree:
      return { ...prev, degree: action.payload };
    case initial:
      return { initialState };
    default:
      return prev;
  }
};

export const BirthContextProvider = ({ children }) => {
  // let [isSelected, setIsSelected] = useState(initialState);
  const [birthAdd, birthAddDispatch] = useReducer(
    BirthAddReducer,
    initialState
  );

  let { birth, setBirth } = useStateContext();

  let value = {
    state: { birthAdd },
    actions: { birthAddDispatch },
  };

  useEffect(() => {
    setBirth(value.state);
    console.log(birth);
  }, [birthAdd]);

  return (
    <BirthStateContext.Provider value={value}>
      {children}
    </BirthStateContext.Provider>
  );
};

export const useBirthStateContext = () => useContext(BirthStateContext);
