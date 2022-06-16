import React from "react";
import { Accordion } from "react-bootstrap";

const SingleItem = ({ question, answer }) => {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>{{ question }}</Accordion.Header>
      <Accordion.Body>{{ answer }}</Accordion.Body>
    </Accordion.Item>
  );
};

export default SingleItem;
