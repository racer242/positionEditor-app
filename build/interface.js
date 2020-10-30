var currentFrame=0;
var frames=[];

function onEditorAppReadyHandler(app) {

  app.setData(
    {
      topMenu:{
        height:"5%",
      },
      sideMenu:{
        width:"20%",
      },
      editorBounds:{
        width:1200,
        height:1200,
      },

      addImagesDefaultSize:{
        width:500,
        height:500,
      },

      addImagesDefaultScale:0.5,

      mainImageSrc:"holes.png",

      addImagesSrc:[
        "foto-square-1.jpg",
        "foto-square-2.jpg",
        "foto-square-3.jpg",
      ],

      addImagesTransform:[],

      title:"Кадр: "+0,
    }
  );

}

function saveFrame(frameData) {
  frames[currentFrame]=frameData;
}

function onEditorAppNextHandler(app) {
  var data=app.getData()
  console.log("onEditorAppNextHandler",data);

  saveFrame(data.addImagesTransform);

  currentFrame++;

  if (currentFrame==frames.length) {
    frames.push([]);
  }
  app.setData({
    mainImageSrc:"holes.png",
    
    addImagesTransform:frames[currentFrame],
    title:"Кадр: "+currentFrame,
  });
}

function onEditorAppPrevHandler(app) {
  var data=app.getData()
  console.log("onEditorAppPrevHandler",data);
  saveFrame(data.addImagesTransform);
  currentFrame--;
  if (currentFrame<0) {
    currentFrame=0;
  }
  app.setData({
    mainImageSrc:"holes.png",

    addImagesTransform:frames[currentFrame],
    title:"Кадр: "+currentFrame,
  });
}

function onEditorAppSaveHandler(app) {
  var data=app.getData()
  console.log("onEditorAppSaveHandler",data);
  saveFrame(data.addImagesTransform);
}
