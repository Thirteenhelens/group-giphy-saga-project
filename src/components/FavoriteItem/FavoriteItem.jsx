import "./FavoriteItem.css";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

function FavoriteItem({ gif }) {
  const dispatch = useDispatch();
  const [categoryInput, setCategoryInput] = useState();

  useEffect(() => {
    fetchGif();
  }, []);

  const fetchGif = () => {
    dispatch({ type: "FETCH_GIF" });
  };

  const handleDelete = () => {
    //send off dispatch with idToDelete
    dispatch({
      type: "DELETE_GIF",
      payload: gif.id,
    });
    //GET new DB
    fetchGif();
  };

  const handleChange = (event) => {
    setCategoryInput(event.target.value);
  };

  return (
    <div className="favGifItem">
      {gif ? (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="350" image={gif?.image_url} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {gif?.name}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              size="small"
              aria-label="delete"
              onClick={() => dispatch({ type: "DELETE_GIF", payload: gif.id })}
            >
              <DeleteTwoToneIcon />
            </IconButton>
            <Typography>Delete</Typography>
            <select value={categoryInput} onChange={handleChange}>
              <option value="">Choose a category</option>
              <option value={1}>Funny</option>
              <option value={2}>Cohort</option>
              <option value={3}>Cartoon</option>
              <option value={4}>*Nsfw*</option>
              <option value={5}>Meme</option>
            </select>
            <button
              onClick={() =>
                dispatch({
                  type: "CHANGE_CATEGORY",
                  payload: { id: gif.id, categoryId: Number(categoryInput) },
                })
              }
            >
              Submit
            </button>
          </CardActions>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}

export default FavoriteItem;
