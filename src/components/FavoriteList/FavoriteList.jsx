import {useDispatch} from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';
function FavoriteList() {

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
