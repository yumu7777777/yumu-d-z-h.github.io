export interface RouteItem {
  id: number;
  icon: string;
  component: string;
  hidden: boolean;
  internalOrExternal: boolean;
  keepAlive: boolean;
  menuType: number;
  name: string;
  parentId: number;
  redirect: string;
  route: boolean;
  sortNo: boolean;
  perms: string;
  permsType: number;
  status: number;
  url: string;
  ignoreAuth: boolean;
  hideTab: boolean;
  frameSrc: string;
}

/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[];

export type MenuResultModel = RouteItem;
