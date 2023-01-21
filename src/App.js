import './App.scss'

import SideBar from './components/SideBar/SideBar';
import React, { Component } from 'react';
import Editor from "@monaco-editor/react";
import code from './components/Code/Code';



class App extends Component {

  state = {
    textValue: 'main',
    menuId: 'icon-code'
  }


  onMenuChange = (id) => {

    
    if (id === this.state.menuId) return;
    if (id === 'icon-code') {
      this.setState({
        textValue: 'main',
        menuId: id
      });
    }
    if (id === 'icon-contacts') {
      this.setState({
        textValue: 'about',
        menuId: id
      });
    }


  }

  render() {

    const { textValue } = this.state;

    const  textCode = code(textValue);
    
    return (
      <div className='container container-closed'>
        <SideBar onMenuChange = {this.onMenuChange}/>
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
}

export default App;





