import axios from "axios";

const fakeAPI = axios.create({
  baseURL: "./questions.json",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});

export default {
    async getFaqs() {
      const res = await fakeAPI.get('/');
      console.log("===========GetFaq==========");
      console.log(res.data);
      return res.data;
    }

}
