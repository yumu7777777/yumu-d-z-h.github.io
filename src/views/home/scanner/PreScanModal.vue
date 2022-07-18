<template>
  <CustomModal
    v-bind="$attrs"
    :footer="null"
    :can-fullscreen="false"
    :closable="true"
    :maskClosable="false"
    :draggable="false"
    :centered="true"
    :title="'Pre-Scan'"
    :maskStyle="{
      backdropFilter: 'blur(5px)',
    }"
    @register="registerModal"
    @visible-change="handleVisibleChange"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerBasicForm" @submit="handleSaveBasic" />
    </div>
  </CustomModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CustomModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';

  const basicSchemas: FormSchema[] = [
    {
      field: 'startIp',
      component: 'Input',
      label: 'start ip',
      required: true,
      colProps: {
        span: 20,
      },
    },
    {
      field: 'endIp',
      component: 'Input',
      label: 'end ip',
      colProps: {
        span: 20,
      },
    },
  ];

  export default defineComponent({
    components: {
      CustomModal,
      BasicForm,
    },
    emits: ['testCaseChanged', 'register'],
    setup() {
      const [
        registerBasicForm,
        { getFieldsValue: getBasicFieldsValue, resetFields: resetBasicFields },
      ] = useForm({
        labelCol: { span: 6 },
        schemas: basicSchemas,
        actionColOptions: {
          span: 14,
        },
        submitButtonOptions: {
          text: 'Save',
        },
      });

      const [registerModal, { closeModal }] = useModalInner(async (data) => {
        console.log(data);
      });

      function handleVisibleChange(v) {
        if (!v) {
          resetBasicFields();
        }
      }

      function handleSaveBasic() {
        const data = getBasicFieldsValue();
        console.log(data);
        closeModal();
      }

      return {
        registerBasicForm,
        registerModal,
        handleSaveBasic,
        handleVisibleChange,
      };
    },
  });
</script>
