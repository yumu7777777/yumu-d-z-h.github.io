<template>
  <div ref="animationContainer" :class="prefixCls">
    <div ref="domOverlayContainer" class="dom-overlay-container">
      <div
        class="absolute top-12px w-410px left-20px text-lg font-extrabold leading-10 text-light-50/50 flex justify-between"
        v-if="showScanner"
      >
        <div>IP CAMERA SCANNER</div>
        <div></div>
      </div>
      <div class="absolute w-395px left-30px top-75px" v-if="showEarth">
        <div class="absolute w-100px !ml-2 !mt-4">
          <a
            ref="startBtn"
            v-show="!isScanning"
            href="javascript:void(0);"
            class="btn !w-90px !mt-2"
            @click="handleStartScanning"
          >
          </a>
          <a
            ref="stopBtn"
            v-show="isScanning"
            href="javascript:void(0);"
            class="btn !w-90px !mt-2"
            @click="handleStopScanning"
          >
          </a>
          <a ref="viewBtn" href="javascript:void(0);" class="btn !w-90px !mt-2"> </a>
        </div>
      </div>
    </div>
    <canvas ref="canvas" width="505" height="420"></canvas>
    <PreScanModal @register="registerPreScan" />
  </div>
</template>

<script lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  import { defineComponent, onMounted, onUnmounted, ref, nextTick } from 'vue';
  import { lib, img, ss } from './lib';
  import { AnStage, makeResponsive } from '/@/utils/adobe/AdobeAn';
  import { useBtnEffect } from '../useBtnEffect';
  import PreScanModal from './PreScanModal.vue';
  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    name: 'Scanner',
    components: { PreScanModal },
    props: {
      waitTime: {
        type: Number as PropType<number>,
        default: 0,
      },
    },
    setup(props) {
      const win: any = window as any;
      const { prefixCls } = useDesign('home-scanner');
      const animationContainer = ref<HTMLDivElement | null>(null);
      const domOverlayContainer = ref<HTMLDivElement | null>(null);
      const viewBtn = ref<HTMLDivElement | null>(null);
      const startBtn = ref<HTMLDivElement | null>(null);
      const stopBtn = ref<HTMLDivElement | null>(null);
      const canvas = ref<HTMLCanvasElement | null>(null);
      const showScanner = ref<boolean>(false);
      const showEarth = ref<boolean>(false);
      const isScanning = ref<boolean>(false);

      let exportRoot, stage, loader;

      lib.showScanner = () => {
        showScanner.value = true;
      };

      lib.showEarth = () => {
        showEarth.value = true;
        nextTick(() => {
          useBtnEffect(startBtn.value, 'start', '01');
          useBtnEffect(stopBtn.value, 'stop', '01');
          useBtnEffect(viewBtn.value, 'view', '02');
        });
      };

      const [registerPreScan, { openModal: openPreScanModal }] = useModal();

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
        exportRoot.instance.tickEnabled = false;
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

      function handleStartScanning() {
        isScanning.value = true;
        exportRoot.instance.tickEnabled = true;
        openPreScanModal(true);
      }

      function handleStopScanning() {
        isScanning.value = false;
        exportRoot.instance.tickEnabled = false;
      }

      onMounted(() => {
        win.createjs.Tween.get({})
          .wait(props.waitTime)
          .call(() => {
            loader = new win.createjs.LoadQueue(false);
            loader.addEventListener('fileload', handleFileLoad);
            loader.addEventListener('complete', handleComplete);
            loader.loadManifest(lib.properties.manifest);
          });
      });

      onUnmounted(() => {
        win.createjs.Ticker.removeEventListener('tick', stage);
      });

      return {
        prefixCls,
        animationContainer,
        domOverlayContainer,
        viewBtn,
        startBtn,
        stopBtn,
        canvas,
        showScanner,
        showEarth,
        isScanning,
        handleStartScanning,
        handleStopScanning,
        registerPreScan,
      };
    },
  });
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-home-scanner';

  .@{prefix-cls} {
    width: 505px;
    height: 420px;
    position: relative;

    canvas {
      position: absolute;
      display: block;
      background-color: transparent;
    }

    .dom-overlay-container {
      overflow: hidden;
      width: 505px;
      height: 420px;
      position: absolute;
      left: 0px;
      top: 0px;
      display: block;
      z-index: 999;
    }
  }
</style>
