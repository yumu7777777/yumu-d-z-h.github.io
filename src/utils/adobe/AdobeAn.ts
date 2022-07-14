export const bootcompsLoaded: string[] = [];

export const compositions = {};

const bootstrapListeners: Function[] = [];

export const bootstrapCallback = (fnCallback: Function) => {
  bootstrapListeners.push(fnCallback);
  if (bootcompsLoaded.length > 0) {
    for (let i = 0; i < bootcompsLoaded.length; ++i) {
      fnCallback(bootcompsLoaded[i]);
    }
  }
};

export const getComposition = (id: string) => {
  return compositions[id];
};

export const compositionLoaded = (id: string) => {
  bootcompsLoaded.push(id);
  for (let j = 0; j < bootstrapListeners.length; j++) {
    bootstrapListeners[j](id);
  }
};

export const handleSoundStreamOnTick = (stage, event) => {
  if (!event.paused) {
    const stageChild = stage.getChildAt(0);
    if (!stageChild.paused || stageChild.ignorePause) {
      stageChild.syncStreamSounds();
    }
  }
};

export const makeResponsive = (stage, lib, isResp, respDim, isScale, scaleType, domContainers) => {
  let lastW;
  let lastH;
  let lastS = 1;
  const resizeCanvas = () => {
    const w = lib.properties.width;
    const h = lib.properties.height;
    const iw = window.innerWidth;
    const ih = window.innerHeight;
    const pRatio = window.devicePixelRatio || 1;
    const xRatio = iw / w;
    const yRatio = ih / h;
    let sRatio = 1;
    if (isResp) {
      if ((respDim === 'width' && lastW === iw) || (respDim === 'height' && lastH === ih)) {
        sRatio = lastS;
      } else if (!isScale) {
        if (iw < w || ih < h) {
          sRatio = Math.min(xRatio, yRatio);
        }
      } else if (scaleType === 1) {
        sRatio = Math.min(xRatio, yRatio);
      } else if (scaleType === 2) {
        sRatio = Math.max(xRatio, yRatio);
      }
    }
    domContainers[0].width = w * pRatio * sRatio;
    domContainers[0].height = h * pRatio * sRatio;
    domContainers.forEach((container) => {
      container.style.width = w * sRatio + 'px';
      container.style.height = h * sRatio + 'px';
    });
    stage.scaleX = pRatio * sRatio;
    stage.scaleY = pRatio * sRatio;
    lastW = iw;
    lastH = ih;
    lastS = sRatio;
    stage.tickOnUpdate = false;
    stage.update();
    stage.tickOnUpdate = true;
  };
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
};

const cjs = (window as any).createjs;

export function AnMovieClip() {
  this.actionFrames = [];
  this.ignorePause = false;
  this.gotoAndPlay = function (positionOrLabel) {
    cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
  };
  this.play = function () {
    cjs.MovieClip.prototype.play.call(this);
  };
  this.gotoAndStop = function (positionOrLabel) {
    cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
  };
  this.stop = function () {
    cjs.MovieClip.prototype.stop.call(this);
  };
}
AnMovieClip.prototype = new cjs.MovieClip();

export function AnStage(canvas, fps = 24) {
  cjs.Stage.call(this, canvas);
  this.fps = fps;
}
const p = new cjs.Stage();
AnStage.prototype = p;
p.setAutoPlay = function (autoPlay) {
  this.tickEnabled = autoPlay;
};
p.play = function () {
  this.tickEnabled = true;
  this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
};

p.stop = function (ms) {
  if (ms) this.seek(ms);
  this.tickEnabled = false;
};

p.seek = function (ms) {
  this.tickEnabled = true;
  this.getChildAt(0).gotoAndStop((this.fps * ms) / 1000);
};

p.getDuration = function () {
  return (this.getChildAt(0).totalFrames / this.fps) * 1000;
};

p.getTimelinePosition = function () {
  return (this.getChildAt(0).currentFrame / this.fps) * 1000;
};
