import axios from "axios";
// import questionJson from "../assets/questions.json";

export const getData = async () => {
  let { data } = await axios.get('./questions.json');
  return data;
};
