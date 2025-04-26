import React, { createContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Contents from "../components/Contents";

const AnimContext = createContext();

function Dashboard() {
  const [anim, setAnim] = useState([]);
  const [originalAnim, setOriginalAnim] = useState([]);
  const [sort, setSort] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/anime");
      const data = await res.json();

      setAnim(data);
      setOriginalAnim(data);
      setSort(data);

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <AnimContext.Provider
      value={{
        anim,
        setAnim,
        originalAnim,
        setLoading,
        loading,
        setSort,
        sort,
      }}
    >
      <Header />
      <Contents />
    </AnimContext.Provider>
  );
}

export default Dashboard;
export { AnimContext };
