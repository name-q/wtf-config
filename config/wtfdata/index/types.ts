import Actions from './actions';
export interface IMainReducer {
  isReady: boolean;
  isLoading?: boolean;
}

export type ActionType = ReturnType<typeof Actions>;
export type IAllReducerProps = {
  main: IMainReducer;
  [name: string]: any;
};

export type IProps = IAllReducerProps & ActionType;

//自定义
export type IInfoProps = {};
export type IInfoState = {};