import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import SingleItem from "./SingleItem";

const ItemList = (items) => {
  const [faqs, setfaqs] = useState([]);
  useEffect(async () => {
    console.log("items:", items);
    setfaqs(items.items);
  }, []);

  return (
    <Accordion defaultActiveKey="0">
      {faqs.map((item, index) => (
        <SingleItem key={index} question={item.question} answer={item.answer} />
      ))}
    </Accordion>
  );
};

export default ItemList;
