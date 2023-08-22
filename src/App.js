import React, { useState, useEffect } from 'react';
import Html from './components/Html';
import Css from './components/Css';
import Javascript from './components/Javascript';

function App() {
const [html,setHtml] = useState('')
const [css,setCss] = useState('')
const [js,setJs] = useState('')
const [srcDoc, setSrcDoc] = useState('')

useEffect(() => {
  const timeout = setTimeout(() => {
    setSrcDoc(
      `<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `
    )
  }, 500)

  return () => clearTimeout(timeout)
}, [html, css, js])



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
         frameBorder ="0"
         width="100%"
         height="100%"
         srcDoc={srcDoc}
        />
      </div>

  </div>
 )
}

export default App;
