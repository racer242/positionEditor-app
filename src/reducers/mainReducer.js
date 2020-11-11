let mainReducerController = (state={}, action) => {

    // console.log("mainReducer",action);

    switch (action.type) {


      case 'USE_IMAGE': {
        let editorBounds=state.editorBounds;
        let imageSize=state.addImagesDefaultSize;

        let addImagesTransform=state.addImagesTransform.concat();
        if (!addImagesTransform[action.index]) {
          addImagesTransform[action.index]={
            x:(editorBounds.width-imageSize.width)/2,
            y:(editorBounds.height-imageSize.height)/2,
            scale:state.addImagesDefaultScale,
            rotation:0,
          }
        }

        let addImagesMatrix=state.addImagesMatrix.concat();
        if (!addImagesMatrix[action.index]) {
          addImagesMatrix[action.index]=[
            state.addImagesDefaultScale, 0, 0, state.addImagesDefaultScale, (editorBounds.width-imageSize.width)/2, (editorBounds.height-imageSize.height)/2
          ]
        }

        let addImagesBounds=state.addImagesBounds.concat();
        if (!addImagesBounds[action.index]) {
          addImagesBounds[action.index]={
            x:(editorBounds.width-imageSize.width)/2,
            y:(editorBounds.height-imageSize.height)/2,
            width:imageSize.width*state.addImagesDefaultScale,
            height:imageSize.height*state.addImagesDefaultScale,
          }
        }

        return {
          ...state,
          addImagesTransform,
          addImagesMatrix,
          addImagesBounds,
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
        addImagesTransform[action.index]=null;

        let addImagesMatrix=state.addImagesMatrix.concat();
        addImagesMatrix[action.index]=null;

        let addImagesBounds=state.addImagesBounds.concat();
        addImagesBounds[action.index]=null;

        return {
          ...state,
          addImagesTransform,
          addImagesMatrix,
          addImagesBounds,
        }
      }

      case 'UPDATE_IMAGE': {

        let addImagesTransform=state.addImagesTransform.concat();
        if (action.transform) {
          addImagesTransform[action.index]=action.transform;
        }

        let addImagesMatrix=state.addImagesMatrix.concat();
        if (action.matrix) {
          addImagesMatrix[action.index]=action.matrix;
        }

        let addImagesBounds=state.addImagesBounds.concat();
        if (action.bounds) {
          addImagesBounds[action.index]=action.bounds;
        }

        // console.log(addImagesTransform);
        // console.log(addImagesMatrix);

        return {
          ...state,
          addImagesTransform,
          addImagesMatrix,
          addImagesBounds,
          justAdded:false,
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
        // console.log("!!!?????????!!!!!!!!!");
        return {
          ...state,
          ...action.data,
          loaded:true,
          justAdded:true,
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
