import './App.scss'

import SideBar from './components/SideBar/SideBar';
import React, { Component } from 'react';
import Editor from "@monaco-editor/react";
import code from './components/Code/Code';

import Carousel from 'nuka-carousel';


import slideImg1 from './imgs/img (1).png'
import slideImg2 from './imgs/img (2).png'
import slideImg3 from './imgs/img (3).png'
import slideImg4 from './imgs/img (4).png'




class App extends Component {

  state = {
    textValue: 'main',
    menuId: 'icon-code',
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

  renderEditor(shouldRender, text) {
    if (shouldRender) {
      const textCode = code(text);
      return (
        <Editor
          height='100%'
          width="100%"
          options={{ wordWrap: 'on' }}
          loading="Loading Code Editor" //крутая анимация
          theme="vs-dark"
          value={textCode}
          onChange={e => {
            console.log(e)
          }}
        />
      )
    } else {
      return null;
    }
  }

  renderSlideShow(shouldRender) {
    if (shouldRender) {
      return (
          <Carousel className='project-gallery-elem' cellAlign='center'>
            <div>
            <img src={slideImg1} alt="t" height='200px' />
            </div>
            <div>
            <img src={slideImg1} alt="t" height='200px' />
            </div>
            <div>
            <img src={slideImg1} alt="t" height='200px' />
            </div>
            <div>
            <img src={slideImg1} alt="t" height='200px' />
            </div>
 
          </Carousel>
      )
    } else {
      return null;
    }
  }


  render() {

    const { textValue, menuId } = this.state;

    const editor = this.renderEditor(true, textValue);
    console.log(editor);
    const slideShow = this.renderSlideShow('icon-folder' === menuId);

    return (
      <div className='container container-closed'>
        <SideBar onMenuChange={this.onMenuChange} />
        <div className="folder"></div>
        <div className="code project-gallery-flex-wrapper">
          <div className='code-editor'>
            {editor}
          </div>
          <div className='project-gallery'>
            {/* {slideShow} */}
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  };
}

export default App;





