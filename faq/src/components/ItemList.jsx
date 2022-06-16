import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import SingleItem from "./SingleItem";

const ItemList = ({faqsList}) => {
  useEffect(() => {
    console.log(faqsList);
  }, []);

  return (
    <div>
      {faqsList.length > 0 ? (
        <Accordion defaultActiveKey="0">
          {faqsList.map((item,index) => (
            // <p>{item.question}</p>
            <SingleItem key={index} index={index} question={item.question} answer={item.answer} />
          ))}
        </Accordion>
      ) : (
        <div>No items</div>
      )}
    </div>
  );
};

export default ItemList;
