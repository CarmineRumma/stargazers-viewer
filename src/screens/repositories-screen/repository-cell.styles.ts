import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@stargazers/theme';
import spacing from '@stargazers/theme/spacing';

export const styles = StyleSheet.create({
  cellWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  cell: {
    alignItems: 'flex-start',
    borderBottomColor: '#F4f5f7',
    borderBottomWidth: 1,
    padding: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    minHeight: 90,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginEnd: 20,
  },
  badge: {
    width: 20,
    height: 20,
    backgroundColor: '#FFF',
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
  productImage: {
    width: 90,
    height: 90,
    position: 'relative',
  },
  placeholder: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textsContainer: {
    fontFamily: Fonts.regular,
    overflow: 'hidden',
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowOffset: {width: 0, height: 0},
  },
  rightColumn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    //position: 'relative',
    right: 3,
    marginTop: 0,
    //flex: 1,
    //backgroundColor: 'pink',
  },
  productName: {
    fontFamily: Fonts.helveticaMedium,
    fontSize: 18,
    lineHeight: 18,
    color: '#281d6c',
    marginBottom: 2,
    paddingTop: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  updatedAtWrapper: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 4,
    height: 18,
  },
  updatedAt: {
    fontSize: 12,
    color: '#281d6c',
    marginLeft: 0,
    lineHeight: 18,
    fontFamily: Fonts.regular,
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    paddingBottom: 5,
  },
  counterRowsWrapper: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 6,
  },
  starCounterImage: {
    width: 12,
    height: 12,
    alignSelf: 'center',
    alignItems: 'center',
    marginEnd: 5,
  },
  starCounterText: {
    marginLeft: 0,
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
});
