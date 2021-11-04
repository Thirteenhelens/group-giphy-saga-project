function FavoriteItem({gif}) {
    return(
        <>
        <p>FavoriteItem</p>
        <li>
            {gif.name}
            <img title={gif.title} src={gif.image_url} />
            <button onClick>Delete Gif</button>
         </li>
        </>
    )
}

export default FavoriteItem;