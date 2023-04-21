import Taro from '@tarojs/taro';

import { Command } from '../constant';
import { Dispatch } from 'typings';
import { IAllReducerProps } from '../types';
import { getReducerData } from '@/redux/store';
import { extraPathsValue } from '@/redux/util';

import api from 'api';

export default (dispatch: Dispatch) => {
  let action = {
    commonChange(...param: any) {
      dispatch({
        type: Command.commonChange,
        payload: extraPathsValue(...arguments),
      });
    },

    async status() {
      // 或取当前状态值
      let { main: { isLoading } } = getData()
      action.commonChange('main.isLoading', !isLoading);
    },

  };
  return action;
};

function getData(): IAllReducerProps {
  return {
    main: getReducerData('packagePAGENAMEMain'),
  };
}