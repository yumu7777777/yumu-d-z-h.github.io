import { MockMethod } from 'vite-plugin-mock';
import {
  resultError,
  resultSuccess,
  getRequestToken,
  requestParams,
  resultPageSuccess,
} from '../_util';

const accountList = (() => {
  const result: any[] = [
    {
      id: '1',
      username: 'zane',
      password: '123456',
      realName: 'zane',
      avatar: '',
      email: '@email',
      role: 'admin',
      createTime: '@datetime',
      remark: '@cword(10,20)',
      status: '0',
      token: 'fakeToken1',
    },
    {
      id: '2',
      username: 'test',
      password: '123456',
      realName: '@cname()',
      avatar: '',
      email: '@email',
      role: 'general',
      createTime: '@datetime',
      remark: '@cword(10,20)',
      status: '0',
      token: 'fakeToken2',
    },
  ];
  return result;
})();

const roleList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 2; index++) {
    result.push({
      id: index + 1,
      orderNo: `${index + 1}`,
      roleName: ['超级管理员', '普通用户'][index],
      roleValue: ['admin', 'general'][index],
      createTime: '@datetime',
      remark: '@cword(10,20)',
      menu: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        [1, 18],
      ][index],
      status: '1',
    });
  }
  return result;
})();

const deptList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 3; index++) {
    result.push({
      id: `${index}`,
      deptName: ['华东分部', '华南分部', '西北分部'][index],
      orderNo: index + 1,
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '0', '1'],
      children: (() => {
        const children: any[] = [];
        for (let j = 0; j < 4; j++) {
          children.push({
            id: `${index}-${j}`,
            deptName: ['研发部', '市场部', '商务部', '财务部'][j],
            orderNo: j + 1,
            createTime: '@datetime',
            remark: '@cword(10,20)',
            'status|1': ['0', '1'],
            parentDept: `${index}`,
            children: undefined,
          });
        }
        return children;
      })(),
    });
  }
  return result;
})();

const menuList = (() => {
  const result: any[] = [
    {
      id: 2,
      // 菜单图标
      icon: 'ion:settings-outline',
      // 前端组件
      component: 'LAYOUT',
      // 是否隐藏路由
      hidden: false,
      // 不在Tab中显示
      hideTab: true,
      // 是否具有路由
      alwaysShow: false,
      // 打开方式（true: 外部打开方式，false：内部打开方式）
      internalOrExternal: false,
      // 是否缓存路由
      keepAlive: false,
      // 菜单类型（0：一级菜单，1：子菜单，2: 按钮/权限）
      menuType: 0,
      // 菜单名称
      name: '系统管理',
      // 父级菜单
      parentId: null,
      // 默认跳转地址
      redirect: null,
      // 是否路由菜单
      route: true,
      // 排序
      sortNo: 1,
      // 授权标识
      perms: '',
      // 授权策略（1：可见/可访问，2：可编辑）
      permsType: 1,
      // 创建时间
      createTime: '@datetime',
      // 更新时间
      updateTime: '@datetime',
      // 状态（0：无效，1：有效）
      status: 1,
      // 菜单路径
      url: '/admin',
    },
    {
      id: 6,
      icon: 'mdi:account-reactivate',
      component: '/admin/account/index',
      hidden: false,
      internalOrExternal: false,
      keepAlive: false,
      menuType: 1,
      name: '账号管理',
      parentId: 2,
      redirect: null,
      route: true,
      sortNo: 1,
      perms: '',
      permsType: 1,
      createTime: '@datetime',
      updateTime: '@datetime',
      status: 1,
      url: '/admin/account',
      ignoreAuth: false,
    },
    {
      id: 7,
      icon: 'eos-icons:role-binding-outlined',
      component: '/admin/role/index',
      hidden: false,
      internalOrExternal: false,
      keepAlive: false,
      menuType: 1,
      name: '角色管理',
      parentId: 2,
      redirect: null,
      route: true,
      sortNo: 2,
      perms: '',
      permsType: 1,
      createTime: '@datetime',
      updateTime: '@datetime',
      status: 1,
      url: '/admin/role',
      ignoreAuth: false,
    },
    {
      id: 8,
      icon: 'gg:menu-round',
      component: '/admin/menu/index',
      hidden: false,
      internalOrExternal: false,
      keepAlive: false,
      menuType: 1,
      name: '菜单管理',
      parentId: 2,
      redirect: null,
      route: true,
      sortNo: 3,
      perms: '',
      permsType: 1,
      createTime: '@datetime',
      updateTime: '@datetime',
      status: 1,
      url: '/admin/menu',
      ignoreAuth: false,
    },
    {
      id: 9,
      icon: 'fluent:organization-horizontal-20-regular',
      component: '/admin/dept/index',
      hidden: false,
      internalOrExternal: false,
      keepAlive: false,
      menuType: 1,
      name: '部门管理',
      parentId: 2,
      redirect: null,
      route: true,
      sortNo: 4,
      perms: '',
      permsType: 1,
      createTime: '@datetime',
      updateTime: '@datetime',
      status: 1,
      url: '/admin/dept',
      ignoreAuth: false,
    },
    {
      id: 10,
      icon: 'carbon:password',
      component: '/admin/password/index',
      hidden: false,
      internalOrExternal: false,
      keepAlive: false,
      menuType: 1,
      name: '修改密码',
      parentId: 2,
      redirect: null,
      route: true,
      sortNo: 5,
      perms: '',
      permsType: 1,
      createTime: '@datetime',
      updateTime: '@datetime',
      status: 1,
      url: '/admin/password',
      ignoreAuth: false,
    },
    {
      id: 11,
      icon: 'mdi:account-details-outline',
      component: '/admin/account/AccountDetail',
      hidden: true,
      internalOrExternal: false,
      keepAlive: false,
      menuType: 1,
      name: '账号详情',
      parentId: 2,
      redirect: null,
      route: true,
      sortNo: 6,
      perms: '',
      permsType: 1,
      createTime: '@datetime',
      updateTime: '@datetime',
      status: 1,
      url: '/admin/account_detail/:id',
      ignoreAuth: false,
    },
  ];
  return result;
})();

