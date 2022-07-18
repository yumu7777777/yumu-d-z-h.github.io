<template>
  <div :class="prefixCls">
    <div class="leftContent">
      <div class="leftbody">
        <Profile :waitTime="0" />
        <Scanner :waitTime="800" />
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

<style lang="less">
  @prefix-cls: ~'@{namespace}-home';

  .@{prefix-cls} {
    position: relative;
    width: 100%;
    max-width: 1520px;
    height: 100%;
    margin: 0 auto;
    background-color: #04070c;
    overflow: auto;

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

    .btn {
      float: left;
      position: relative;
      width: 110px;
      height: 24px;
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.5);

      &:after {
        content: ' ';
        position: absolute;
        height: calc(100% + 10px);
        width: calc(100% + 10px);
        opacity: 0;
        top: -5px;
        left: -5px;
        border: 1px solid rgba(255, 255, 255, 1);
      }

      .num {
        position: absolute;
        top: 2px;
        left: 4px;
        width: 11px;
        line-height: 15px;
        text-align: center;
        color: rgba(255, 255, 255, 0.2);
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
      }

      .name {
        display: block;
        padding: 0 0 0 25px;
        line-height: 24px;
        color: rgba(255, 255, 255, 1);
      }

      .d {
        height: 2px;
        width: 2px;
        display: inline-block;
        margin: 1px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 3px;
      }

      .light {
        position: absolute;
        height: 12px;
        right: 5px;
        bottom: 5px;
        display: block;
      }

      .lefttop:before,
      .rightbottom:before {
        content: ' ';
        height: 7px;
        width: 1px;
        position: absolute;
        display: block;
        background: rgba(255, 255, 255, 1);
      }

      .lefttop:after,
      .rightbottom:after {
        content: '';
        display: block;
        height: 1px;
        width: 7px;
        position: absolute;
        background: rgba(255, 255, 255, 1);
      }

      .rightbottom:after,
      .rightbottom:before {
        bottom: -1px;
        right: -1px;
      }

      .lefttop:after,
      .lefttop:before {
        top: -1px;
        left: -1px;
      }

      &.on {
        border: 1px solid rgba(255, 255, 255, 1);

        .light {
          .o {
            background: rgba(255, 255, 255, 1);
          }
        }

        &:after {
          opacity: 0.5;
        }

        .rightbottom:after,
        .rightbottom:before {
          bottom: -6px;
          right: -6px;
        }

        .lefttop:after,
        .lefttop:before {
          top: -6px;
          left: -6px;
        }
      }
    }
  }
</style>
