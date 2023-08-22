import React, { useState } from 'react';
import Html from './components/Html';
import Css from './components/Css';
import Javascript from './components/Javascript';

function App() {
const [html,setHtml] = useState('')
const [css,setCss] = useState('')
const [js,setJs] = useState('')

 return (
  <div>
      <div className='section top-section'>
        <Html 
        language = 'xml' 
        displayName="HTML" 
        value={html} 
        onChange={setHtml} 
        />
        <Css 
         language = 'css' 
         displayName="CSS" 
         value={css} 
         onChange={setCss} 
        />
        <Javascript 
         language = 'javascript' 
         displayName="JAVASCRIPT" 
         value={js} 
         onChange={setJs} 
        />
      </div>
      <div className='section'>
        <iframe
         title='output'
         sandbox='allow script'
         frameBorder="0"
         width="100%"
         height="100%"
        />
      </div>

  </div>
 )
}

export default App;
