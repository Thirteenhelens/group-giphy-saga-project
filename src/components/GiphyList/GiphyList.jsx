import "./GiphyList.css";
import { useSelector } from "react-redux";
import GiphyItem from "../GiphyItem/GiphyItem";

function GiphyList() {
  //hook to grab the data in from Fav DB
  const searchGifList = useSelector((store) => store.searchGifReducer);
  console.log("This is GIHPY LIST SEARCHGIFLIST", searchGifList);

  return (
    <div className={searchGifList ? "listContainer" : ""}>
      {searchGifList.map((gif) => (
        <div key={gif.id} className="gifContainer">
          <GiphyItem gif={gif} />
        </div>
      ))}
    </div>
  );
}

export default GiphyList;
