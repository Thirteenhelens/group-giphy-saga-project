import { useDispatch } from "react-redux";



function GiphyItem({ gif }) {

  const dispatch = useDispatch();

  const handleSubmitFav = () => {
    //when fav button clicked, dispatch to post url
    //**payload may need to change depending on how data 
    //comes from the API
    dispatch({
      type: 'ADD_GIF',
      payload: {
        name: gif.name,
        url: gif.url
      }
    })
  }//end handSubmitFav

  return (
    <div className="gifItem">
      <img src={gif.images.fixed_height.url} />
      <button onClick={handleSubmitFav}>Save</button>
    </div>
  );
}

export default GiphyItem;
