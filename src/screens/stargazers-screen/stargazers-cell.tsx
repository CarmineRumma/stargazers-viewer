import React from 'react';
import {Appearance, Image, ListRenderItemInfo, Text, TouchableHighlight, View} from 'react-native';
import {RepositoryItem} from '@stargazers/services/user-service/user-service.types';
import {Colors, Fonts} from '@stargazers/theme';
import {styles} from '@stargazers/screens/repositories-screen/repository-cell.styles';
import SvgArrowRight from '@stargazers/assets/Svg.ArrowRight';
import moment from 'moment';
import useColorScheme from '@stargazers/hooks/useColorScheme';
//import FastImage from 'react-native-fast-image';

const getColorScheme = Appearance.getColorScheme;
const colorScheme = getColorScheme()!;

export interface CategoryCellProps extends ListRenderItemInfo<RepositoryItem> {}

export const StargazersCell: React.FC<CategoryCellProps> = ({
  item,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  index,
  separators,
}) => {
  const colorScheme = useColorScheme();

  return (
    <>
      <TouchableHighlight
        // @ts-ignore
        style={{
          ...styles.cell,
          borderBottomColor: Colors[colorScheme].cellBorderBottomColor,
          backgroundColor: Colors[colorScheme].background,
        }}
        underlayColor={Colors[colorScheme].cellHighlight}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
        onPress={() => console.log(item.name)}>
        <View style={styles.cellWrapper}>
          <View
            style={{
              ...styles.imageWrapper,
            }}>
            <Image
              source={require('../../assets/repo-icon.png')}
              style={{width: 24, height: 24, alignSelf: 'center', alignItems: 'center'}}
            />
          </View>
          <View style={styles.textsContainer}>
            <Text
              style={{
                ...styles.productName,
                color: Colors[colorScheme].tint,
              }}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.name}
            </Text>

            <View style={styles.updatedAtWrapper}>
              <Text
                style={{
                  ...styles.updatedAt,
                  color: Colors[colorScheme].tint,
                }}>
                {moment(item.updated_at).format('MMMM d')},{' '}
                <Text style={{fontWeight: 'bold'}}>{moment(item.updated_at).format('HH:mm')}</Text>
              </Text>
            </View>
            <View style={styles.counterRowsWrapper}>
              <Image
                source={require('../../assets/star-icon.png')}
                style={styles.starCounterImage}
              />
              <Text style={styles.starCounterText}>{item.stargazers_count}</Text>
            </View>
          </View>
          <View style={styles.rightColumn}>
            <SvgArrowRight
              size={20}
              style={{
                color: Colors[colorScheme].tint,
              }}
            />
          </View>
        </View>
      </TouchableHighlight>
    </>
  );
};
