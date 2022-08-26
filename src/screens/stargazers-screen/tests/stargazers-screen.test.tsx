import React from 'react';

import renderer from 'react-test-renderer';
import {StargazersScreen} from '../stargazers-screen';

jest.mock('react-native-vector-icons/Feather', () => 'Feather');
const goBack = jest.fn();
const navigate = jest.fn();
const setOptions = jest.fn();
const addListener = jest.fn();
const mockRoute = {
  params: {
    owner: 'test',
    repository: {name: 'test'},
    stargazers: [],
  },
};
const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      setOptions: jest.fn(),
    }),
  };
});
describe('HomeScreen', () => {
  it('should render correctly', () => {
    const {toJSON} = renderer.create(
      <StargazersScreen
        //@ts-ignore
        navigation={{goBack, navigate, setOptions, addListener}}
        //@ts-ignore
        route={mockRoute}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
