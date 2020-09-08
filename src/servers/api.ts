// 建议所有接口请求整理在一起再按需引用
import Taro from "@tarojs/taro";
import http from "./http";

// 去水印
export function clearWatermark(urlContent:string) {
  // 提取网址
  const urlReg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
  const result:any = urlContent.match(urlReg);
  if (!urlReg.test(urlContent)) {
    Taro.showToast({
      title: '无法解析，请核对信息是否正确',
      icon: 'none',
      duration: 2000
    })
    return new Promise((resolve) => {  
      resolve({
        data: {
          subMessage: '无法解析，请核对信息是否正确',
          subCode: 404
        }
      })
    })
  }
  let url = result[0];
  return http('open.watermark.clear', 'POST', { url,urlContent})
}