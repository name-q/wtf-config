import { IAllReducerProps } from './types';

export function store2Props({ packagePAGENAMEMain }): IAllReducerProps {
  return {
    main: packagePAGENAMEMain,
  };
}