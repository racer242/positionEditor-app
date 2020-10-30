import React, { Component } from 'react';

import {
  useImage,
  clearImage,
} from '../actions/appActions';

class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state={
    };
    this.store = this.props.store;
    this.image_clickHandler=this.image_clickHandler.bind(this);
    this.clear_buttonHandler=this.clear_buttonHandler.bind(this);
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

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      this.setState(state);
    }
  }

  image_clickHandler(event) {
    let id=event.target.id;
    let index=Number(id.substr(3));
    this.store.dispatch(
      useImage(index)
    )
  }

  clear_buttonHandler(event) {
    let id=event.target.id;
    let index=Number(id.substr(3));
    this.store.dispatch(
      clearImage(index)
    )
  }

  render() {

    let children = [];
    children.push(this.props.children);

    if ((this.state)&&(this.state.loaded)&&(this.state.addImagesSrc)) {

      for (let i = 0; i < this.state.addImagesSrc.length; i++) {
        let imageSrc = this.state.addImagesSrc[i];
        let addImageTransform = this.state.addImagesTransform[i];
        if (!addImageTransform) {
          children.push(
            <img
              id={"img"+i}
              key={"img"+i}
              src={imageSrc}
              className="sideMenuImage"
              style={{
                top:(i/this.state.addImagesSrc.length)*100+(0.5*100/this.state.addImagesSrc.length)+"%",
                transform:"translateY(-50%)",
                height:(1/this.state.addImagesSrc.length)*100+"%",
              }}
              onClick={this.image_clickHandler}
            />
          );
        } else {
          children.push(
            <div
              id={"clr"+i}
              key={"clr"+i}
              className="sideMenuButton"
              style={{
                top:(i/this.state.addImagesSrc.length)*100+(0.5*100/this.state.addImagesSrc.length)+"%",
                transform:"translate(-50%,-50%)",
              }}
              onClick={this.clear_buttonHandler}>Вернуть</div>
          );

        }
      }

    }

    return React.createElement(
      'div',
      { id:'SideMenu',
        style:this.props.style,
      },
      children
      );
  }



}

export default SideMenu;
