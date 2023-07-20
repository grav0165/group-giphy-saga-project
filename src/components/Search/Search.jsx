// This component will:
    // Allow users to search for GIFs
    // Add GIF's to their 'favorites' collection

// import dependencies
import { useDispatch } from "react";
import react, {useEffect} from 'react';


// create the component function
function Search() { // return will return rendered HTML
    // let dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit clicked!');
        // dispatch payload text input
        /*
        dispatch({
            type: 'QUERY'
            payload: textInput
        })
        */
    }

    // axios route to GET GIFs

    // 'useState()' will allow us to 
    // const [favGIF, setFavGif] = 


    return(
        // Header will automatically appear in App 
        <>
            <h2>Search for GIFS</h2>
            <p>Search for GIFs via the input below! Press the 'favorite' button to add them to your favorites! 😁</p>
            <form onSubmit={() => handleSubmit(event)}>
                <input type="text" placeholder="GIF Query"/>
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