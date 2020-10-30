import React, { Component } from 'react';
import Moveable from "react-moveable";

import {
  updateImage,
} from '../actions/appActions';

class Editor extends Component {

  constructor(props) {
    super(props);

    this.state={}
    this.store = this.props.store;

    this.currentZ=0;

    this.targetZs=[];
    this.targetRefs=[];
    this.moveableRefs=[];
    for (let i = 0; i < 10; i++) {
      this.targetZs.push(0);
      this.targetRefs.push(React.createRef());
      this.moveableRefs.push(React.createRef());
    }

    this.containerRef=React.createRef();

    this.state={}

    this.movable_transformHandler=this.movable_transformHandler.bind(this);
    this.movable_transformEndHandler=this.movable_transformEndHandler.bind(this);

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
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      this.setState(state);
    }
  }

  movable_transformHandler(params) {
    if (params.transform) {
      params.target.style.transform=params.transform;
    }
    let index=Number(params.target.id.substr(3));
  }

  movable_transformEndHandler(params) {
    let index=Number(params.target.id.substr(3));
    let transform=(/\((.+),\s*(.+),\s*(.+),\s*(.+),\s*(.+),\s*(.+)\)/g).exec(window.getComputedStyle(params.target,null).transform);
    let matrix=[1,0,0,1,0,0];
    if (transform) {
      transform.splice(0,1);
      matrix=[]
      for (let i = 0; i < transform.length; i++) {
        matrix.push(transform[i])
      }
    }
    // console.log("?????",matrix);
    this.currentZ++;
    this.targetZs[index]=this.currentZ;
    
    this.store.dispatch(
      updateImage(index,matrix)
    )
  }


  render() {

    let children = [];
    children.push(this.props.children);

    if (this.state.addImagesSrc) {

      let indexes=[]
      for (let i = 0; i < this.state.addImagesSrc.length; i++) {
        indexes.push({i,z:this.targetZs[i]});
      }
      indexes.sort((a,b)=>{return a.z-b.z});

      for (let ii = 0; ii < indexes.length; ii++) {
        let i=indexes[ii].i;
        let imageSrc = this.state.addImagesSrc[i];
        let addImageTransform = this.state.addImagesTransform[i];
        if (addImageTransform) {

          // console.log("!!!!!",addImageTransform);

          children.push(
            <img
              id={"img"+i}
              key={"img"+i}
              src={imageSrc}
              className="editorImage"
              ref={this.targetRefs[i]}
              style={{
                transform:`matrix(${addImageTransform})`,
                width:this.state.addImagesDefaultSize.width,
                height:this.state.addImagesDefaultSize.height,
              }}
              onLoad={this.movable_transformEndHandler}
              onMouseDown={this.movable_transformEndHandler}
            />
          );

          children.push(
            <Moveable
              key={"Moveable"+i}
              ref={this.moveableRefs[i]}
              target={this.targetRefs[i].current}
              pinchThreshold={20}
              container={this.containerRef.current}
              draggable={true}
              scalable={true}
              resizable={false}
              warpable={false}
              rotatable={true}
              pinchable={false}
              keepRatio={true}
              origin={false}
              throttleDrag={1.5}
              throttleRotate={0.2}
              throttleResize={1}
              throttleScale={0.01}
              onDrag={this.movable_transformHandler}
              onResize={this.movable_transformHandler}
              onScale={this.movable_transformHandler}
              onWarp={this.movable_transformHandler}
              onRotate={this.movable_transformHandler}
              onPinch={this.movable_transformHandler}
              onDragEnd={this.movable_transformEndHandler}
              onScaleEnd={this.movable_transformEndHandler}
              onResizeEnd={this.movable_transformEndHandler}
              onWarpEnd={this.movable_transformEndHandler}
              onRotateEnd={this.movable_transformEndHandler}
              onPinchEnd={this.movable_transformEndHandler}
            />
          )


        }
      }
    }





    return React.createElement(
      'div',
      { id:'Editor',
        style:this.props.style,
        ref:this.containerRef,
      },
      children
      );
  }
}

export default Editor;
