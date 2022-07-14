import { AnMovieClip } from '/@/utils/adobe/AdobeAn';

const cjs = (window as any).createjs;

export const lib: any = {
  ssMetadata: [],
  properties: {
    id: '50757CAEC23B45C4919CC07B3B10538A',
    width: 455,
    height: 420,
    fps: 24,
    color: '#000000',
    opacity: 0.0,
    manifest: [],
    preloads: [],
  },
  showAvatar: function () {},
  showProfile: function () {},
  showNickName: function () {},
  showProfession: function () {},
};

const p = new AnMovieClip();
(lib.profile = function (mode, startPosition, loop, reversed) {
  if (loop == null) {
    loop = false;
  }
  if (reversed == null) {
    reversed = false;
  }
  const props: any = {};
  props.mode = mode;
  props.startPosition = startPosition;
  props.labels = {};
  props.loop = loop;
  props.reversed = reversed;
  cjs.MovieClip.apply(this, [props]);
  // 图层_5_复制_复制
  this.shape = new cjs.Shape();
  this.shape.graphics
    .f('rgba(255,255,255,0.298)')
    .s()
    .p('AG6APIAAgTIAAgKIDCAAIAAAdgApxAPIgKAAIAAgKIAAgTIJYAAIAAAKIAAATg');
  this.shape.setTransform(89.4, 256.5);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics
    .f('rgba(255,255,255,0.098)')
    .s()
    .p(
      'AuoCkIkbAAIsWAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAkkIAKAAIAACIIAAAhIAAB2IMRAAIEbAAIBMAAIB2hzIAAisIAAgeMArFAAAIAAAeIktAAIAAgUMgmOAAAIAADCQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIh4B1QAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAgAuoiZIkbAAIjDAAIAAgKIHeAAIAAAKg',
    );
  this.shape_1.setTransform(227.3, 271.375);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 18)
      .to({ state: [] }, 2)
      .to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 2)
      .wait(3),
  );
  // 图层_7_复制_复制
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f('rgba(255,255,255,0.047)').s().p('A/FImIAAxLMA+LAAAIAAOgIjLCrg');
  this.shape_2.setTransform(229.8, 314.975);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f('rgba(255,255,255,0.047)').s().p('A/FKKIAA0TMA+LAAAIAARJIjLDKg');
  this.shape_3.setTransform(229.8, 324.975);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_2 }] }, 16)
      .to({ state: [{ t: this.shape_3 }] }, 2)
      .call(lib.showNickName)
      .wait(7),
  );
  // 图层_5_复制
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics
    .f('rgba(255,255,255,0.298)')
    .s()
    .p('AG7APIAAgTIAAgKIDBAAIAAAdgApxAPIgKAAIAAgKIAAgTIJYAAIAAAKIAAATg');
  this.shape_4.setTransform(293.6, 161.5);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics
    .f('rgba(255,255,255,0.098)')
    .s()
    .p(
      'ABOCkIkaAAIsWAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAkkIAKAAIAACIIAAAhIAAB2IMRAAIEaAAIBMAAIB2hzIAAisIAAgeILYAAIAAAeIktAAIAAgUImhAAIAADCQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIh4B1QAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAgABOiZIkaAAIjDAAIAAgKIHeAAIAAAKg',
    );
  this.shape_5.setTransform(330, 176.375);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] }, 20)
      .wait(5),
  );
  // 图层_7_复制
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f('rgba(255,255,255,0.047)').s().p('AvOETIAAolIedAAIAAGRIjLCUg');
  this.shape_6.setTransform(332.5, 192.5);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f('rgba(255,255,255,0.047)').s().p('AvOF3IAArtIedAAIAAIjIjLDKg');
  this.shape_7.setTransform(332.5, 202.5);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_6 }] }, 14)
      .to({ state: [{ t: this.shape_7 }] }, 2)
      .to({ state: [{ t: this.shape_7 }] }, 2)
      .call(lib.showProfession)
      .wait(7),
  );
  // 图层_5
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics
    .f('rgba(255,255,255,0.298)')
    .s()
    .p('AG7APIAAgTIAAgKIDBAAIAAAdgApxAPIgKAAIAAgKIAAgTIJYAAIAAAKIAAATg');
  this.shape_8.setTransform(293.6, 71.5);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics
    .f('rgba(255,255,255,0.098)')
    .s()
    .p(
      'ABOCkIkaAAIsWAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAkkIAKAAIAACIIAAAhIAAB2IMRAAIEaAAIBMAAIB2hzIAAisIAAgeILYAAIAAAeIktAAIAAgUImhAAIAADCQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIh4B1QAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAgABOiZIkaAAIjDAAIAAgKIHeAAIAAAKg',
    );
  this.shape_9.setTransform(330, 86.375);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }] }, 18)
      .wait(7),
  );
  // 图层_7
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f('rgba(255,255,255,0.047)').s().p('AvODhIAAnBIedAAIAAFHIjLB6g');
  this.shape_10.setTransform(332.5, 96.75);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f('rgba(255,255,255,0.047)').s().p('AvOFFIAAqJIedAAIAAHaIjLCvg');
  this.shape_11.setTransform(332.5, 107.5);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f('rgba(255,255,255,0.047)').s().p('AvOF3IAArtIedAAIAAIjIjLDKg');
  this.shape_12.setTransform(332.5, 112.5);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_10 }] }, 10)
      .to({ state: [{ t: this.shape_11 }] }, 2)
      .to({ state: [{ t: this.shape_12 }] }, 2)
      .to({ state: [{ t: this.shape_12 }] }, 2)
      .to({ state: [{ t: this.shape_12 }] }, 2)
      .wait(7),
  );
  // profile
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f('#F8F9FB').s().p('Ae3AZIAAgxIDIAAIAAAxgEgh+AAUIAAgsIOYAAIAAAsg');
  this.shape_13.setTransform(222.5, 7.5);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f('#F8F9FB').s().p('AeFAZIAAgxIEsAAIAAAxgEgiwAAUIAAgsIR5AAIAAAsg');
  this.shape_14.setTransform(227.5, 7.5);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics
    .f('rgba(255,255,255,0.298)')
    .s()
    .p(
      'EgirACbIgEgBIgBgCIAAkFIAKAAIAAEDMBCIAAAIDFhqIAAiUIAKAAIAACVQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABIjIBqIgDABgAw3iQIAAgKMAu8AAAIAAAKg',
    );
  this.shape_15.setTransform(227.5, 20.5);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics
    .f('#F8F9FB')
    .s()
    .p('EAinAAZIkiAAIAAgnIAAgKIEsAAIAAAxgEgimAAUIgKAAIAAgsIR5AAIAAAKIAAAig');
  this.shape_16.setTransform(227.5, 7.5);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics
    .f('rgba(255,255,255,0.298)')
    .s()
    .p(
      'EgirAD/QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAnLIAKAAIAAHGMBCIAAAIDFjFIAAj8IAKAAIAAD+QAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIjIDJQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAgAw3j0IAAgKMAu8AAAIAAAKg',
    );
  this.shape_17.setTransform(227.5, 30.5);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_13 }] }, 2)
      .to({ state: [{ t: this.shape_14 }] }, 2)
      .to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }] }, 2)
      .to({ state: [{ t: this.shape_17 }, { t: this.shape_16 }] }, 2)
      .call(lib.showProfile)
      .wait(17),
  );
  // avatar_bg
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f('rgba(255,255,255,0.047)').s().p('Au1I/IAAx9IdrAAIAAP1IjICIg');
  this.shape_18.setTransform(120.8, 126.7);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f('rgba(255,255,255,0.047)').s().p('Au1LpIAA3RIdrAAIAAUhIjICwg');
  this.shape_19.setTransform(120.8, 145.7);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f('rgba(255,255,255,0.047)').s().p('Au1NNIAA6ZIdrAAIAAXRIjIDIg');
  this.shape_20.setTransform(120.8, 155.7);
  this.timeline.addTween(
    cjs.Tween.get({})
      .to({ state: [] })
      .to({ state: [{ t: this.shape_18 }] }, 10)
      .to({ state: [{ t: this.shape_19 }] }, 2)
      .to({ state: [{ t: this.shape_20 }] }, 2)
      .to({ state: [{ t: this.shape_20 }] }, 2)
      .to({ state: [{ t: this.shape_20 }] }, 2)
      .call(lib.showAvatar)
      .wait(7),
  );
  // bg_line
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics
    .f()
    .s('rgba(255,255,255,0.098)')
    .ss(1, 1, 1)
    .p('EghlgeiMBDLAAAMAAAA59IifDIMhAsAAAg');
  this.shape_21.setTransform(225, 210.525);
  this.shape_21._off = true;
  this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(8).to({ _off: false }, 0).wait(17));
  this._renderFirstFrame();
}).prototype = p;

p.nominalBounds = new cjs.Rectangle(0, 0, 450, 407.1);
