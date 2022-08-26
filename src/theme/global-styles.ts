import {StyleSheet} from 'react-native';
import Fonts from './fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  loading: {
    alignItems: 'center',
    marginTop: 34,
  },
  loadingText: {
    fontFamily: Fonts.helveticaMedium,
    marginBottom: 6,
  },
});
