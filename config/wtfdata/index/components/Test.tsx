import React from 'react';
import Taro from '@tarojs/taro';

import * as T from '../types';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { store2Props } from '../selectors';
type IInfoProps = T.IProps & T.IInfoProps;

import { View } from '@tarojs/components';
import './Test.less';


// @ts-ignore
@connect<Partial<IInfoProps>, T.IInfoState>(store2Props, actions)
export default class Test extends React.Component<Partial<IInfoProps>, T.IInfoState> {

  // 使用state值
  // constructor(props) {
  //   super(props)
  //   this.state={
  //     test:1
  //   }
  // }

  render() {
    let {
      main: { isLoading },
      actions: { action },
    } = this.props;
    return (
      <View className="componentTest">
        <>
          <View className='btn' onClick={() => { action.status() }}>{isLoading ? 'close' : 'open'}</View>
        </>
      </View>
    );
  }
}
