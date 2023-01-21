import './App.scss'

import SideBar from './components/SideBar/SideBar';
import React from 'react';
import Editor from "@monaco-editor/react";
import code from './components/Code/Code';

let textCode = code("about");



const App = () => {



  return (
    <div className='container container-closed'>
      <SideBar />
      <div className="folder"></div>
      <div className="code">
        <Editor
          height="100%"
          //defaultLanguage="javascript"
          theme="vs-dark"
          value={textCode}
          onChange={e => { //console.log(e)
           }}
        />
      </div>
      <div className="footer">
        <a href="ya.ru" className='a-no-style'>
          <span className="icon-refresh">
          </span>
        </a>
      </div>


    </div>
  );
};

export default App