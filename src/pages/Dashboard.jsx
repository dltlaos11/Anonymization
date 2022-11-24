import { Header, Anonymization, Preview } from "../components";

const Dashboard = () => {
  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl bg-slate-600">
        <Header title="익명화" />

        <div className="grid grid-cols-1 ">
          <div className=" basis-40 shrink grow">
            <Anonymization />
          </div>
        </div>

        <div className="grid grid-cols-1 ">
          <div className=" basis-40 shrink grow">
            <Preview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
