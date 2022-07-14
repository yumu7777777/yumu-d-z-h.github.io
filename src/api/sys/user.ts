import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/mock/login',
  Logout = '/mock/logout',
  GetUserInfo = '/mock/getUserInfo',
  GetPermCode = '/mock/getPermCode',
  DuplicateCheck = '/mock/duplicate/check',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>(
    {
      url: Api.GetUserInfo,
    },
    {
      errorMessageMode: 'none',
    },
  );
}

export function getPermCode() {
  return defHttp.get<string[]>({
    url: Api.GetPermCode,
  });
}

export function doLogout() {
  return defHttp.get({
    url: Api.Logout,
  });
}

/**
 * 唯一校验
 * @param params
 */
export const duplicateCheck = (params) =>
  defHttp.get(
    {
      url: Api.DuplicateCheck,
      params,
    },
    {
      isTransformResponse: false,
    },
  );
