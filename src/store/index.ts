import Taro from '@tarojs/taro';
import counterStore from './counter'
import { TARO_ENV } from '@servers/base';

const stores:any = {
  counterStore
}

let storeStemps: any = Taro.getStorageSync("store") || null;

// const detail = JSON.parse(Taro.getStorageSync('detail')) || null;
// const hasUserInfo = Taro.getStorageSync('hasUserInfo') || false;

//在页面加载时读取sessionStorage里的状态信息
if (storeStemps) {
  storeStemps = JSON.parse(storeStemps);
  // 拷贝对应的值 而不是整个对象 保存时缺失了一些函数等深层次数据
  for (let k in storeStemps) {
    for (let i in storeStemps[k]) {
      stores[k][i] = storeStemps[k][i]
    }
  }
}

//在页面刷新时将store里的信息保存到sessionStorage里 setStorage removeStorage setStorage
if (TARO_ENV == 'h5') {
  let u = navigator.userAgent;
  if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
    window.addEventListener("pagehide", () => {
      Taro.setStorage({
        key:'store',
        data:JSON.stringify(stores)
      })
    })
  } else {
    window.addEventListener("beforeunload", () => {
      Taro.setStorage({
        key:'store',
        data:JSON.stringify(stores)
      })
    })
  }
} else {
  Taro.onAppHide(()=>{
    Taro.setStorage({
      key:'store',
      data:JSON.stringify(stores)
    })
  })
}

export default stores;