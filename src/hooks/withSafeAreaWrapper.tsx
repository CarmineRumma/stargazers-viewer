import * as React from 'react';
import {Appearance, SafeAreaView} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colorScheme = Appearance.getColorScheme();

const withSafeArea = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WrappedComponent {...props} />
      </SafeAreaView>
    );
  };
};
export default withSafeArea;
