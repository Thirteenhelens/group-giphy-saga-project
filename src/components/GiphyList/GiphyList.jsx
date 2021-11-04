import { useSelector } from 'redux'
import GiphyItem from '../GiphyItem/GiphyItem';

function GiphyList() {
  //hook to grab the data in from Fav DB
  const gifList = useSelector(store => store.gifReducer)
  
  return (
    <>
      <h2>GiphyList</h2>
        <div className="gifContainer">
        {gifList.map((gif)=> (
          <GiphyItem gif={gif} />
        ))}
        </div>
    </>
  );
}

export default GiphyList;
