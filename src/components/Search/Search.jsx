// This component will:
    // Allow users to search for GIFs
    // Add GIF's to their 'favorites' collection

// import dependencies
import react, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';

// create the component function
function Search() { // return will return rendered HTML
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit clicked!');
        // dispatch payload text input
        dispatch({
            type: 'SEARCH_GIPHY',
            payload: queryText
        })
    }

    const giphy = useSelector((store) => store.giphy)
    console.log('giphy: ', giphy);
    // (event) => {setQueryText(event.target.value)
    // const handleText =  (event) => {
    //     console.log('event'), event;
    // }

    const [queryText, setQueryText] = useState('')

    const [gifData, setGifData] = useState([])

    // axios route to GET GIFs

    // 'useState()' will allow us to 
    // const [favGIF, setFavGif] = 


    return(
        // Header will automatically appear in App 
        <>
            <h2>Search for GIFS</h2>
            <p>Search for GIFs via the input below! Press the 'favorite' button to add them to your favorites! 😁</p>
            <form onSubmit={() => handleSubmit(event)}>
                <input type="text" placeholder="GIF Query" value={queryText} onChange={(event) => {setQueryText(event.target.value)}}/>
                <br /><br />
                <button type="submit">Submit Query</button>
            </form>
            <h3>List of GIFs</h3>
            <ul>
                {/* 
                GIFs go here!! :) 
                arrayOfGifs.map(gif){
                    <li>{gif}</li>
                }
                */}
            </ul>
        </>
    )
}

// export component to the <App /> component
export default Search;