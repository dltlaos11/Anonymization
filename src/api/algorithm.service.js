import api from "../api/axios";

const getAlgorithm = () => {
  return api.get("/api/home");
};

const getSelectForms = (algorithm, field, tableName, degree, dataTypes) => {
  return api
    .post("/api/select", { algorithm, field, tableName, degree, dataTypes })
    .then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
};

const algorithmService = {
  getAlgorithm,
  getSelectForms,
};

export default algorithmService;
