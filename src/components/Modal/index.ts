import { withInstall } from '/@/utils';
import './src/index.less';
import basicModal from './src/BasicModal.vue';
import customModal from './src/CustomModal.vue';

export const BasicModal = withInstall(basicModal);
export const CustomModal = withInstall(customModal);
export { useModalContext } from './src/hooks/useModalContext';
export { useModal, useModalInner } from './src/hooks/useModal';
export * from './src/typing';
