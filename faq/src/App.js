import "./App.css";
import ItemList from "./components/ItemList";
import React, { useEffect, useState } from "react";
import { getData } from "./services/api";

let initialState = {
  question: "",
  answer: "",
};

const App = () => {
  const [faqs, setFaqs] = useState([initialState]);
  const [loading, setLoading] = useState(false);

  useEffect(async() => {
    setLoading(true);
    let { questions } = await getData();
    console.log("00__",questions)
    setFaqs(questions);
    console.log('fff',setFaqs(questions))
    console.log('f',faqs)
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <header className="banner">
        <h2>Fequently asked Questions</h2>
      </header>
      <div className="container">
        {loading ? (
          <div className="loading">
            <div className="loading-spinner">loading...</div>
          </div>
        ) : (
          <ItemList faqsList={faqs} />
        )}
      </div>
    </div>
  );
};

export default App;
