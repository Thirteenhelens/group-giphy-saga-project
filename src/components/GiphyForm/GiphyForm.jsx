import React, { useState } from "react";
import { useDispatch } from "react-redux";

function GiphyForm() {
  const dispatch = useDispatch();
  const [searchGif, setSearchGif] = useState("");

  const handleChange = (e) => {
    setSearchGif(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching`);
    dispatch({ type: "SEARCH_GIF", payload: searchGif });
    setSearchGif("");
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchGif}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default GiphyForm;
