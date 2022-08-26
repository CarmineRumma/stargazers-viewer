/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '@stargazers/App';

// Mock for react-native-device-info
jest.mock('react-native-device-info', () => {
  return {
    getVersion: jest.fn(() => Promise.resolve('1.0')),
    getApplicationName: jest.fn(() => Promise.resolve('My App')),
  };
});

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
it('renders correctly', () => {
  renderer.create(<App />);
});
