import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props.store
    return (
      <View className='index'>
        {/* <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text> */}
       <AtTabs
  current={this.state.current}
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
  onClick={this.handleClick.bind(this)}>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页一的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页二的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页四的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页五的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页六的内容</View>
  </AtTabsPane>
</AtTabs>
      </View>
    )
  }
}

export default Index
