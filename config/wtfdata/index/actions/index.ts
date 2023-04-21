import Taro from '@tarojs/taro';

import { Command } from '../constant';
import { Dispatch } from 'typings';
import { getActionProxy } from '@/redux/action-util';
import * as reduxStore from '@/redux/store';
import packagePAGENAMEMain from '../reducers/main';

import Action from './action';

import api from 'api';

export default (dispatch?: Dispatch) => {
  const actions = {
    action: getActionProxy<typeof Action>(Action)(dispatch),

    /**
     * 初始化数据
     */
    async init() {
      // 发送请求 - 自行判断是否try catch
      // const res = await api.indexGroupBookVOController.page(params);
      // 调用action中的方法
      // actions.action.test(params);

      // 初始化赋值 后续使用 action 中的commonChange方法改变值
      dispatch({
        type: Command.init, payload: {
          main: {
            isLoading: true
          },
        },
      })
    },

    /**
     * 重置
     */
    async clean() {
      //@ts-ignore
      __TARO_ENV !== 'h5' && (await actions.unloadReducer());
      dispatch({ type: Command.clean });
    },

    /**
     * 动态添加注入reducer
     */
    async loadReducer() {
      reduxStore.registerReducer({
        packagePAGENAMEMain,
      });
    },

    /**
     * 卸载reducer
     */
    async unloadReducer() {
      if (reduxStore.deregister) {
        reduxStore.deregister(['packagePAGENAMEMain']);
      } else {
        console.error('请在redux/store中实现deregister逻辑. ');
      }
    },
  };

  return { actions };
};