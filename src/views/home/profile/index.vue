<template>
  <div ref="animationContainer" :class="prefixCls">
    <canvas ref="canvas" width="505" height="420"></canvas>
    <div ref="domOverlayContainer" class="dom-overlay-container">
      <div
        class="relative top-12px w-410px left-20px text-lg font-extrabold leading-10 text-light-50/50 flex justify-between"
        v-if="showProfile"
      >
        <div>MY PROFILE</div>
        <div>
          <section class="clock">
            <div
              class="digit"
              v-for="index in clockDigitNum"
              :key="'digit' + index"
              :id="'digit' + index"
            >
              <div
                class="cell"
                v-for="index1 in clockcellNum"
                :id="'cell' + ((index - 1) * clockcellNum + (index1 - 1))"
                :key="'cell' + ((index - 1) * clockcellNum + (index1 - 1))"
                :ref="setClockCellRefs((index - 1) * clockcellNum + (index1 - 1))"
              ></div>
            </div>
          </section>
        </div>
      </div>
      <div class="absolute top-68px left-24px w-195px h-175px">
        <div ref="avatarContainer" id="screen" v-if="showAvatar"></div>
      </div>
      <div class="absolute top-76px left-240px" v-if="showNickName">
        <div class="text-light-50/50">NICK NAME</div>
        <div class="text-lg text-light-50/80 mt-3 ml-2">Deng Zhongheng</div>
      </div>
      <div class="absolute top-167px left-240px" v-if="showProfession">
        <div class="text-light-50/50">PROFESSION</div>
        <div class="text-lg text-light-50/80 mt-3 ml-2">Front-end Engineer</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  import { defineComponent, nextTick, onMounted, onUnmounted, ref } from 'vue';
  import { lib } from './lib';
  import { AnStage, makeResponsive } from '/@/utils/adobe/AdobeAn';
  import { useRefs } from '/@/hooks/core/useRefs';
  import { ScreenEffect } from './ScreenEffect';
  import { getClockNumberMatrix } from './Clock';
  import { addClass, removeClass } from '/@/utils/domUtils';

  export default defineComponent({
    name: 'Profile',
    setup() {
      const win: any = window as any;
      const { prefixCls } = useDesign('home-profile');
      const [clockCellRefs, setClockCellRefs] = useRefs();
      const animationContainer = ref<HTMLDivElement | null>(null);
      const domOverlayContainer = ref<HTMLDivElement | null>(null);
      const avatarContainer = ref<HTMLDivElement | null>(null);
      const canvas = ref<HTMLCanvasElement | null>(null);
      const showProfile = ref<boolean>(false);
      const showAvatar = ref<boolean>(false);
      const showNickName = ref<boolean>(false);
      const showProfession = ref<boolean>(false);

      let renderClockIInterval: any = null;

      lib.showProfile = () => {
        showProfile.value = true;
        nextTick(() => {
          renderClockIInterval = window.setInterval(renderClock, 1000);
        });
      };

      lib.showNickName = () => {
        showNickName.value = true;
      };

      lib.showProfession = () => {
        showProfession.value = true;
      };

      lib.showAvatar = () => {
        showAvatar.value = true;
        nextTick(() => {
          if (avatarContainer.value) {
            const avatarEffect = new ScreenEffect(avatarContainer.value, {});
            for (const prop in config.effects) {
              if (!!config.effects[prop].enabled) {
                avatarEffect.add(prop, config.effects[prop].options);
              }
            }
          }
        });
      };

      const config = {
        effects: {
          roll: {
            enabled: false,
            options: {
              speed: 1000,
            },
          },
          image: {
            enabled: true,
            options: {
              src: '/resource/img/header.png',
              blur: 1.2,
            },
          },
          vignette: { enabled: true },
          scanlines: { enabled: true },
          vcr: {
            enabled: true,
            options: {
              opacity: 1,
              miny: 220,
              miny2: 220,
              num: 70,
              fps: 60,
            },
          },
          wobbley: { enabled: true },
          snow: {
            enabled: true,
            options: {
              opacity: 0.2,
            },
          },
        },
      };

      const clockDigitNum = 8;
      const clockcellNum = 28;

      function renderClock() {
        var date = new Date();
        var hours, minutes, seconds;

        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        if (hours.toString().length === 1) hours = '0' + hours;
        if (minutes.toString().length === 1) minutes = '0' + minutes;
        if (seconds.toString().length === 1) seconds = '0' + seconds;

        const str = `${hours}:${minutes}:${seconds}`;
        for (let i = 0; i < str.length; i++) {
          const martix = getClockNumberMatrix(str.charAt(i));
          for (let j = 0; j < martix.length; j++) {
            const cell = clockCellRefs.value[i * martix.length + j];
            if (cell) {
              martix[j] ? addClass(cell, 'on') : removeClass(cell, 'on');
            }
          }
        }
      }

      let exportRoot, stage;
      onMounted(() => {
        exportRoot = new lib.profile();
        stage = new AnStage(canvas.value);
        makeResponsive(stage, lib, false, 'both', false, 1, [
          canvas.value,
          animationContainer.value,
          domOverlayContainer.value,
        ]);
        stage.addChild(exportRoot);
        win.createjs.Ticker.framerate = lib.properties.fps;
        win.createjs.Ticker.addEventListener('tick', stage);
      });

      onUnmounted(() => {
        if (renderClockIInterval) {
          window.clearInterval(renderClockIInterval);
        }
      });

      return {
        prefixCls,
        setClockCellRefs,
        animationContainer,
        domOverlayContainer,
        avatarContainer,
        canvas,
        showProfile,
        showAvatar,
        showNickName,
        showProfession,
        clockDigitNum,
        clockcellNum,
      };
    },
  });
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-home-profile';

  .@{prefix-cls} {
    width: 505px;
    height: 420px;

    canvas {
      position: absolute;
      display: block;
      background-color: transparent;
    }

    .dom-overlay-container {
      pointer-events: none;
      overflow: hidden;
      width: 505px;
      height: 420px;
      position: relative;
      left: 0px;
      top: 0px;
      display: block;
    }

    #screen {
      width: 190px;
      height: 169px;
      background: transparent linear-gradient(to bottom, #85908c 0%, #323431 100%) repeat scroll 0 0;
      background-size: cover;
    }

    .clock {
      font-size: 0;
      text-align: center;
      margin-top: 7px;

      .digit {
        display: inline-block;
        width: 8px;
        margin: 1px;
        transform: skewX(-2deg);
        line-height: 0px;

        &#digit-2 .cell {
          transition: opacity 50ms ease;
        }

        &#digit-3 .cell,
        &#digit-4 .cell,
        &#digit-5 .cell,
        &#digit-6 .cell,
        &#digit-7 .cell,
        &#digit-8 .cell,
        &#digit-9 .cell,
        &#digit-10 .cell,
        &#digit-11 .cell {
          transition: opacity 100ms ease;
        }

        .cell {
          width: 1px;
          height: 1px;
          margin: 0.5px;
          background-color: white;
          border-radius: 2px;
          display: inline-block;
          opacity: 0.2;

          &.on {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
