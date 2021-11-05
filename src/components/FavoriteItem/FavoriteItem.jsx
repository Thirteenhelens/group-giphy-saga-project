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
            
            <select name={category} id={category}>
            <option value="funny">Funny</option>
            <option value="cohort">Cohort</option>
            <option value="cartoon">Cartoon</option>
            <option value="nsfw">*Nsfw*</option>
            <option value="meme">Meme</option>
            </select>
            {/* <button onClick={() => dispatch({type: 'CHANGE_CATEGORY', payload: })}>Category</button> */}
         </li>
        </>
    )
}

export default FavoriteItem;