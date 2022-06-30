import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/admin/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/admin/dashboard/index',
  meta: {
    orderNo: 0,
    hideChildrenInMenu: true,
    icon: 'ion:grid-outline',
    title: t('routes.admin.dashboard'),
  },
  children: [
    {
      path: 'index',
      name: 'Dashboard',
      component: () => import('/@/views/admin/dashboard/index.vue'),
      meta: {
        title: t('routes.admin.dashboard'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
