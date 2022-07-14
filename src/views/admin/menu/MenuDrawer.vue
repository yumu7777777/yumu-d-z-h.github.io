<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="30%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './menu.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getMenuList } from '/@/api/sys/system';
  import { addMemuApi, updateMenuApi } from '/@/api/sys/menu';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { RouteItem } from '/@/api/sys/model/menuModel';

  export default defineComponent({
    name: 'MenuDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const { createMessage } = useMessage();
      const { t } = useI18n();

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { lg: 12, md: 24 },
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        }
        const treeData = ((await getMenuList()) as unknown as RouteItem[]).filter(
          (item) => item.menuType === 0,
        );
        updateSchema({
          field: 'parentId',
          componentProps: { treeData },
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增菜单' : '编辑菜单'));

      async function handleSubmit() {
        try {
          setDrawerProps({ confirmLoading: true });
          const values = await validate();
          values.status = values.status === undefined ? 1 : values.status;
          if (isUpdate.value) {
            updateMenuApi(values).then(() => {
              createMessage.success({
                content: t('common.saveSuccess'),
                duration: 1,
              });
              closeDrawer();
              emit('success');
            });
          } else {
            addMemuApi(values).then(() => {
              createMessage.success({
                content: t('common.saveSuccess'),
                duration: 1,
              });
              closeDrawer();
              emit('success');
            });
          }
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return { registerDrawer, registerForm, getTitle, handleSubmit };
    },
  });
</script>
