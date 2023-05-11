<!--
 * @Author: chenzhongsheng
 * @Date: 2023-04-04 23:20:27
 * @Description: Coding something
-->
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { keyboardData, mac, isMobile, Map } from './keyboard-data';

const codes = reactive<string[]>([]);

const preventDefault = (e: any) => {
    e.preventDefault;
    e.returnValue = false;
    return false;
};

const history = reactive<string[]>([ '', '', '', '' ]);

function addToHistory (code: string) {
    history.unshift(code);
    history.pop();
    console.log(history);
}

const LocationMap = [ 'Normal', 'LeftMod', 'RightMod', '-' ];

function setCode ({
    code,
    which,
    key,
    type
}: any) {
    // @ts-ignore
    if (Map[code]) {
        addToHistory(code);
    }
    if (!codes.includes(code)) {
        codes.push(code);
    }
    info.Down = true;
    info.Code = code;
    info.KeyCode = which;
    info.Key = key;
    info.Type = LocationMap[type];
}

function clearCode (code = '') {
    const index = codes.indexOf(code);
    if (index !== -1) {
        codes.splice(index, 1);
    }
    if (codes.length === 0) info.Down = false;

    // console.log(codes.length);
}
window.addEventListener('keydown', e => {
    const { code, which } = e;
    // console.log('keydown', code);
    setCode({
        code,
        which,
        key: e.key === ' ' ? ' ' : e.key, // '█'
        type: e.location
    });
    return preventDefault(e);
});
window.addEventListener('keyup', e => {
    const { code } = e;
    // console.log('keyup', code);
    clearCode(code);
    return preventDefault(e);
});

function initScale () {
    const container = document.getElementById('container');
    if (!container) return;

    const { offsetHeight, offsetWidth } = container;

    const iw = window.innerWidth;
    const ih = window.innerHeight;

    const needRotate = (isMobile && iw < ih);

    const w = needRotate ? ih : iw;
    const h = needRotate ? iw : ih;
    const rotate = needRotate ? 90 : 0;


    const rateW = w / (offsetWidth + 50);
    const rateH = h / (offsetHeight + 50);


    let scale = Math.min(rateW, rateH);
    if (scale > 1) scale = 1;

    container.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg)`;
}
let timer: any = null;
window.addEventListener('resize', () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
        initScale();
    }, 200);
});

onMounted(() => {
    setTimeout(() => {
        initScale();
    }, 200);
});

const info = reactive({
    Down: false,
    Code: '-',
    Type: '-',
    KeyCode: '-',
    Key: '-',
});

function openGithub () {
    window.open('https://github.com/theajack/keyboard');
}

function fillInfo (code = '') {
    if (code === 'SwitchMac') {
        return switchOS();
    }
    // @ts-ignore
    const { kc, k, l } = Map[code] || { kc: '-', k: '-', l: 3 };
    setCode({
        code,
        which: kc,
        key: k,
        type: l,
    });
}

function mouseDown (code?: string) {
    if (isMobile) return;
    // console.log('mouseDown');
    fillInfo(code);
}
function mouseUp (code?: string) {
    if (isMobile) return;
    clearCode(code);
}
function touchStart (code?: string) {
    // console.log('touchStart', code);
    fillInfo(code);
}
function touchEnd (code?: string) {
    // console.log('touchEnd', code);
    clearCode(code);
}

function switchOS () {
    const os = mac ? 'win' : 'mac';
    location.href = `https://shiyix.cn/keyboard/?os=${os}`;
}

</script>

