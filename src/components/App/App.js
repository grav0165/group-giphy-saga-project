import React from 'react';
import { render } from 'react-dom'
import ReactGiphySearchbox from 'react-giphy-searchbox';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <ReactGiphySearchbox 
      
      apiKey="As9Wd0Yn9CZmikUIWJui5NYLdN9i0Ygw"
      onSelect={(item) => console.log(item)}
      masonryConfig={[
        {columns:2,imageWidth:110,gutter:5},
        {mq:"700px",columns:3,imageWidth:120,gutter:5}
      ]}/>
    </div>
  );
}

export default App;
