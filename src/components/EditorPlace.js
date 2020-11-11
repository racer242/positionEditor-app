import React, { Component } from 'react';
import Editor from './Editor.js'

class EditorPlace extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;

    this.ref=React.createRef()
    this.containerRef=React.createRef()
    this.editorRef=React.createRef()


    this.state={
      editorScale:.15,
      editorX:0,
      editorY:0,

    }
  }

  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.mounted=true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.updateBounds(this.ref.current.clientWidth,this.ref.current.clientHeight);
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      this.setState({
        ...this.state,
        ...state,
      });
    }
  }

  updateBounds(width,height) {
    if ((this.lastWidth!==width)||(this.lastHeight!==height)) {
      if (this.state.editorBounds) {
        this.lastWidth=width;
        this.lastHeight=height;
        let bounds=this.state.editorBounds;
        let editorScale=Math.min(width/bounds.width,height/bounds.height);
        let editorX=(width-bounds.width*editorScale)/2/editorScale;
        let editorY=(height-bounds.height*editorScale)/2/editorScale;
        this.setState({
          ...this.state,
          editorScale,
          editorX,
          editorY,
        })
      }
    }
  }

  render() {

    let children = [];
    children.push(this.props.children);

    let offsetY=0;
    if (this.ref.current) {
      offsetY=this.ref.current.getBoundingClientRect().y;
    }

    let geom={
      scale:this.state.editorScale,
      x:this.state.editorX,
      y:this.state.editorY,
      offsetY,
    }
    
    children.push(
      <div
        id="EditorContainer"
        key="EditorContainer"
        ref={this.containerRef}
        style={{
          width:(this.state.editorBounds)?this.state.editorBounds.width:0,
          height:(this.state.editorBounds)?this.state.editorBounds.height:0,
          transform:`scale(${this.state.editorScale}) translateX(${this.state.editorX}px) translateY(${this.state.editorY}px)`
        }}
      >
        <Editor
          id="Editor"
          key="Editor"
          scale={this.state.editorScale}
          store={this.props.store}
          ref={this.editorRef}
          geom={geom}
          style={{
            width:(this.state.editorBounds)?this.state.editorBounds.width:0,
            height:(this.state.editorBounds)?this.state.editorBounds.height:0,
          }}
        />
        <img
          id="MainImage"
          key="MainImage"
          src={this.state.mainImageSrc}
        />
      </div>
    );

    return React.createElement(
      'div',
      { id:'EditorPlace',
        style:this.props.style,
        ref:this.ref,
      },
      children
      );
  }
}

export default EditorPlace;
