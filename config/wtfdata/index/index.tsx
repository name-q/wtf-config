import React from 'react';
import Taro from '@tarojs/taro';

import { connect } from 'react-redux';
import * as T from './types';
import actions from './actions';
import { store2Props } from './selectors';

import { View } from '@tarojs/components';
import Test from './components/Test';
import './index.less';

actions().actions.loadReducer();

// @ts-ignore
@connect<Partial<T.IProps>, any>(store2Props, actions)
export default class PAGENAME extends React.Component<Partial<T.IProps>, any> {

  // 使用state值
  // constructor(props) {
  //   super(props)
  //   this.state={
  //     test:1
  //   }
  // }

  componentDidShow() {
    // 或取路由值  // eg: { id: 2, type: 'test' }
    // Taro.getCurrentInstance()?.router?.params
    this.props.actions.init()
  }

  componentWillUnmount() {
    this.props.actions.clean();
  }

  render() {
    if (!this.props.main) return null
    let { main: { isLoading } } = this.props
    console.log(isLoading)
    
    return (
      <View className="pagePAGENAME">
        <Test />
      </View>
    );
  }
}
