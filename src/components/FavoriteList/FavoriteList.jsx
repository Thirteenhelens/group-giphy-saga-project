import { useDispatch, useSelector } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

function FavoriteList() {




  const gifs = useSelector(store => store.gifReducer)

  console.log(gifs);

  return (
    <>
      <p>FavoriteList</p>
      <ul>
        {gifs?.map((gif) => (
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
