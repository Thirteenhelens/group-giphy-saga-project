import { useSelector } from 'redux'
import GiphyItem from '../GiphyItem/GiphyItem';

function GiphyList() {
  //hook to grab the data in from Fav DB
  const searchGifList = useSelector(store => store.searchGifReducer)

  return (
    <>
      <h2>GiphyList</h2>
     
        {searchGifList.map((gif) => (
        <div key={gif.id} className="gifContainer">
          <GiphyItem gif={gif} />
          </div>
       ))}
     
    </>
  );
}

export default GiphyList;
