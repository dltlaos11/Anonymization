import { Table, Menu, Select, Dropdown, Button, InputNumber } from "antd";
import { useStateContext } from "../../contexts/ContextProvider";
import { EmailStateContext } from "../../contexts/EmailContextProvider";

import React, { useContext } from "react";

const EmailMenu = () => {
  let { emailData, setEmailData } = useStateContext();

  const emailContext = useContext(EmailStateContext);

  const getItem = (label, key, icon, children, type) => {
    return { key, icon, children, label, type };
  };

  let emailItems = [
    getItem(`${emailData}`, null, null, [
      getItem(
        "가명화 기법",
        null,
        null,
        [getItem("마스킹", "마스킹"), getItem("해시", "해시")],
        "group"
      ),
      getItem("암호화 기술", null, null, [getItem("AES", "AES")], "group"),
    ]),
  ];

  return (
    <div>
      <Menu
        onClick={(e) => {
          console.log("click", e);
          setEmailData(e.key);
          emailContext.actions.emailAddDispatch({
            type: `${e.key}`,
          });
        }}
        style={{
          width: 130,
        }}
        mode="vertical"
        items={emailItems}
      />
    </div>
  );
};

export default EmailMenu;