<template>
  <div id="container" class="container" :class="{'is-pc': !isMobile}">
    <div class="title">Nothing But A Funny KeyBoard</div>
    <div class="display">
      <div class="key d-item" :class="{down: info.Down}">
        <div class="d-title">Code</div>
        <div class="d-text">{{ info.Code || 'None' }}</div>
      </div>
      <div class="key d-item" :class="{down: info.Down}">
        <div class="d-title">KeyCode</div>
        <div class="d-text">{{ info.KeyCode }}</div>
      </div>
      <div class="key d-item" :class="{down: info.Down}">
        <div class="d-title">Key</div>
        <div class="d-text">{{ info.Key }}</div>
      </div>
      <div class="key d-item" :class="{down: info.Down}">
        <div class="d-title">Type</div>
        <div class="d-text">{{ info.Type }}</div>
      </div>
    </div>
    <div class="history">
      <div v-for="(code,index) in history" :key="index" class="h-item" :class="{key:!!code}">{{ code }}</div>
    </div>
    <div class="keyboard" :class="{mac: mac}">
      <div v-for="(keys, index) in keyboardData" :key="index" class="key-line">
        <div
          v-for="key in keys"
          :key="key.n"
          class="key-wrap"
          @mousedown="mouseDown(key.c)"
          @mouseup="mouseUp(key.c)"
          @touchstart="touchStart(key.c)"
          @touchend="touchEnd(key.c)"
        >
          <div v-if="mac && key.c === 'ArrowDown'">
            <div
              class="key key-btn half" :class="{
                'down': codes.includes('ArrowUp'),
              }"
              :style="{'bottom': 'auto', top: 0}"
            >
              ↑
            </div>
          </div>
          <div v-if="mac && key.gh">
            <div
              class="key key-btn half" :class="{
                'down': codes.includes('ArrowUp'),
              }"
              :style="{'bottom': 'auto', top: 0}"
              @click="switchOS"
            >
              Win
            </div>
          </div>
          <div
            class="key key-btn" :class="{
              'two-line': key.tw,
              'down': codes.includes(key.c),
              'half': key.half,
              'bottom': key.hb,
            }"
            :style="{'margin-right': key.mr+'px', width: key.w+'px'}"
          >
            <div v-if="key.sn && mac" class="sub">{{ key.sn }}</div>
            {{ key.n }}
            <div v-if="key.sn && !mac" class="sub">{{ key.sn }}</div>
            <svg v-if="key.gh" class="github" :style="{width:mac?'18px':'26px'}" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" @click="openGithub">
              <path
                id="right" fill="#333"
                d="M 8 3.86 C 8.7 3.86 9.38 3.95 10 4.13 C 11.55 3.09 12.22 3.31 12.22 3.31 C 12.66 4.41 12.38 5.23 12.3 5.43 C 12.81 6 13.12 6.7 13.12 7.58 C 13.12 10.65 11.25 11.33 9.47 11.53 C 9.76 11.78 10 12.26 10 13 C 10 14.08 10 14.94 10 15.21 C 10 15.42 10.15 15.67 10.55 15.59 C 13.806 14.491 16 11.437 16 8 C 16 3.58 12.42 0 8 0 Z"
              />
              <use href="#right" x="-16" style="transform: scaleX(-1);" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .white-shadow{
      color: #fff;
      text-shadow: 1px 1px 3px var(--black), 2px 2px 0 var(--black), 3px 3px 0 var(--black), 4px 4px 0 var(--black),
      -1px -1px 3px var(--white),
          1px 1px 0 var(--text-border),
          -1px 1px 0 var(--text-border),
          1px -1px 0 var(--text-border),
          -1px -1px 0 var(--text-border);
      font-weight: bold;
  }
  .container{
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      transition: transform .2s ease-out;
  }
  .title{
    text-align: center;
    font-size: 30px;
    margin-bottom: 50px;
    .white-shadow;
    // text-shadow: 1px 1px 1px var(--black),
    //     -1px -1px 1px var(--white),
    //     2px 2px 2px var(--black2),
    //     -2px -2px 2px var(--white);
  }
  .display{
      display: flex;
      gap: 30px;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      .d-item{
        flex-direction: column;
        gap: 20px;
        .d-title{
          .white-shadow;
          font-size: 18px;
        }
        .d-text{
        }
      }
  }
  .history{
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
    height: 30px;
    .h-item{
      height: 30px;
      width: 100px;
    }
    .key:first-child{
      // transform: scale(1.1);
      background-color: #fff;
    }
  }
  .keyboard{
      --offset: 4px;
      --n-offset: -4px;
      --width: 5px;
      padding: 30px;
      // background-color: #e8e8e8;
      border-radius: 10px;
      position: relative;
      box-shadow: inset var(--offset) var(--offset) var(--width) var(--black),
      inset var(--n-offset) var(--n-offset) var(--width) var(--white);
      .key-line{
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
          .key-wrap{
            position: relative;
            min-width: 50px;
          }
          .key-btn{
              width: 50px;
              height: 50px;
              font-weight: bold;
              flex-direction: column;
              font-size: 15px;
              .white-shadow;
              &.two-line{
                  position: absolute;
                  height: 110px;
              }
              .sub{
                  font-weight: normal;
                  font-size: 14px;
              }
              &.disable{
                background-color: #ddd;
              }
              &.half {
                position: absolute;
                height: 24px;
                bottom: 0;
              }
              &.half.bottom {
                box-shadow: var(--offset) var(--offset) var(--width) var(--black),
                var(--n-offset) 5px var(--width) var(--white);
              }
              .github{
                border-radius: 50%;
                box-shadow: var(--offset) var(--offset) var(--width) var(--black),
                  var(--n-offset) var(--n-offset) var(--width) var(--white);
              }
          }
      }
      .key-line:first-child{
          margin-bottom: 20px;
      }
      &.mac{
        .key-line:first-child{
            margin-bottom: 10px;
        }
      }
  }
</style>