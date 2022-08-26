import React from 'react';

import renderer from 'react-test-renderer';
import {HomeScreen} from '../home-screen';

import {AutocompleteDropdown, AutocompleteDropdownRef} from 'react-native-autocomplete-dropdown';

jest.mock('react-native-vector-icons/Feather', () => 'Feather');
const goBack = jest.fn();
const navigate = jest.fn();
const setOptions = jest.fn();
const addListener = jest.fn();
const mockedNavigation = jest.fn();

jest.mock('react-native-autocomplete-dropdown');
describe('HomeScreen', () => {
  it('should render correctly', () => {
    const {toJSON} = renderer.create(
      <HomeScreen navigation={{goBack, navigate, setOptions, addListener}} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});