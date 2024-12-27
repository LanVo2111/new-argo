import React from "react";
import PropTypes from 'prop-types';
import '../../assets/style.css'
import AccordionItem from "./item";

const Accordion = ({ listData, hasBg, type }) => {
  return (
    <div className={`accordion_list ${hasBg ? 'has-bg' : ''}`}>
      {
        listData.map((item, index) => (
          <AccordionItem {...item} key={index} type={type} />
        ))
      }
    </div>
  )
}
export default Accordion;

Accordion.prototype = {
  listData: PropTypes.array,
  hasBg: PropTypes.bool
}

