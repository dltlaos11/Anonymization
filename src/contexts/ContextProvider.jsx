import React, { createContext, useContext, useState, useReducer } from "react";
import { Preview } from "../components";

export const StateContext = createContext();

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

export const ContextProvider = ({ children }) => {
  let [isSelected, setIsSelected] = useState(initialState);
  let [isRowSelected, setIsRowSelected] = useState([]);

  let [story, setStory] = useState([]);
  return (
    <StateContext.Provider
      value={{
        story,
        setStory,
        isRowSelected,
        setIsRowSelected,
        isSelected,
        setIsSelected,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
