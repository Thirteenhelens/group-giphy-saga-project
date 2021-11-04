import {useDispatch} from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';
function FavoriteList() {

const fetchGif = () => {
  const dispatch = useDispatch();
  dispatch({type: 'FETCH_GIF'})
}

  return (
    <>
      <p>FavoriteList</p>
      <ul>
        {gifs.map((gif) => (
          <FavoriteItem 
          key={gif.id}
          gif={gif}
          />
        ))}
      </ul>
    </>
  );
}

export default FavoriteList;
