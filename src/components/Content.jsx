import React, { useState } from "react";
import chevronUp from "/public/chevron.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function Content({ a, i }) {
  const [limit, setLimit] = useState(40);
  const [condition, setCondition] = useState(true);

  const getGenre = () => {
    return a.genre.map((g) => {
      return `${g}, `;
    });
  };

  const getDescription = () => {
    const p = a.description;

    return p.length <= 30 ? a.description : p.slice(0, limit).trim() + "...";
  };

  const handleMore = () => {
    limit <= 40 ? setLimit(200) : setLimit(40);
  };

  return (
    <li key={i}>
      <picture>
        <img src={a.img} alt="" />
      </picture>
      <div className="info-wrapper">
        <h3>Title: {a.title}</h3>
        <h3 className="rate">Rating: {a.rating}</h3>
        <div>Genre: {getGenre()}</div>
        <p>{getDescription()}</p>
        <button onClick={handleMore}>
          {limit <= 40 ? (
            <>
              Show More <FontAwesomeIcon icon={faChevronDown} />
            </>
          ) : (
            <>
              Show Less <FontAwesomeIcon icon={faChevronUp} />
            </>
          )}
        </button>
      </div>
    </li>
  );
}

export default Content;
