import { isMobile,isLocal } from '../core/helpers';

const settings = {

    assetsUrl: ".",
    localStoreName:"appState_261020",

    isMobile:isMobile(),
    isLocal:isLocal(),

    topMenu:{
      height:"5%",
    },

    sideMenu:{
      width:"10%",
    },

    editorBounds:{
      width:0,
      height:0,
    },

    addImagesDefaultSize:{
      width:500,
      height:500,
    },

    addImagesDefaultScale:0.5,

    mainImageSrc:"",
    addImagesSrc:["","",""],
    addImagesTransform:[null,null,null],

    title:"",
}

export default settings;
