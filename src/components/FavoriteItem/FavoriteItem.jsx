import "./FavoriteItem.css";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

function FavoriteItem({ gif }) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchGif();
  }, []);

  const fetchGif = () => {
    dispatch({ type: "FETCH_GIF" });
  };

  return (
    <div className="favGifItem">
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
        </CardActions>
      </Card>
    </div>
  );
}

export default FavoriteItem;
