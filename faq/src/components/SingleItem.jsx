import { Accordion } from "react-bootstrap";
import {useEffect} from 'react';

const SingleItem = ({ index, question, answer }) => {
  useEffect(() => {
    console.log(index)
  }, [])
  
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>{ question }</Accordion.Header>
      <Accordion.Body>{ answer }</Accordion.Body>
    </Accordion.Item>
  );
};

export default SingleItem;
