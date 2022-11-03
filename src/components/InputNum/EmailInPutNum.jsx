import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  memo,
} from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Table, Menu, Select, Dropdown, Button, InputNumber } from "antd";
import { EmailStateContext } from "../../contexts/EmailContextProvider";

const EmailInPutNum = () => {
  let { emailData, setEmailData } = useStateContext();
  let { emailId, setEmailId } = useStateContext();

  const emailContext = useContext(EmailStateContext);

  const onChangeInput = (value) => {
    console.log("changed", value);
    emailContext.actions.emailAddDispatch({
      type: "degree",
      payload: value,
    });
  };

  return (
    <div>
      {emailData === "마스킹" ? (
        <InputNumber
          style={{
            width: 80,
          }}
          min={0}
          max={2}
          defaultValue={0}
          onChange={onChangeInput}
        />
      ) : (
        <InputNumber
          style={{
            width: 80,
          }}
          min={0}
          defaultValue={0}
          onChange={onChangeInput}
        />
      )}
    </div>
  );
};

export default EmailInPutNum;
