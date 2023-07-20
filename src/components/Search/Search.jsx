// This component will:
// Allow users to search for GIFs and add them to their 'favorites'


// create the component function
function Search() { // return will return rendered HTML


    const handleSubmit = () => {
        console.log('');
    }


    return(
        // Header will automatically appear in App 
        <>
            <h2>Search for GIFS</h2>
            <p>Search for GIFs via the input below! Press the 'favorite' button to add them to your favorites! 😁</p>
            <form onSubmit={() => handleSubmit()}>
                <input type="text" placeholder="GIF Query"/>
            </form>
        </>

    )
}

// export component to the <App /> component
export default Search;
