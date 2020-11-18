import MobileDetect from 'mobile-detect'
import path from "path"

export const callLater = (callback,delay = 100) => {
  return setTimeout(callback,delay);
}

export const isMobile = () => {
  var mobileDetect = new MobileDetect(window.navigator.userAgent);
  return mobileDetect.mobile();
}

export const isLocal = () => {
  return !(/^h/.test(document.location.toString()));
}

export const objectIsEmpty = (object) => {
  return Object.keys(object).length === 0 && object.constructor === Object;
}

export const correctUrl = (url,assetsUrl) => {

  if (url) {
    if (url.substr(0,1)==="/") {
      if (!assetsUrl) {
        assetsUrl=".";
      }
      url=path.join(assetsUrl,url);
    }
  }

  return url;

}

export const openLink = (link) => {
  // let url=correctUrl(link)
  // console.log("??",url);
  window.open(link,"_blank")
}

export const decomposeMatrix = (m) => {

  function Point(x, y)
  {
    return { x: x, y: y };
  }

  function matrixTransforms(matrix) {
    // calculate delta transform point
    var px = deltaTransformPoint(matrix, new Point(0, 1));
    var py = deltaTransformPoint(matrix, new Point(1, 0));

    // calculate skew
    var skewX = ((180 / Math.PI) * Math.atan2(px.y, px.x) - 90);
    var skewY = ((180 / Math.PI) * Math.atan2(py.y, py.x));

    return {
      translateX:matrix.tx,
      translateY:matrix.ty,
      scaleX:Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b),
      scaleY:Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d),
      skewX:skewX,
      skewY:skewY,
      rotation:skewX // rotation is the same as skew x
    }
  }

  function deltaTransformPoint(matrix, point)  {
    //return matrix.deltaTransformPoint(point);
    var dx = point.x * matrix.a + point.y * matrix.c + 0;
    var dy = point.x * matrix.b + point.y * matrix.d + 0;
    return new Point(dx, dy);
  }

  function asDecompose(inMatrix)
  {
    var matrix = {
      a: inMatrix[0],
      b: inMatrix[1],
      c: inMatrix[2],
      d: inMatrix[3],
      tx: inMatrix[4],
      ty: inMatrix[5]
    };

    return matrixTransforms(matrix);
  }

  return asDecompose(m)
}
