import React from 'react';
import renderer from 'react-test-renderer';
import {default as withSafeAreaWrapper} from '../withSafeAreaWrapper';
import {View} from 'react-native';

describe('withSafeAreaWrapper', () => {
  it('should render correctly', () => {
    // @ts-ignore
    const {toJSON} = renderer.create(withSafeAreaWrapper(<View />));

    expect(toJSON()).toMatchSnapshot();
  });
});
