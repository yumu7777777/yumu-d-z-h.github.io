<template>
  <div :class="prefixCls">
    <div class="leftContent">
      <div class="leftbody">
        <Profile />
        <Scanner />
      </div>
    </div>
    <div class="body">
      <div class="rightContent"></div>
      <div class="centerContent"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  import { defineComponent } from 'vue';
  import Profile from './profile/index.vue';
  import Scanner from './scanner/index.vue';

  export default defineComponent({
    name: 'Home',
    components: { Profile, Scanner },
    setup() {
      const { prefixCls } = useDesign('home');

      return {
        prefixCls,
      };
    },
  });
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-home';

  .@{prefix-cls} {
    position: relative;
    width: 100%;
    max-width: 1520px;
    height: 100%;
    margin: 0 auto;
    background-color: #04070c;

    .leftContent {
      position: absolute;
      z-index: 999;
      width: 455px;
      left: 0;
    }

    .rightContent {
      position: absolute;
      z-index: 999;
      width: 280px;
      right: 0;
    }

    .centerContent {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 50%;
      margin: 0 0 0 -330px;
      height: 100%;
    }
  }
</style>
