

import './App.scss'


import SideBar from './components/SideBar/SideBar';
import React, { Component } from 'react';
import Editor from "@monaco-editor/react";
import code from './components/Code/Code';

import Cards from './components/Cards/Cards'
import ReactLoading from 'react-loading';

import { useRef } from 'react';
import { width } from '@mui/system';



class App extends Component {

  state = {
    textValue: 'main',
    menuId: 'icon-code',
    width: window.innerWidth,
  }

  onMenuChange = (id) => {


    if (id === this.state.menuId) return;
    if (id === 'icon-code') {
      this.setState({
        textValue: 'main',
        menuId: id,

      });
    }
    if (id === 'icon-contacts') {
      this.setState({
        textValue: 'about',
        menuId: id,

      });
    }
    if (id === 'icon-folder') {
      this.setState({
        textValue: 'proj',
        menuId: id
      });
    }


  }

  renderEditor(shouldRender, text, width) {
    if (shouldRender) {
      const textCode = code(text, width);
      return (
        <Editor
          height='100%'
          width="100%"
          options={{ wordWrap: 'on' }}
          loading={<ReactLoading type='bars' color='#ffffde' height={300} width={150} />}
          theme="vs-dark"
          value={textCode}
          onChange={e => {
            //console.log(e)
          }}
        />
      )
    } else {
      return null;
    }
  }

  renderCodeWindow(input, textValue,width) {
    if (input === 'icon-folder') {
      return this.renderProjectList();
    } else {
      return this.renderEditor(true, textValue,width);
    }
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  renderProjectList() {
    return (
      <div className="gallery">
        <Cards />
      </div>
    )
  }
  render() {

    const { textValue, menuId, width } = this.state;
    const codeWindow = this.renderCodeWindow(menuId, textValue,width);

    return (
      <div className='container container-hide-code'>
        <SideBar onMenuChange={this.onMenuChange} />
        <div className="folder"></div>
        <div className="code">
          {codeWindow}
        </div>
        <div className="footer">
        </div>
      </div>
    );
  };
}









export default App;





