import {HttpClient} from '@stargazers/services/http-client';
import {UrlTemplates} from '@stargazers/services/api/api.constants';
import {RepositoriesRawResponse, UsersSearchRawResponse} from './user-service.types';
import Formatter from '@stargazers/utils/formatter';

export const searchUsers = (query: string) =>
  HttpClient.get<UsersSearchRawResponse>(
    Formatter.injectUrlParam(UrlTemplates.SEARCH_USERS, query),
  );

export const getUserRepositories = (owner: string) =>
  HttpClient.get<RepositoriesRawResponse>(
    Formatter.injectUrlParam(UrlTemplates.GET_USER_REPOSITORIES, owner),
  );
