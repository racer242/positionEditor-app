export const useImage = (index) => {
  return {
    type: 'USE_IMAGE',
    index,
  }
}

export const clearImage = (index) => {
  return {
    type: 'CLEAR_IMAGE',
    index,
  }
}

export const updateImage = (index,transform) => {
  return {
    type: 'UPDATE_IMAGE',
    index,
    transform,
  }
}


export const reinitMovable = () => {
  return {
    type: 'REINIT_MOVABLE',
  }
}

export const goPrev = () => {
  return {
    type: 'GO_PREV',
  }
}

export const goNext = () => {
  return {
    type: 'GO_NEXT',
  }
}

export const save = () => {
  return {
    type: 'SAVE',
  }
}

export const clearAction = () => {
  return {
    type: 'CLEAR_ACTION',
  }
}




export const appInit = (data) => {
  return {
    type: 'APP_INIT',
    data:{
      ...data,
    },
  }
}

export const setStoreData = (data) => {
  return {
    type: 'SET_STORE_DATA',
    data:{
      ...data,
    },
  }
}

export const loadStoreDataError = (data) => {
  return {
    type: 'LOAD_STORE_DATA_ERROR',
    data:{
      ...data,
      dataLoaded:false,
      reloadData:false,
      loadDataError:true,
    },
  }
}

export const reloadStoreData = () => {
  return {
    type: 'RELOAD_STORE_DATA',
    data:{
      dataLoaded:false,
      reloadData:true,
      loadDataError:false,
    },
  }
}

export const waitingForReloadStoreData = () => {
  return {
    type: 'WAITING_FOR_RELOAD_STORE_DATA',
    data:{
      dataLoaded:false,
    },
  }
}

export const setAppData = (data) => {
  return {
    type: 'SET_APP_DATA',
    data,
  }
}

export const setStorageData = (data) => {
  return {
    type: 'SET_STORAGE_DATA',
    data,
  }
}

export const saveStorageData = () => {
  return {
    type: 'SAVE_STORAGE_DATA',
    data:{
      saveStorageData:true,
      dataForStorageChanged:null,
    }
  }
}

export const storageDataSaved = () => {
  return {
    type: 'STORAGE_DATA_SAVED',
    data:{
      saveStorageData:false,
    }
  }
}
