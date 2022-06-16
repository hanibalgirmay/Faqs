import "./App.css";
import ItemList from "./components/ItemList";
import React, { useEffect, useState } from "react";

let initialState = {
  question: "test",
  answer: "",
};

const App = () => {
  const [faqs, setFaqs] = React.useState([initialState]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setFaqs(faqs);
      setLoading(false);
    }, 1000);
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
          <ItemList items={faqs} />
        )}
      </div>
    </div>
  );
};

export default App;
