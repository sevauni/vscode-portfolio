import './App.scss'

import SideBar from './components/SideBar/SideBar';
import React, { Component } from 'react';
import Editor from "@monaco-editor/react";
import code from './components/Code/Code';

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',

  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',

  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',

  },
];


class App extends Component {

  state = {
    textValue: 'main',
    menuId: 'icon-code',
    showEditor: true
  }

  onMenuChange = (id) => {


    if (id === this.state.menuId) return;
    if (id === 'icon-code') {
      this.setState({
        textValue: 'main',
        menuId: id,
        showEditor: true
      });
    }
    if (id === 'icon-contacts') {
      this.setState({
        textValue: 'about',
        menuId: id,
        showEditor: true
      });
    }
    if (id === 'icon-folder') {
      this.setState({
        showEditor: false,
        menuId: id
      });
    }


  }

  renderEditor(shouldRender, text) {
    if (shouldRender) {
      const textCode = code(text);
      return (
        <Editor
          height="100%"
          width="100%"
          options={{wordWrap: 'on'}}
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
    if (!shouldRender) {
      return (
        <div className='height'>
          <ImageGallery items={images} />
        </div>
      )
    } else {
      return null;
    }
  }


  render() {

    const { textValue, showEditor } = this.state;


    const editor = this.renderEditor(showEditor, textValue);
    const slideShow = this.renderSlideShow(showEditor);
    return (
      <div className='container container-closed'>
        <SideBar onMenuChange={this.onMenuChange} />
        <div className="folder"></div>
        <div className="code">
          {editor}
          {slideShow}
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





