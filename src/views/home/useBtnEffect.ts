import { onUnmounted } from 'vue';
import { addClass, removeClass } from '/@/utils/domUtils';

const BTNCOLOR = ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0)'];

const win = window as any;
export function useBtnEffect(btn, name, num, showDot = true) {
  if (btn) {
    const numSpan = document.createElement('span');
    numSpan.className = 'num';
    numSpan.style.transitionDelay = '0s';
    numSpan.innerText = num;
    btn.appendChild(numSpan);

    const nameSpan = document.createElement('span');
    nameSpan.className = 'name';
    nameSpan.style.transitionDelay = '0s';
    nameSpan.innerText = name;
    btn.appendChild(nameSpan);

    const lefttopSpan = document.createElement('span');
    lefttopSpan.className = 'lefttop';
    lefttopSpan.style.transitionDelay = '0s';
    btn.appendChild(lefttopSpan);

    const rightbottomSpan = document.createElement('span');
    rightbottomSpan.className = 'rightbottom';
    rightbottomSpan.style.transitionDelay = '0s';
    btn.appendChild(rightbottomSpan);

    if (showDot) {
      const lightDiv = document.createElement('div');
      lightDiv.className = 'light';
      lightDiv.style.transitionDelay = '0s';
      btn.appendChild(lightDiv);

      for (let i = 0; i < 5; i++) {
        const dot = document.createElement('span');
        dot.className = 'd ' + (i < parseInt(num) ? 'o' : '');
        rightbottomSpan.style.transitionDelay = i < parseInt(num) ? i / 50 + 's' : '0s';
        lightDiv.appendChild(dot);
      }
    }

    btn.onmouseenter = () => {
      if (btn) {
        addClass(btn, 'on');
        win.createjs.Tween.get(btn.style)
          .to({ backgroundColor: BTNCOLOR[0] }, 100, win.createjs.Ease.easeOut)
          .to({ backgroundColor: BTNCOLOR[1] }, 100, win.createjs.Ease.easeOut)
          .to({ backgroundColor: BTNCOLOR[0] }, 100, win.createjs.Ease.easeOut)
          .to({ backgroundColor: BTNCOLOR[1] }, 100, win.createjs.Ease.easeOut)
          .to({ backgroundColor: BTNCOLOR[0] }, 80, win.createjs.Ease.easeOut)
          .to({ backgroundColor: BTNCOLOR[1] }, 80, win.createjs.Ease.easeOut);
      }
    };
    btn.onmouseleave = () => {
      if (btn) {
        removeClass(btn, 'on');
      }
    };

    onUnmounted(() => {
      btn.onmouseenter = null;
      btn.onmouseleave = null;
    });
  }
}