const nest = (items, id = null, link = 'parentId') => {
  return items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id) }))
    .map((item) => ({ ...item, children: item.children.length ? item.children : undefined }));
};

export default [
  {
    url: '/api/mock/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = accountList.find(
        (item) => item.username === username && password === item.password,
      );
      if (!checkUser) {
        return resultError('Incorrect account or password！');
      }
      const { id, username: _username, realName, token, role } = checkUser;
      return resultSuccess({
        role,
        id,
        username: _username,
        token,
        realName,
      });
    },
  },
  {
    url: `/api/mock/getUserInfo`,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = accountList.find((item) => item.token === token);
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!');
      }
      return resultSuccess(checkUser);
    },
  },
  {
    url: '/api/mock/getPermCode',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = accountList.find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }

      const codeList = roleList.find((item) => item.roleValue === checkUser.role)?.menu;

      return resultSuccess(codeList);
    },
  },
  {
    url: '/api/mock/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = accountList.find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      return resultSuccess(undefined, { message: 'Token has been destroyed' });
    },
  },
  {
    url: '/api/mock/getMenuList',
    timeout: 100,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError('Invalid token!');
      }
      const checkUser = accountList.find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid user token!');
      }
      const codeList = roleList.find((item) => item.roleValue === checkUser.role)?.menu;
      const menu: Object[] = menuList.filter(
        (item) => codeList.includes(item.id) && !item.ignoreAuth && item.menuType != 2,
      );
      /*
        .map((item) => {
          return {
            id: item.id,
            parentId: item.parentId,
            name: `menu${item.id}`,
            path: item.url,
            component: item.component,
            redirect: item.redirect,
            meta: {
              title: item.name,
              icon: item.icon,
              ignoreKeepAlive: !item.keepAlive,
              frameSrc: item.frameSrc,
              hideTab: item.hideTab,
              hideMenu: item.hidden,
              hideBreadcrumb: item.hidden,
              ignoreRoute: !item.route,
              orderNo: item.sortNo,
              ignoreAuth: item.ignoreAuth,
            },
          };
        })*/ return resultSuccess(menu);
    },
  },
  {
    url: '/api/mock/getIgroneAuthMenuList',
    timeout: 100,
    method: 'get',
    response: () => {
      const menu: Object[] = menuList
        .filter((item) => item.ignoreAuth && item.menuType != 2)
        .map((item) => {
          return {
            id: item.id,
            parentId: item.parentId,
            name: `menu${item.id}`,
            path: item.url,
            component: item.component,
            redirect: item.redirect,
            meta: {
              title: item.name,
              icon: item.icon,
              ignoreKeepAlive: !item.keepAlive,
              frameSrc: item.frameSrc,
              hideTab: item.hideTab,
              hideMenu: item.hidden,
              hideBreadcrumb: item.hidden,
              ignoreRoute: !item.route,
              orderNo: item.sortNo,
              ignoreAuth: item.ignoreAuth,
            },
            props: item.props,
          };
        });
      return resultSuccess(nest(menu));
    },
  },
  {
    url: '/api/mock/duplicate/check',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(undefined);
    },
  },
  {
    url: '/api/mock/system/getAccountList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, accountList);
    },
  },
  {
    url: '/api/mock/system/getRoleListByPage',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, roleList);
    },
  },
  {
    url: '/api/mock/system/setRoleStatus',
    timeout: 500,
    method: 'post',
    response: ({ query }) => {
      const { id, status } = query;
      return resultSuccess({ id, status });
    },
  },
  {
    url: '/api/mock/system/getAllRoleList',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(roleList);
    },
  },
  {
    url: '/api/mock/system/getDeptList',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(deptList);
    },
  },
  {
    url: '/api/mock/system/getMenuList',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(nest(menuList));
    },
  },
  {
    url: '/api/mock/system/accountExist',
    timeout: 500,
    method: 'post',
    response: ({ body }) => {
      const { account } = body || {};
      if (account && account.indexOf('admin') !== -1) {
        return resultError('该字段不能包含admin');
      } else {
        return resultSuccess(`${account} can use`);
      }
    },
  },
] as MockMethod[];
