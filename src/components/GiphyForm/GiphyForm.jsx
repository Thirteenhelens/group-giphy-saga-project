import "./GiphyForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function GiphyForm() {
  const dispatch = useDispatch();
  const [searchGif, setSearchGif] = useState("");

  //setting search gif to value that is inputted by user
  const handleChange = (e) => {
    setSearchGif(e.target.value);
  };

  //dispatching search gif to get from api with searchGif as payload
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching`);
    dispatch({ type: "SEARCH_GIF", payload: searchGif });
    setSearchGif("");
  };

  return (
    <div>
      <div className="formContainer">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
          onSubmit={handleSearch}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Giphy"
            inputProps={{ "aria-label": "Search Giphy" }}
            value={searchGif}
            onChange={handleChange}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchRoundedIcon />
          </IconButton>
        </Paper>
      </div>
      <Link className="favLink" to="/favorites">
        Favorites
      </Link>
    </div>
  );
}

export default GiphyForm;
