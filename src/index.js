import React, {useRef} from 'react';
import ReactDom from 'react-dom'
import axios from 'axios'

const App = () => {
  const inputFileRef = useRef(null);
  
  const buttonClick = () => {
    inputFileRef.current.click();
  };

  const onChangeHandler = (event)=>{
    const selectedFile = event.target.files[0];

    const data = new FormData();
    data.append('file', selectedFile);

    axios.post('', data, {});
  }

  const inputFileCss = {
    display:'none'
  }; 


  return (
    <>
      <div>
        <input
          style={inputFileCss}
          ref={inputFileRef}
          type='file'
          name='file'
          onChange={onChangeHandler}
        />
        <button onClick={buttonClick}>Upload</button>
      </div>
    </>
  );
};


ReactDom.render(<App />, document.getElementById('root'));
