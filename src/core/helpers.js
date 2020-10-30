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

export const formatWeight = (weight) => {
  if (weight==null) {
    return "--Кб"
  }

  weight=Number(weight)
  let output=""

  if (weight>=1000000) {
    output=Math.round(weight*100/1000000)/100+"Мб";
  } else
  if (weight>=1000) {
    output=Math.round(weight*100/1000)/100+"Kб";
  } else {
    output=weight+"б";
  }
  return output
}

export const exportCreatives = (creatives,passStatus) => {
  let creativeList=[];
  for (let name in creatives) {
    let creative=creatives[name];
    creativeList.push(creative);
  }

  creativeList.sort((a,b)=>{
    if (a.section>b.section) return 1;
    if (a.section<b.section) return -1;

    if (a.publisher>b.publisher) return 1;
    if (a.publisher<b.publisher) return -1;

    if (a.formatName>b.formatName) return 1;
    if (a.formatName<b.formatName) return -1;

    if (a.feed>b.feed) return 1;
    if (a.feed<b.feed) return -1;

    if (a.updateTime>b.updateTime) return 1;
    return -1;
  });

  let data=[]
  data.push(
    [
      { value:"Раздел", type:"string" },
      { value:"Площадка", type:"string" },
      { value:"Платформа", type:"string" },
      { value:"Формат", type:"string" },
      { value:"Фид", type:"string" },
      { value:"Статус", type:"string" },
      { value:"Рецензия", type:"string" },
    ]
  );

  for (let i = 0; i < creativeList.length; i++) {
    let creative=creativeList[i];
    data.push(
      [
        { value:creative.section, type:"string" },
        { value:creative.publisher, type:"string" },
        { value:creative.platform, type:"string" },
        { value:creative.formatName, type:"string" },
        { value:creative.feed, type:"string" },
        { value:creative.state, type:"string" },
        { value:passStatus[creative.name]?"Принят":"Не принят", type:"string" },
      ]
    );
  }

  return data;
}
