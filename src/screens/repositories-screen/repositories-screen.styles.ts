import {Platform, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '@stargazers/utils/dimensions';
import {Fonts} from '@stargazers/theme';
import spacing from '@stargazers/theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  cellWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  scrollView: {
    //backgroundColor: 'white',
  },
  cell: {
    alignItems: 'flex-start',
    borderBottomColor: '#F4f5f7',
    borderBottomWidth: 1,
    padding: 8,
    paddingTop: 10,
    justifyContent: 'center',
    minHeight: 82,
  },
  imageWrapper: {
    position: 'relative',
    width: 50,
    height: 50,
    marginEnd: 15,
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  badge: {
    width: 20,
    height: 20,
    backgroundColor: '#9b8af0',
    borderWidth: 0,
    borderRadius: 3,
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    position: 'absolute',
    paddingTop: 2,
    textAlignVertical: 'center',
    right: 5,
    top: 10,
  },
  threadImage: {
    width: 50,
    height: 50,
    top: 0,
    borderRadius: 50,
  },
  textsWrapper: {
    fontFamily: Fonts.regular,
    overflow: 'hidden',
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowOffset: {width: 0, height: 0},
  },
  searchBarWrapper: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: spacing.s025,
    paddingVertical: spacing.s010,
  },
  searchBarText: {
    borderRadius: 25,
    borderColor: '#333',
    paddingHorizontal: 15,
    fontSize: 14,
    height: 40,
    color: 'white',
    width: '100%',
  },
  titleText: {
    fontSize: 16,
    color: '#281d6c',
    fontFamily: Fonts.semibold,
    maxWidth: '90%',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  separator: {},
});
