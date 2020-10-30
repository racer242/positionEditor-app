import React, { Component } from 'react';
import {
  goPrev,
  goNext,
} from '../actions/appActions';

class TopMenu extends Component {

  constructor(props) {
    super(props);
    this.state={
    };
    this.store = this.props.store;
    this.left_buttonHandler=this.left_buttonHandler.bind(this);
    this.right_buttonHandler=this.right_buttonHandler.bind(this);
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

  left_buttonHandler(event) {
    this.store.dispatch(
      goPrev()
    )
  }

  right_buttonHandler(event) {
    this.store.dispatch(
      goNext()
    )
  }

  render() {

    let children = [];
    children.push(this.props.children);

    if (this.state.loaded) {

      children.push(
        <div
          id="title"
          key="title"
          className="topMenuTitle"
          >{this.state.title}</div>
      );

      children.push(
        <div
          id="left"
          key="left"
          className="topMenuButton"
          style={{
            left:"1%",
          }}
          onClick={this.left_buttonHandler}>Назад</div>
      );

      children.push(
        <div
          id="right"
          key="right"
          className="topMenuButton"
          style={{
            right:"1%",
          }}
          onClick={this.right_buttonHandler}>Вперед</div>
      );
    }
    return React.createElement(
      'div',
      { id:'TopMenu',
        style:this.props.style,
      },
      children
      );
  }



}

export default TopMenu;
