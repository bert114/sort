import React, { useContext, useState } from "react";
import Content from "./Content";
import Loader from "./Loader";
import { AnimContext } from "../layout/Dashboard";

function Contents() {
  const { loading, anim } = useContext(AnimContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ul className="content-container">
        {anim.map((a, i) => (
          <Content a={a} key={i} />
        ))}
      </ul>
    </>
  );
}

export default Contents;
