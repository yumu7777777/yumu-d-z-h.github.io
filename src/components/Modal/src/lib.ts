import { AnMovieClip } from '/@/utils/adobe/AdobeAn';

const cjs = (window as any).createjs;

export const lib: any = {
  ssMetadata: [],
  properties: {
    id: '50757CAEC23B45C4919CC07B3B10538A',
    width: 620,
    height: 454,
    fps: 24,
    color: '#000000',
    opacity: 1.0,
    manifest: [],
    preloads: [],
  },
  showContent: function () {},
};

// symbols:
// stage content:
const p = new AnMovieClip();
(lib.modal = function (mode, startPosition, loop, reversed) {
  if (loop == null) {
    loop = false;
  }
  if (reversed == null) {
    reversed = false;
  }
  const props: any = new Object();
  props.mode = mode;
  props.startPosition = startPosition;
  props.labels = {};
  props.loop = loop;
  props.reversed = reversed;
  cjs.MovieClip.apply(this, [props]);
  // scanning_header
  this.shape = new cjs.Shape();
  this.shape.graphics
    .f('rgba(255,255,255,0.298)')
    .s()
    .p('AJ9APIAAgTIAAgKIEWAAIAAAKIAAATgAuSAPIAAgKIAAgTINfAAIAAAKIAAATg');
  this.shape.setTransform(111.525, 66.5);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics
    .f('rgba(255,255,255,0.098)')
    .s()
    .p('AfzAPIAAgTMg3PAAAIAAgKMA+AAAAIAAAdgA70gEImXAAIkYAAIAAgKIKwAAIAAAKg');
  this.shape_1.setTransform(353.175, 66.5);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 9)
      .to({ state: [] }, 2)
      .to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 3)
      .to({ state: [] }, 2)
      .to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 2)
      .call(lib.showContent)
      .wait(17),
  );
  // scanning_bg
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f('rgba(255,255,255,0.047)').s().p('EgtTAGQIAAsfMBanAAAIAAL2IibApg');
  this.shape_2.setTransform(310, 104.35);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f('rgba(255,255,255,0.047)').s().p('EgtTAPFIAA+JMBanAAAIAAclIibBkg');
  this.shape_3.setTransform(310, 159.65);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f('rgba(255,255,255,0.047)').s().p('EgtTAc6MAAAg5zMBanAAAMAAAA2zIicDAg');
  this.shape_4.setTransform(310.1, 250.15);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_2 }] }, 9)
      .to({ state: [{ t: this.shape_3 }] }, 2)
      .to({ state: [{ t: this.shape_4 }] }, 2)
      .wait(22),
  );
  // header
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f('#F8F9FB').s().p('EArwAAZIAAgxIDIAAIAAAxgEgu3AAUIAAgsIOYAAIAAAsg');
  this.shape_5.setTransform(305, 7.5);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f('#F8F9FB').s().p('EAq+AAZIAAgxIEsAAIAAAxgEgvpAAUIAAgsIR5AAIAAAsg');
  this.shape_6.setTransform(310, 7.5);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics
    .f('rgba(255,255,255,0.298)')
    .s()
    .p(
      'EgvoACwIgDgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAktIAKAAIAAEqMBcAAAAIDGiBIAAilIAJAAIAACnQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAABIjICCIgEACgA9zikIAAgKMBI1AAAIAAAKg',
    );
  this.shape_7.setTransform(310.35, 22.55);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics
    .f('#F8F9FB')
    .s()
    .p('EAvkAAZIkiAAIAAgnIAAgKIErAAIAAAxgEgviAAUIgKAAIAAgsIR5AAIAAAKIAAAig');
  this.shape_8.setTransform(310.35, 7.5);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics
    .f('rgba(255,255,255,0.298)')
    .s()
    .p(
      'EgvoAD/QAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAAnLIAKAAIAAHGMBcAAAAIDGjFIAAj8IAJAAIAAD+QAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIjIDJQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAgA9zj0IAAgKMBI1AAAIAAAKg',
    );
  this.shape_9.setTransform(310.35, 30.5);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_5 }] }, 2)
      .to({ state: [{ t: this.shape_6 }] }, 2)
      .to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }] }, 2)
      .to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }] }, 2)
      .wait(27),
  );
  // bg_line
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics
    .f()
    .s('rgba(255,255,255,0.098)')
    .ss(1, 1, 1)
    .p('EgutghnMBdbAAAMAAABAHIieDIMha9AAAg');
  this.shape_10.setTransform(309.025, 230.2);
  this.shape_10._off = true;
  this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(8).to({ _off: false }, 0).wait(27));
  this._renderFirstFrame();
}).prototype = p;
p.nominalBounds = new cjs.Rectangle(0, 0, 615.7, 446.4);
