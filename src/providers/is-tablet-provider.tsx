import * as React from 'react';
import {isTablet} from 'react-native-device-info';
import {ReactNode} from 'react';

const IsTabletProvider = React.createContext({});

// @ts-ignore
export const IsTabletContextProvider = (WrappedComponent: ReactNode<any>) => {
  const state = React.useState(isTablet());

  return <IsTabletProvider.Provider value={state}>{WrappedComponent}</IsTabletProvider.Provider>;
};

export const useIsTablet = () => React.useContext(IsTabletProvider);
