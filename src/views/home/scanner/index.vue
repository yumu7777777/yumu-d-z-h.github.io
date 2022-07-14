<template>
  <div ref="animationContainer" :class="prefixCls">
    <canvas ref="canvas" width="505" height="420"></canvas>
    <div ref="domOverlayContainer" class="dom-overlay-container">
      <div
        class="relative top-12px w-410px left-20px text-lg font-extrabold leading-10 text-light-50/50 flex justify-between"
        v-if="showScanner"
      >
        <div>IP CAMERA SCANNER</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
  import { lib, img, ss } from './lib';
  import { AnStage, makeResponsive } from '/@/utils/adobe/AdobeAn';

  export default defineComponent({
    name: 'Profile',
    setup() {
      const win: any = window as any;
      const { prefixCls } = useDesign('home-scanner');
      const animationContainer = ref<HTMLDivElement | null>(null);
      const domOverlayContainer = ref<HTMLDivElement | null>(null);
      const canvas = ref<HTMLCanvasElement | null>(null);
      const showScanner = ref<boolean>(false);

      let exportRoot, stage, loader;

      lib.showScanner = () => {
        showScanner.value = true;
      };

      function handleFileLoad(evt) {
        if (evt && evt.item.type === 'image') {
          img[evt.item.id] = evt.result;
        }
      }

      function handleComplete(evt) {
        const queue = evt.target;
        const ssMetadata = lib.ssMetadata;
        for (let i = 0; i < ssMetadata.length; i++) {
          ss[ssMetadata[i].name] = new win.createjs.SpriteSheet({
            images: [queue.getResult(ssMetadata[i].name)],
            frames: ssMetadata[i].frames,
          });
        }
        exportRoot = new lib.ipCameraScanner();
        stage = new AnStage(canvas.value);
        makeResponsive(stage, lib, false, 'both', false, 1, [
          canvas.value,
          animationContainer.value,
          domOverlayContainer.value,
        ]);
        stage.addChild(exportRoot);
        win.createjs.Ticker.framerate = lib.properties.fps;
        win.createjs.Ticker.addEventListener('tick', stage);
      }

      onMounted(() => {
        loader = new win.createjs.LoadQueue(false);
        loader.addEventListener('fileload', handleFileLoad);
        loader.addEventListener('complete', handleComplete);
        loader.loadManifest(lib.properties.manifest);
      });

      onUnmounted(() => {
        win.createjs.Ticker.removeEventListener('tick', stage);
      });

      return {
        prefixCls,
        animationContainer,
        domOverlayContainer,
        canvas,
        showScanner,
      };
    },
  });
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-home-scanner';

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
  }
</style>
