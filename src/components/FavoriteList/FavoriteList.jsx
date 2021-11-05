import { useDispatch, useSelector } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';
import { useEffect, useState } from 'react';

function FavoriteList() {
  const dispatch = useDispatch();




  const gifs = useSelector(store => store.gifReducer)


  // const [gifs, setGifs] = useState([{ name: `Test title`, url: `Test URL` }]);



  console.log(gifs);

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
