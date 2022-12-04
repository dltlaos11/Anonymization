import api from "../api/axios";

const getAlgorithm = () => {
  return api.get("/api/home");
};

const algorithmService = {
  getAlgorithm,
};

export default algorithmService;
