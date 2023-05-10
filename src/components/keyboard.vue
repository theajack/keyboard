<!--
 * @Author: chenzhongsheng
 * @Date: 2023-04-04 23:20:27
 * @Description: Coding something
-->
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { keyboardData } from './keyboard-data';

const codes = reactive<string[]>([]);

const preventDefault = (e: any) => {
    e.preventDefault;
    e.returnValue = false;
    return false;
};

window.addEventListener('keydown', e => {
    const { code, which } = e;
    console.log(code, which);

    if (!codes.includes(code)) {
        codes.push(code);
    }
    return preventDefault(e);
});
window.addEventListener('keyup', e => {
    const { code, which } = e;
    const index = codes.indexOf(code);
    if (index !== -1) {
        codes.splice(index, 1);
    }
    return preventDefault(e);
});
</script>

<template>
  <div>
    <div class="display">
      <div class="key">1</div>
      <div class="key">KeyA</div>
      <div class="key">KeyA</div>
    </div>
    <div class="keyboard">
      <div v-for="(keys, index) in keyboardData" :key="index" class="key-line">
        <div
          v-for="key in keys"
          :key="key.n"
          style="positoin: relative"
        >
          <div
            class="key key-btn" :class="{'two-line': key.tw, 'down': codes.includes(key.c)}"
            :style="{'margin-right': key.mr+'px', width: key.w+'px'}"
          >
            {{ key.n }}
            <div v-if="key.sn" class="sub">{{ key.sn }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
    .display{
        display: flex;
        gap: 30px;
    }
    .keyboard{
        position: fixed;
        left: 50%;
        bottom: 50px;
        transform: translateX(-50%);
        --offset: 4px;
        --n-offset: -4px;
        --width: 5px;
        padding: 30px;
        // background-color: #e8e8e8;
        border-radius: 15px;
        box-shadow: inset var(--offset) var(--offset) var(--width) var(--black),
        inset var(--n-offset) var(--n-offset) var(--width) var(--white);
        .key-line{
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
            .key-btn{
                width: 50px;
                height: 50px;
                font-weight: bold;
                flex-direction: column;
                font-size: 14px;
                &.two-line{
                    position: absolute;
                    height: 110px;
                }
                .sub{
                    font-weight: normal;
                    font-size: 12px;
                }
            }
        }
        .key-line:first-child{
            margin-bottom: 20px;
        }
    }
</style>