import React, { useState } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Observer, useLocalStore } from 'mobx-react';
import stores from '@store/index';
import { AtTabs, AtTabsPane } from 'taro-ui';
import {clearWatermark} from '@servers/api';

interface IAppProps {
}

const Home: React.FunctionComponent<IAppProps> = (props) => {
  const localStore = useLocalStore(() => stores.counterStore);
  const [current, setCurrent] = useState(0);

  const handleClick = (value) => {
    setCurrent(value)
  }

  useDidShow(() => {
    clearWatermark('猫：人类天天都干了些什么事！  https://v.douyin.com/JkLx8s6/ 复制此链接，打开【抖音短视频】，直接观看视频！').then((res:any)=>{
      if(res.subCode == 200){
        const data:any = res.data.data;
        console.log(data)

      }else{
        Taro.showToast(res.subMessage)
      }
    })
  })

  // Taro.pxTransform(10)
  return <Observer>
    {() =>
      <View>
        <AtTabs
          current={current}
          scroll
          height='100vh'
          tabDirection='vertical'
          tabList={[
            { title: '短视频去水印' },
            { title: '一言随机输出一句话' },
            { title: '随机二次元动漫图片' },
            { title: '每日Bing必应美图' },
            { title: '历史上的今天' },
            { title: '城市天气预报获取' },
          ]}
          onClick={handleClick}>
          <AtTabsPane tabDirection='vertical' current={current} index={0}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={current} index={1}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={current} index={2}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={current} index={3}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={current} index={4}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={current} index={5}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>

    }
  </Observer>;
};

export default Home;
