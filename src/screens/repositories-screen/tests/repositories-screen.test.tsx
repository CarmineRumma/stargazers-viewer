import React from 'react';

import renderer from 'react-test-renderer';
import {RepositoriesScreen} from '../repositories-screen';

jest.mock('react-native-vector-icons/Feather', () => 'Feather');
const goBack = jest.fn();
const navigate = jest.fn();
const setOptions = jest.fn();
const addListener = jest.fn();
const mockRoute = {
  params: {
    owner: 'test',
    repositories: [],
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
      //@ts-ignore
      <RepositoriesScreen navigation={{goBack, navigate, setOptions, addListener}} route={mockRoute} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
