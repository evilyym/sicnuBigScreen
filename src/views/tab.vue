<template>
  <div class="tabBox">
    <div class="tabTitle">
      <div :class="{ 'isSelected': i.index == arrIsSel.title }" v-for="i in arr"
        @click="arrIsSel.title = i.index; arrIsSel.content = 0">{{ i.name }}</div>
    </div>
    <div class="tabCharts">
      <div class="chartsTitle">
        <div class="chartsTitleText">{{ arr[arrIsSel.title].text }} </div>
        <div class="chartsTitleBtn">
          <span :class="{ 'isSelected': j.index == arrIsSel.content }" v-for="j in arr[arrIsSel.title].list"
            @click="arrIsSel.content = j.index">{{ j.name }}</span>
        </div>
      </div>
      <div class="chartsContent">
        <div v-for="(itme,index) in arr[arrIsSel.title].list[arrIsSel.content].list" style="margin-top: 12px;">
          <div class="chartsContentSerial">{{ index + 1 }}</div>
          <div class="chartsContentText">{{ itme.name }}</div>
          <div class="chartsContentBar">
            <div :style="{ width: itme.balance / 20 + '%' }"></div>
          </div>
          <div class="chartsContentVal">{{ itme.balance }}人</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, watch } from "vue";
import array from "../arrTab"

const arr = ref(array)

const sortVal = (val1, val2) => {
  return val2.balance - val1.balance
}

for (let index = 0; index < arr.value.length; index++) {
  for (let j = 0; j < arr.value[index].list.length; j++) {
    arr.value[index].list[j].list.sort(sortVal)
  }
}


const arrIsSel = ref({
  title: sessionStorage.getItem('arrIsSelTitle') || 0,
  content: sessionStorage.getItem('arrIsSelContent') || 0,
})

watch(arrIsSel, () => {
  sessionStorage.setItem('arrIsSelTitle', (arrIsSel.value.title))
  sessionStorage.setItem('arrIsSelContent', (arrIsSel.value.content))
}, { deep: true })

</script>

<style lang="less">
// body {
//   width: 100%;
//   height: 100%;
//   background-image: url(../assets/imgs/bg2x.png);
//   background-size: 100% 100%;
// }

.tabBox {
  // filter: hue-rotate(410deg);
  width: 100%;
  height: 100%;
  background-image: url(../assets/imgs/区域框-标准.png);
  // background-image: url(https://dataease.goliveplus.cn/static-resource/f8d60e20-9e0f-11ee-9b26-1d0cddc1a2e3.png);
  background-size: 100% 100%;
  color: #D8FEFF;

  .tabTitle {
    background-image: url(../assets/imgs/板块标题.png);
    background-size: 100% 100%;
    height: 48px;
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    padding: 2px;

    &>div {
      width: 120px;
      height: 39px;
      background: rgba(0, 132, 151, 0.5);
      line-height: 42px;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      cursor: pointer;

      &.isSelected {
        background: #008497;
      }
    }
  }

  .tabCharts {
    padding: 10px 20px;

    .chartsTitle {
      padding-left: 42px;
      background-image: url(../assets/imgs/小标题-背景.png);
      background-size: 100% 100%;
      height: 38px;
      line-height: 38px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;

      .chartsTitleText {
        flex-grow: 1;
      }

      .chartsTitleBtn {
        display: flex;
        gap: 5px;
        justify-content: flex-end;
        align-items: center;

        span {
          width: 55px;
          padding: 0 10px;
          cursor: pointer;
          background: rgba(0, 132, 151, 0.5);
          height: 30px;
          line-height: 30px;
        }

        span.isSelected {
          background: rgba(0, 132, 151, 1);

        }
      }
    }

    .chartsContent {
      display: flex;
      flex-direction: column;

      &>div {
        display: flex;
        gap: 15px;
        height: 30px;
        line-height: 30px;

        .chartsContentSerial {
          width: 30px;
          text-align: center;
          background: #008497;
        }

        .chartsContentText {
          width: 90px;
        }

        .chartsContentVal {
          width: 60px;
          text-align: right;
        }

        .chartsContentBar {
          flex-grow: 1;
          display: flex;
          align-items: center;

          div {
            height: 10px;
            border-radius: 10px;
            background: #00D2FF;
          }
        }

      }
    }
  }

}
</style>
