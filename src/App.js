
import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

function App() {

  const [markdown, setmarkdown] = useState(" ")

  return (
    <>
      <div className="mainconatainer">
        
        <div className="letfside">
          <textarea className="textarea" onChange={ (e) => 
            setmarkdown(e.target.value)
          } ></textarea>
        </div>
        <div className="rightside">

          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
