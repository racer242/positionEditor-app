import { Component } from 'react';

import {
  reloadStoreData,
  saveStorageData,
  reinitMovable,
  clearAction,
 } from '../actions/appActions';

class Control extends Component {

  //--------------------------------------------------------------------------
	//
	// Constructor
	//
	//--------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {};
    this.store = this.props.store;

    this.actionMap={
    }

    this.appStartDelay=500;

    // console.log("Control constructor");

  }


  //--------------------------------------------------------------------------
  //
  // React methods
  //
  //--------------------------------------------------------------------------

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

  //--------------------------------------------------------------------------
  //
  // Own methods
  //
  //--------------------------------------------------------------------------

  onStoreChange() {
    if (this.mounted) {

      let state=this.store.getState();
      // this.setState(state);

      if (state.justAdded) {
        this.loadTimeout=setTimeout(()=>{
          this.store.dispatch(
            reinitMovable()
          );
        }, 200);
      }

      if (state.action) {

        this.store.dispatch(
          clearAction()
        );

        switch (state.action) {

          case "next": {
            this.props.app.props.onNext(this.props.app);
            break;
          }

          case "prev": {
            this.props.app.props.onPrev(this.props.app);
            break;
          }

          case "save": {
            this.props.app.props.onSave(this.props.app);
            break;
          }

          default:

        }


      }


      //
      //
      // if (state.dataLoaded) {
      //
      //   // console.log("Control dataLoaded",state.windowIsVisible);
      //   if (state.windowIsVisible) {
      //     // console.log("Control Wait for next load");
      //     this.store.dispatch(
      //       waitingForReloadStoreData()
      //     );
      //     this.waitForReload();
      //   } else {
      //     // console.log("Tab is inactive. Do not load");
      //   }
      //
      // } else
      // if (state.loadDataError) {
      //   // console.log("Control loadDataError");
      //   this.store.dispatch(
      //     reloadStoreData()
      //   );
      // } else
      // }

      if (state.dataForStorageChanged) {
      // console.log("Control dataForStorageChanged");
        this.store.dispatch(
          saveStorageData()
        );
      }
    }
  }

  stopTimeout() {
    if (this.loadTimeout) {
      clearTimeout(this.loadTimeout)
      this.loadTimeout=null;
    }
  }

  waitForReload() {
    // console.log("Control waitForReload");
    this.stopTimeout();

    this.loadTimeout=setTimeout(()=>{
      // console.log("Control Reload");
      this.store.dispatch(
        reloadStoreData()
      );
    },this.store.reloadTimeout);

  }



  render () {
    return null;
  }

}

export default Control;
