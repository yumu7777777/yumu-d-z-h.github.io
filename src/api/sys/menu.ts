import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel, MenuResultModel } from './model/menuModel';

enum Api {
  MenuList = '/mock/getMenuList',
  Menu = '/mock/menu',
}

/**
 * @description: Get user menu based on id
 */
export const getMenuList = () => {
  return defHttp.get<getMenuListResultModel>({
    url: Api.MenuList,
    params: {},
  });
};

/**
 * 新增菜单
 * @param menuInfo
 * @returns
 */
export const addMemuApi = (menuInfo) => {
  return defHttp.post<MenuResultModel>({
    url: Api.Menu,
    params: {
      ...menuInfo,
    },
  });
};

export const updateMenuApi = (menuInfo) => {
  return defHttp.put<MenuResultModel>({
    url: Api.Menu,
    params: {
      ...menuInfo,
    },
  });
};

/**
 * 删除指定菜单
 * @param id
 * @returns
 */
export const delMenuApi = (id: number) => {
  return defHttp.delete<MenuResultModel>({
    url: `${Api.Menu}/${id}`,
    params: {},
  });
};
