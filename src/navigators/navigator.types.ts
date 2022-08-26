import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RepositoryItem} from '@stargazers/services/user-service/user-service.types';

export type RootStackParamList = {
  HomeScreen: undefined;
  RepositoriesScreen: {
    owner: string;
    repositories: RepositoryItem[];
  };
  StargazersScreen: {
    owner: string;
    stargazers: RepositoryItem[];
  };
};
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
export type RepositoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RepositoriesScreen'
>;
export type StargazersScreenProps = NativeStackScreenProps<RootStackParamList, 'StargazersScreen'>;
