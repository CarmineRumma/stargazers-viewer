import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Platform,
  Animated,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Linking,
} from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import {OwnerSuggestionType} from '@stargazers/screens/home-screen/home-screen.types';
import Easing from '@stargazers/utils/easing';
import {Colors, Fonts} from '@stargazers/theme';
import {styles} from './home-screen.styles';
import {BlurView} from '@react-native-community/blur';
import {AutocompleteDropdown, AutocompleteDropdownRef} from 'react-native-autocomplete-dropdown';
// @ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import {SCREEN_HEIGHT} from '@stargazers/utils/dimensions';
import {getUserRepositories, searchUsers} from '@stargazers/services/user-service/user-service';
import {Background, Button, InfoTextLayout} from '@stargazers/components';
import {HomeScreenProps} from '@stargazers/navigators/navigator.types';
//Feather.loadFont();
export const HomeScreen: (props: HomeScreenProps) => JSX.Element = ({navigation}) => {
  console.log('HomeScreen');

  const colorScheme = useColorScheme();

  const [loading, setLoading] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState<Array<OwnerSuggestionType> | undefined>();
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const dropdownController = useRef<AutocompleteDropdownRef | null>(null);
  const searchRef = useRef(null);

  const getSuggestions = useCallback(async (q: string) => {
    const filterToken = q;
    //console.log('getSuggestions', q);
    if (typeof q !== 'string' || q.length < 3) {
      setSuggestionsList(undefined);
      return;
    }
    setLoading(true);
    const items = await searchUsers(q);
    const suggestions: OwnerSuggestionType[] = items.data.items
      .filter(item => item.login.includes(filterToken))
      .map(item => ({
        id: item.id.toString(),
        title: item.login,
      }));
    setSuggestionsList(suggestions);
    setLoading(false);
  }, []);

  const onClearPress = useCallback(() => {
    setSelectedUser(null);
    setSuggestionsList(undefined);
  }, []);

  const onOpenSuggestionsList = useCallback((isOpened: boolean) => {}, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const transAnim = useRef(new Animated.Value(180)).current;
  const transAnimFooter = useRef(new Animated.Value(0)).current;

  const setLoadingState = useCallback(() => {
    Animated.timing(transAnimFooter, {
      toValue: 200,
      useNativeDriver: true,
      easing: Easing.ease,
      duration: 500,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.easeInOutCirc,
      duration: 1200,
    }).start();
    Animated.timing(transAnim, {
      toValue: 800,
      useNativeDriver: true,
      easing: Easing.easeInOutCirc,
      duration: 1300,
    }).start();
  }, [fadeAnim, transAnim, transAnimFooter]);

  const [activeBlur, setActiveBlur] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('scren focus');
      //if (Platform.OS === 'ios') {
      //setActiveBlur(true);
      //}
      // Start login animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        useNativeDriver: true,
        easing: Easing.easeInCirc,
        duration: 2200,
      }).start();
      Animated.timing(transAnim, {
        toValue: 0,
        useNativeDriver: true,
        easing: Easing.easeInOutCirc,
        duration: 2300,
      }).start();
    });

    return unsubscribe;
  }, [navigation]);

  const fetchRepositories = () => {
    setLoadingState();
    getUserRepositories(selectedUser!).then(
      response => {
        navigation.navigate('RepositoriesScreen', {
          owner: selectedUser!,
          repositories: response.data,
        });
      },
      () => {
        console.log('error');
      },
    );
  };

  // @ts-ignore
  return (
    <>
      <Background>
        <Animated.View
          style={{
            ...styles.footer,
            height: 80,
            transform: [
              {
                translateY: transAnimFooter,
              },
            ],
          }}>
          <View style={styles.footerLinks}>
            <TouchableOpacity
              onPress={async () => {
                // @ts-ignore
                navigation.navigate('AboutScreen', {});
              }}>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 24,
                  fontFamily: Fonts.medium,
                  color: Colors[colorScheme].tint,
                  textTransform: 'uppercase',
                }}>
                about
              </Text>
            </TouchableOpacity>
            <Text style={{paddingHorizontal: 10}}>|</Text>
            <TouchableOpacity
              onPress={async () => {
                if (Platform.OS === 'ios') {
                  //await Linking.openURL(Constants.tos_link);
                } else {
                  // @ts-ignore
                  navigation.navigate('TermsScreen', {});
                }
              }}>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 24,
                  fontFamily: Fonts.medium,
                  color: Colors[colorScheme].tint,
                  textTransform: 'uppercase',
                }}>
                License
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: Fonts.regular,
              fontSize: 13,
              color: Colors[colorScheme].tint,
            }}>
            {'login_footer_txt'}
          </Text>
        </Animated.View>

        <KeyboardAvoidingView style={styles.container} behavior="height">
          <Animated.View
            style={{
              ...styles.overlay,
              opacity: fadeAnim,
            }}>
            {activeBlur && (
              <View
                style={{
                  ...styles.overlay,
                }}
                pointerEvents={'box-only'}
                onTouchEnd={() => {
                  console.log('close keyboard');
                  Keyboard.dismiss();
                }}>
                {Platform.OS === 'ios' && (
                  <BlurView
                    blurType={colorScheme}
                    blurRadius={8}
                    blurAmount={6}
                    reducedTransparencyFallbackColor="white"
                    style={{
                      ...styles.overlay,
                    }}
                  />
                )}
                {Platform.OS === 'android' && (
                  <View
                    style={{
                      ...styles.overlay,
                    }}
                  />
                )}
              </View>
            )}
          </Animated.View>
          <Animated.View
            style={{
              ...styles.panel,
              backgroundColor: Colors[colorScheme].background,
              borderColor: Colors[colorScheme].buttonEnabledColor,
              shadowColor: Colors[colorScheme].secondary,
              opacity: fadeAnim,
              transform: [
                {
                  translateY: transAnim,
                },
              ],
            }}>
            <InfoTextLayout
              text={'Type a GitHub user below and select from the list to see his repositories.'}
            />

            <AutocompleteDropdown
              ref={searchRef}
              controller={controller => {
                dropdownController.current = controller;
              }}
              // initialValue={'1'}
              direction={Platform.select({ios: 'down'})}
              dataSet={suggestionsList}
              onChangeText={getSuggestions}
              onSelectItem={item => {
                item && console.log(item.title);
                item && setSelectedUser(item.title);
              }}
              debounce={600}
              suggestionsListMaxHeight={SCREEN_HEIGHT * 0.4}
              onClear={onClearPress}
              //onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
              onOpenSuggestionsList={onOpenSuggestionsList}
              loading={loading}
              useFilter={false}
              textInputProps={{
                placeholder: 'Type 3+ letters (dolo...)',
                autoCorrect: false,
                autoCapitalize: 'none',
                style: {
                  ...styles.autocompleteTextInput,
                },
              }}
              rightButtonsContainerStyle={styles.rightButtonsContainerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              suggestionsListContainerStyle={{
                ...styles.suggestionContainerStyle,
                backgroundColor: Colors[colorScheme].secondary,
              }}
              containerStyle={styles.autocompleteContainerStyle}
              // @ts-ignore
              EmptyResultComponent={_ => (
                <Text style={styles.autocompleteItemText}>No Users found</Text>
              )}
              renderItem={item => (
                <Text
                  style={{
                    ...styles.autocompleteItemText,
                  }}>
                  {item.title}
                </Text>
              )}
              ChevronIconComponent={<Feather name="chevron-down" size={20} color="#fff" />}
              ClearIconComponent={<Feather name="x-circle" size={18} color="#fff" />}
              inputHeight={50}
              showChevron={!!selectedUser}
              closeOnBlur={false}
            />

            <Button
              style={{
                ...styles.continueButton,
                backgroundColor:
                  selectedUser !== null
                    ? Colors[colorScheme].buttonEnabledBg
                    : Colors[colorScheme].buttonDisabledBg,
                borderColor:
                  selectedUser !== null
                    ? Colors[colorScheme].buttonEnabledColor
                    : Colors[colorScheme].buttonDisabledColor,
              }}
              onPress={fetchRepositories}
              disabled={selectedUser === null}>
              <Text
                style={{
                  ...styles.continueButtonText,
                  color:
                    selectedUser !== null
                      ? Colors[colorScheme].buttonEnabledColor
                      : Colors[colorScheme].buttonDisabledColor,
                }}>
                Continua
              </Text>
            </Button>
          </Animated.View>
        </KeyboardAvoidingView>
      </Background>
    </>
  );
};