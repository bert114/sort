import React, { useContext, useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import searchIcon from "../assets/icons/search.svg";
import { AnimContext } from "../layout/Dashboard";
import { sortAscending, sortDescending, sortPopularity } from "./Helper";

function Header() {
  const { setLoading, anim, setAnim, originalAnim, setSort, sort } =
    useContext(AnimContext);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(`http://localhost:5000/api/anime?search=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setAnim(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }, 300);

    return () => clearTimeout(timeout); // cleanup
  }, [search]);

  useEffect(() => {
    setAnim(sort);
  }, [sort]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setLoading(true);

    setLoading(true);

    if (value === "") {
      setAnim(originalAnim);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      const filter = anim.filter((a) =>
        a.title.toLowerCase().includes(value.toLowerCase())
      );
      setAnim(filter);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const handleOption = (e) => {
    const value = e.target.value;
    setSelected(value);
    setLoading(true);

    switch (value) {
      case "as":
        setSort(sortAscending(anim, setLoading));
        break;
      case "des":
        setSort(sortDescending(anim, setLoading));
        break;
      case "popular":
        setSort(sortPopularity(anim, setLoading));
        break;
      default:
        setSort(originalAnim);
        setLoading(false);
        break;
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="search-wrapper">
          <div>
            <input
              onChange={handleSearch}
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              value={search}
            />
            <img src={searchIcon} alt="" />
          </div>
          <div>
            <label htmlFor="cars">Sort by: </label>
            <select id="anime-option" value={selected} onChange={handleOption}>
              <option value=""></option>
              <option value="popular">Popularity</option>

              <option value="new-added">Newest Added</option>
              <option value="as">Title(A-Z)</option>
              <option value="des">Title(Z-A)</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
