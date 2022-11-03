import React, { useState } from "react";
import { Header, Example, Anonymization, Preview } from "../components";
import { Table, Menu, Space, Dropdown, Button } from "antd";
import { useStateContext } from "../contexts/ContextProvider";
import Lottie from "lottie-react";
import { lottie } from "../assets";
const Dashboard = (props) => {
  let { story, setStory } = useStateContext();

  const [data, setData] = useState([]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl bg-slate-600">
        <Header title="익명화" />

        <div className="grid grid-cols-2 ">
          <div className=" basis-40 shrink grow">
            <div className="absolute inset-y-[110px] right-[120px]">
              <Button type="primary">Export</Button>
            </div>
            <Anonymization />
          </div>
          <div className=" basis-40 shrink grow">
            <Example />
          </div>
        </div>
        {/* <div>
          <Lottie
            options={defaultOptions}
            animationData={lottie}
            height={200}
            width={200}
          />
        </div> */}
        <div className="grid grid-cols-1  gap-4  bg-white rounded-3xl md:m-10">
          <div className="m-2 md:m-10 mt-24  bg-white rounded-3xl ">
            {/* <div className="absolute inset-y-[910px] right-[120px]">
              <Button type="primary">Export</Button>
            </div> */}

            <Header title="[알고리즘] 미리보기" />
            <Preview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
