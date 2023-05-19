import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [displayDetails, setDisplayDetails] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => setDisplayDetails(!displayDetails)}
        >
          {displayDetails ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {displayDetails && <p>{info}</p>}
    </article>
  );
};

export default Question;
