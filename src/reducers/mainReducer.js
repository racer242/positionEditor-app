let mainReducerController = (state={}, action) => {

    // console.log("mainReducer",action);

    switch (action.type) {


      case 'USE_IMAGE': {
        let addImagesTransform=state.addImagesTransform.concat();
        let editorBounds=state.editorBounds;
        let imageSize=state.addImagesDefaultSize;
        if (!addImagesTransform[action.index]) {
          addImagesTransform[action.index]=[
            state.addImagesDefaultScale, 0, 0, state.addImagesDefaultScale, (editorBounds.width-imageSize.width)/2, (editorBounds.height-imageSize.height)/2
          ]
        }
        return {
          ...state,
          addImagesTransform,
          justAdded:true,
        }
      }

      case 'REINIT_MOVABLE': {
        return {
          ...state,
          justAdded:false,
        }
      }

      case 'CLEAR_IMAGE': {
        let addImagesTransform=state.addImagesTransform.concat();
        if (addImagesTransform[action.index]) {
          addImagesTransform[action.index]=null;
        }
        return {
          ...state,
          addImagesTransform,
        }
      }

      case 'UPDATE_IMAGE': {
        let addImagesTransform=state.addImagesTransform.concat();
        addImagesTransform[action.index]=action.transform;
        // console.log(addImagesTransform);
        return {
          ...state,
          addImagesTransform,
        }
      }

      // case 'WAITING_FOR_RELOAD_STORE_DATA':
      // case 'STORAGE_DATA_SAVED':
      // case 'SAVE_STORAGE_DATA':
      // case 'SET_STORAGE_DATA':
      // case 'LOAD_STORE_DATA_ERROR':
      // case 'RELOAD_STORE_DATA':

      case 'APP_INIT': {
        return {
          ...state,
          ...action.data,
        }
      }

      case 'SET_STORE_DATA': {
        return {
          ...state,
          ...action.data,
          loaded:true,
        }
      }

      case 'GO_PREV': {
        return {
          ...state,
          action:"prev",
        }
      }

      case 'GO_NEXT': {
        return {
          ...state,
          action:"next",
        }
      }

      case 'SAVE': {
        return {
          ...state,
          action:"save",
        }
      }

      case 'CLEAR_ACTION': {
        return {
          ...state,
          action:null,
        }
      }

      default:
        return state
    }
}

const mainReducer = (state={}, action) => {

  if (action.extraAction) {
    state = mainReducer(state,action.extraAction);
  }

  state = mainReducerController(state,action);

  return state;
}


export default mainReducer
