import React, {
  useEffect,
  createContext,
  useContext,
  useState,
  useReducer,
} from "react";
import { useStateContext } from "./ContextProvider";

export const EmailStateContext = createContext();

let initialState = [];

const email = "email";
const 마스킹 = "마스킹";
const 해시 = "해시";
const AES = "AES";
const degree = "degree";
const initial = "initial";

const addReducer = (prev, action) => {
  switch (action.type) {
    case email:
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

export const EmailContextProvider = ({ children }) => {
  // let [isSelected, setIsSelected] = useState(initialState);
  const [emailAdd, emailAddDispatch] = useReducer(addReducer, initialState);

  let { emailId, setEmailId } = useStateContext();

  let value = {
    state: { emailAdd },
    actions: { emailAddDispatch },
  };

  useEffect(() => {
    setEmailId(value.state);
    // console.log(emailId);
  }, [emailAdd]);

  return (
    <EmailStateContext.Provider value={value}>
      {children}
    </EmailStateContext.Provider>
  );
};

export const useEmailStateContext = () => useContext(EmailStateContext);
