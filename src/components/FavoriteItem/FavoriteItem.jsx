import { useDispatch } from "react-redux";
import { useEffect } from 'react';

function FavoriteItem({ gif }) {

    useEffect(() => {
        fetchGif();
    }, []);

    const fetchGif = () => {
        dispatch({ type: 'FETCH_GIF' })
    }

    const dispatch = useDispatch();

    console.log(`GIFFFF`, gif);
    return (
        <>
            <p>FavoriteItem</p>
            <li>
                {JSON.stringify(gif)}
                <p>{gif?.id}</p>

                <img src={gif?.image_url}/>
                <button onClick={()=> dispatch({type:'DELETE_GIF', payload: gif.id})}>Delete Gif</button>
            </li>
        </>
    )
}

export default FavoriteItem;