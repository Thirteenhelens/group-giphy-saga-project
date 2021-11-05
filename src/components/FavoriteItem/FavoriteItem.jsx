import { useDispatch } from "react-redux";
function FavoriteItem({ gif }) {

    const dispatch = useDispatch();

    const handleDelete = () => {

        dispatch({
            type: 'DELETE_GIF',
            payload: gif.id
        })
    };


    return (
        <>
            <p>FavoriteItem</p>
            <li>
                {gif.name}
                <img title={gif.title} src={gif.image_url} />
                <button onClick={handleDelete}>Delete Gif</button>
            </li>
        </>
    )
}

export default FavoriteItem;