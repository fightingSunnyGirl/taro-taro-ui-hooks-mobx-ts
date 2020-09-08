// Taro.request处理
import Taro from '@tarojs/taro'
import { BASEURL } from './base'
import interceptors from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));

export default function http(url: string, method: string, params: any) {
  Taro.showLoading();
  let data = {}
  return new Promise((resolve) => {
    if (params) {
      for (let key in params) { // 在这里判断传过来的参数值为null，就删除这个属性
        if (params[key] == null || params[key] == 'null') {
          delete params[key]
        }
      }
      data = { ...params }
    }

    Taro.request({
      url: BASEURL + url,
      method: method == 'POST' ? 'POST' : 'GET',
      data,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': Taro.getStorageSync('token') || null
      },
      success(res) {
        Taro.hideLoading();
        resolve(res)
      },
      fail(err) {
        Taro.hideLoading();
        Taro.showToast({
          title: '网络错误,请刷新重试',
          icon: 'none',
          duration: 2000
        })
        resolve({
          data: {
            subMessage: '网络错误,请刷新重试',
            subCode: 404
          }
        })
      }
    })
  })
}

