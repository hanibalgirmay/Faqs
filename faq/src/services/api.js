import axios from "axios";
// import questionJson from "../assets/questions.json";

export const getData = async () => {
  const f = await axios.get("./questions.json", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("=========FAQ=======");
  return f.data.questions;
};
