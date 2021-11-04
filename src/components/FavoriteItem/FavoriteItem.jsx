import { useDispatch } from "react-redux";
function FavoriteItem({gif}) {

    const dispatch = useDispatch();
    return(
        <>
        <p>FavoriteItem</p>
        <li>
            {gif.name}
            <img title={gif.title} src={gif.image_url} />
            <button onClick={()=> dispatch({type:'DELETE_GIF', payload: gif.id})}>Delete Gif</button>
         </li>
        </>
    )
}

export default FavoriteItem;