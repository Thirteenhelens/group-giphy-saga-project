import "./GiphyItem.css";
import { useState } from "react";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function GiphyItem({ gif }) {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const handleSubmitFav = () => {
    //when fav button clicked, dispatch to post url
    //**payload may need to change depending on how data
    //comes from the API
    setClicked(!clicked);
    dispatch({
      type: "ADD_GIF",
      payload: {
        name: gif.title,
        image_url: gif.images.fixed_height.url,
      },
    });
    console.log(clicked);
  }; //end handSubmitFav

  return (
    <div className="gifItem">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={gif.title}
          height="200"
          image={gif.images.fixed_height.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {gif.title}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            size="small"
            aria-label="save"
            onClick={handleSubmitFav}
            color="error"
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <Typography>Favorite</Typography>
        </CardActions>
      </Card>
    </div>
  );
}

export default GiphyItem;
