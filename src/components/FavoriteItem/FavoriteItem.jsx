import { useDispatch } from "react-redux";
import { useEffect } from 'react';

function FavoriteItem({ gif }) {

    useEffect(() => {
        fetchGif();
    }, []);

    const handleDelete = () => {
        //send off dispatch with idToDelete
        dispatch({
            type: 'DELETE_GIF',
            payload: gif.id
        })
        //GET new DB
        fetchGif();
    }

    const fetchGif = () => {
        dispatch({ type: 'FETCH_GIF' })
    }

    const dispatch = useDispatch();

    console.log(`GIFFFF`, gif);
    return (
        <>
            <p>FavoriteItem</p>
            <li>
                <img src={gif?.image_url} />
                <button onClick={handleDelete}>Delete Gif</button>
            </li>
        </>
    )
}

export default FavoriteItem;