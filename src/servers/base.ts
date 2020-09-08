// 设置不同环境不同路径请求的url地址
const NODE_ENV = process.env.NODE_ENV;
const TARO_ENV = process.env.TARO_ENV;//开发环境区分 h5、小程序、支付宝等
// 开发域名 h5开发环境使用代理
const DEVDOMAIN = (TARO_ENV =='h5' && NODE_ENV == 'development') ? '/proxy': 'http://www.sunny.com';
// 正式域名
const PRODOMAIN = 'https://xxx.com';
//前缀
const PREFIX = '/api?dapi=';

// 测试域名
export const DEVPROXY = DEVDOMAIN + PREFIX;
// 线上域名
export const PROPROXY = PRODOMAIN + PREFIX;
//接口地址
export const BASEURL = NODE_ENV == 'development' ? DEVPROXY : PROPROXY;
export const DOMAIN = NODE_ENV == 'development' ? DEVDOMAIN : PRODOMAIN;
