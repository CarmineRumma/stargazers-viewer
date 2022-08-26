import React, {SetStateAction, useCallback, useEffect, useRef, useState} from 'react';

import useColorScheme from '../../hooks/useColorScheme';

import {FlatList, View, Text, Platform, RefreshControl, TextInput} from 'react-native';
import {getUserRepositories} from '@stargazers/services/user-service/user-service';
import {RepositoryItem} from '@stargazers/services/user-service/user-service.types';
import {styles} from './repositories-screen.styles';
import {RepositoriesScreenProps} from '@stargazers/navigators/navigator.types';
import {Colors, Fonts} from '@stargazers/theme';
import {SCREEN_HEIGHT} from '@stargazers/utils/dimensions';
import {RepositoryCell} from '@stargazers/screens/repositories-screen/repository-cell';
export const RepositoriesScreen = ({route, navigation}: RepositoriesScreenProps) => {
  const colorScheme = useColorScheme();
  const owner: string = route.params.owner;
  const [refreshing, setRefreshing] = useState(false);
  console.log('RepositoriesScreen', owner);

  const [repositories, setRepositories] = useState<RepositoryItem[]>(route.params.repositories);
  const [filteredRepositories, setFilteredRepositories] = useState<RepositoryItem[]>(
    route.params.repositories,
  );
  const [search, setSearch] = useState('');

  useEffect(() => {
    //fetchRepos();
    navigation.setOptions({
      title: owner + ' respositories',
    });
  }, [owner]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getUserRepositories(owner).then(
      response => {
        setRepositories(response.data);
        setRefreshing(false);
      },
      () => {
        setRefreshing(false);
      },
    );
  }, []);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = repositories.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredRepositories(newData);
      setSearch(text);
    } else {
      setFilteredRepositories(repositories);
      setSearch(text);
    }
  };

  const [loading, setLoading] = useState(false);

  // @ts-ignore
  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme].background,
        flex: 1,
      }}>
      <View
        style={{
          ...styles.searchBarWrapper,
          backgroundColor: Colors[colorScheme].background,
        }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={searchFilterFunction}
          placeholder="Search repo.."
          placeholderTextColor={Colors[colorScheme].infoTextColor}
          style={{
            ...styles.searchBarText,
            color: Colors[colorScheme].infoTextColor,
            backgroundColor: Colors[colorScheme].secondary,
          }}
        />
      </View>
      <FlatList
        //@ts-ignore
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({highlighted}) => <View style={[styles.separator, highlighted && {marginLeft: 0}]} />)
        }
        removeClippedSubviews={true}
        style={styles.scrollView}
        data={filteredRepositories}
        keyExtractor={item => item.id.toString()}
        renderItem={props => {
          return <RepositoryCell {...props} />;
        }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                paddingTop: SCREEN_HEIGHT / 4,
                flex: 1,
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...styles.titleText,
                  color: Colors[colorScheme].tint,
                  fontFamily: Fonts.semibold,
                  fontSize: 26,
                  textAlign: 'center',
                }}>
                No Repositories
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
