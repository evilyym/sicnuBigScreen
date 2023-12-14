<template>
  <div class="divBox">
    <div class="title">川师大生活数据大屏
      <!-- @click="toFullScreen" -->
      <div style="color: aliceblue;">{{ getDateDay() }} {{ getWeek() }}
        <!-- <i class="iocn clouds"></i> 多云  -->
        丨 <span v-if="!isFull" @click="toFullScreen"><i class="iocn full"></i>全屏</span><span v-else
          @click="toWindowScreen"><i class="iocn window"></i>窗口</span>
      </div>
    </div>
    <div class="navBox">
      <div class="itmeBox">
        <div class="itmeTitle">微生活用户数据</div>
        <div class="peopleTitle"> 在校师生人数(人) </div>
        <div class="numBox">
          <div>1</div>
          <div>0</div>
          <div>5</div>
          <div>9</div>
          <div>9</div>
          <div>2</div>
        </div>
        <div class="applicationList">
          <div>
            <div class="appIcon">
              <img src="./assets/imgs/学校.png" alt="">
            </div>
            <div class="textBox">
              <p>校区数量(个)</p>
              <p>2</p>
            </div>
          </div>

          <div>
            <div class="appIcon">
              <img src="./assets/imgs/部门.png" alt="">
            </div>
            <div class="textBox">
              <p>部门数量(个)</p>
              <p>{{113+22+7+36}}</p>
            </div>
          </div>
          <div>
            <div class="appIcon">
              <img src="./assets/imgs/身份信息.png" alt="">
            </div>
            <div class="textBox">
              <p>身份数量(个)</p>
              <p>28</p>
            </div>
          </div>
          <div>
            <div class="appIcon">
              <img src="./assets/imgs/icon_激活.png" alt="">
            </div>
            <div class="textBox">
              <p>激活使用率</p>
              <p>62%</p>
            </div>
          </div>
        </div>
      </div>

      <div class="navList">
        <div>
          <div class="things" @mouseover="nav = 2" @mouseout="nav = 0"></div>
          <div class="life" @mouseover="nav = 1" @mouseout="nav = 0"></div>
          <div class="supermarket" @mouseover="nav = 3" @mouseout="nav = 0"></div>
          <div class="pay" @mouseover="nav = 4" @mouseout="nav = 0"></div>
        </div>
      </div>

      <div class="itmeBox">
        <div class="itmeTitle">人事数据</div>
        <div class="dataList peopleList">
          <div>
            <p>在编校聘人员(人)</p>
            <p>3982</p>
          </div>
          <div>
            <p>后勤自聘人员(人)</p>
            <p>3791</p>
          </div>
          <div>
            <p>本科及以上学历人员(人)</p>
            <p>3155</p>
          </div>
          <div>
            <p>中级职称及以上(人)</p>
            <p>3469</p>
          </div>
        </div>
      </div>

      <div class="itmeBox">
        <div class="itmeTitle">智慧楼宇</div>
        <div class="dataBox">
          <div>
            <p>总楼幢数量(幢)</p>
            <p>47</p>
          </div>
          <div>
            <p>总房间数(个)</p>
            <p>8,935</p>
          </div>
          <div>
            <p>总床位数(个)</p>
            <p>46,942</p>
          </div>
          <div>
            <p>总入住人数</p>
            <p>41,663</p>
          </div>

          <div id="main"></div>
          <div id="main1"></div>
        </div>
      </div>

      <div class="itmeBox itmeBoxWidth" style="grid-column-start:2;grid-column-end:4;">
        <div class="itmeTitle">数字化应用</div>
        <div class="appList">
          <div class="appInfo">
            <div class="appListTitle">数字化应用功能分布</div>

            <div class="appOverview">
              <div class="appOverviewNum">
                31
                <p>应用总数</p>
              </div>
              <div class="appOverviewInfo">
                <p>平台数量 <span> 4</span> </p>
                <p>SaaS应用数<span> 29</span> </p>
              </div>
            </div>

            <div class="appOverview">
              <div class="appOverviewNum">
                25
                <p>场景总数</p>
              </div>
              <div>
                <p>支付渠道</p>
                <div class="payList">
                  <div>
                    <img src="./assets/imgs/pay_wechat@2x.png" alt="">
                    <p>微信</p>
                  </div>
                  <div>
                    <img src="./assets/imgs/pay_alipay@2x.png" alt="">
                    <p>支付宝</p>
                  </div>
                  <div>
                    <img src="./assets/imgs/pay_card@2x.png" alt="">
                    <p>川师一卡通</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!-- 替换展示区域 -->
          <!-- 支付平台数据 -->
          <div class="appInfoDetails" v-show="nav == 4">
            <div class="appListTitle">支付平台数据</div>
            <div class="appListInfo">
              <div>
                <p>总交易金额(元)</p>
                123123123
              </div>
              <div style="color: #AF67FF;">
                <p>总交易笔数(笔)</p>
                123123123
              </div>
              <div style="color: #0FFBD6;">
                <p>总支付场景数量</p>
                123个
              </div>
              <div style="color: #6DE256;">
                <p>总支付渠道</p>
                12个
              </div>
            </div>
          </div>
          <!-- 主要应用数据 -->
          <div class="appInfoDetails appIconList" v-show="nav == 0">
            <div class="appListTitle">主要应用</div>
            <div class="appListInfo">
              <div>
                <img src="./assets/imgs/能慧通.png" alt="" srcset="">
                能慧通
              </div>
              <div>
                <img src="./assets/imgs/充电保.png" alt="" srcset="">
                充电保
              </div>
              <div>
                <img src="./assets/imgs/基础数据.png" alt="" srcset="">
                基础数据
              </div>
              <div>
                <img src="./assets/imgs/青e食.png" alt="" srcset="">
                智慧餐饮
              </div>
              <div>
                <img src="./assets/imgs/青选go.png" alt="" srcset="">
                智慧商圈
              </div>
              <div>
                <img src="./assets/imgs/POS机管理.png" alt="" srcset="">
                POS机管理
              </div>
            </div>
          </div>
          <!-- 餐饮商圈数据 -->
          <div class="appInfoDetails supermarketList" v-show="nav == 3">
            <div>
              <div class="appListTitle">智慧餐饮</div>
              <p>食堂数量(个) <span>124</span> 食堂数量(个) <span>124</span> </p>
              <div class="appListInfo" style="gap: 10px;margin-top:10px">
                <div>
                  <p>总交易金额(元)</p>
                  1
                </div>
                <div style="color: #AF67FF;">
                  <p>总交易笔数(笔)</p>
                  2
                </div>
                <div style="color: #0FFBD6;">
                  <p>总支付场景数量</p>
                  123个
                </div>
                <div style="color: #6DE256;">
                  <p>总支付渠道</p>
                  12个
                </div>
              </div>
            </div>

            <div>
              <div class="appListTitle">智慧商圈</div>
              <p>食堂数量(个) <span>124</span> 食堂数量(个) <span>124</span> </p>
              <div class="appListInfo" style="gap: 10px;margin-top:10px">
                <div>
                  <p>总交易金额(元)</p>
                  2
                </div>
                <div style="color: #AF67FF;">
                  <p>总交易笔数(笔)</p>
                  3
                </div>
                <div style="color: #0FFBD6;">
                  <p>总支付场景数量</p>
                  123个
                </div>
                <div style="color: #6DE256;">
                  <p>总支付渠道</p>
                  12个
                </div>
              </div>
            </div>
          </div>

          <!-- 智慧物联数据 -->
          <div class="appInfoDetails thingsList" v-show="nav == 2">
            <div>
              <div class="appListTitle">智慧物联</div>
              <div class="appListInfo">
                <div>
                  <h4>能汇通</h4>
                  <p>总充值订单数量： 22123</p>
                  <p>总充值金额： 12123</p>
                  <p>日平均耗能量： 12123</p>
                </div>
                <div>
                  <h4>能汇通</h4>
                  <p>总充值订单数量： 22123</p>
                  <p>总充值金额： 12123</p>
                  <p>日平均耗能量： 12123</p>
                </div>
                <div>
                  <h4>能汇通</h4>
                  <p>总充值订单数量： 22123</p>
                  <p>总充值金额： 12123</p>
                  <p>日平均耗能量： 12123</p>
                </div>
                <div>
                  <h4>能汇通</h4>
                  <p>总充值订单数量： 22123</p>
                  <p>总充值金额： 12123</p>
                  <p>日平均耗能量： 12123</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 智慧生活数据 -->
          <div class="appInfoDetails lifeList" v-show="nav == 1">
            <div>
              <div class="appListTitle">智慧生活</div>
              <div class="appListInfo">
                <div class="lifeListInfo" v-for="i in [1, 2]">
                  <div v-for="i in [1, 2, 3]">
                    <h4>服务监督</h4>
                    <div>
                      <div>
                        <p>总充值订单</p>
                        123
                      </div>
                      <div>
                        <p>总充值金额</p>
                        32412
                      </div>
                      <div>
                        <p>平均耗能量</p>
                        123
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div :style="{backgroundImage: `url( ${currentBg} )`}" class=" bg-cover bg-center h-screen text-white p-2 flex overflow-hidden
  text-6xl justify-center items-center flex-row">
    <n-space class="flex flex-row">
      <span>加载中请稍后</span>
      <n-spin size="small"  stroke="white"/>
      <n-spin size="small"  stroke="white"/>
      <n-spin size="small"  stroke="white"/>
    </n-space>
  </div> -->
</template>

<script setup>
import * as echarts from 'echarts';
import autofit from 'autofit.js'

import bg1 from '@/assets/imgs/bg-1.jpg';

import { provide, ref, onMounted } from "vue";

let currentBg = ref(bg1)
provide('changeBackground', currentBg)

const nav = ref(0)

autofit.init()

const toFullScreen = () => {
  // document.documentElement.requestFullscreen()
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
  isFull.value = true
}
const toWindowScreen = () => {
  if (document.exitFullScreen) {
    document.exitFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (element.msExitFullscreen) {
    element.msExitFullscreen();
  }
  isFull.value = false
}

onMounted(() => {

  const chartDom = document.getElementById('main');
  const chartDom1 = document.getElementById('main1');
  const myChart = echarts.init(chartDom);
  const myChart1 = echarts.init(chartDom1);
  const option = {
    series: [
      {
        type: 'pie',
        radius: ['20%', '45%'],
        avoidLabelOverlap: false,
        label: { formatter: '{b}\n{c}%', textBorderColor: 'none', color: '#fff' },
        data: [
          { value: 80, name: '入住率' },
          { value: 20, name: '未入住率' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
  option && myChart1.setOption(option);

  // toFullScreen()

  // setInterval(() => {
  //   nav.value++
  //   if (nav.value == 5) {
  //     nav.value = 0
  //   }
  // },1000)
})

const isFull = ref(document.fullscreenElement !== null);

const date = new Date()

const getDateDay = () => {
  const date = new Date();
  const nowMonth = date.getMonth() + 1;
  const strDate = date.getDate();
  const seperator = "-";
  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = "0" + nowMonth;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return date.getFullYear() + "年" + nowMonth + "月" + strDate + "日";
}
const getWeek = () => {
  return '星期' + '日一二三四五六'.charAt(new Date().getDay());
}
</script>

<style lang="less" scoped>
.iocn {
  width: 20px;
  height: 20px;
  display: inline-flex;
  vertical-align: sub;
}

.cloud {
  background-image: url(./assets/imgs/阴天.png);
}

.sunny {
  background-image: url(./assets/imgs/晴天.png);
}

.clouds {
  background-image: url(./assets/imgs/多云.png);
}

.rain {
  background-image: url(./assets/imgs/雨天.png);
}

.snow {
  background-image: url(./assets/imgs/雪天.png);
}

.full {
  background-image: url(./assets/imgs/全屏.png);
  background-size: 100% 100%;
}

.window {
  background-image: url(./assets/imgs/全屏.png);
  background-size: 100% 100%;
}

.title {
  position: relative;
  background-image: url(./assets/imgs/标题.png);
  background-size: 100% 100%;
  width: 100%;
  height: 90px;
  line-height: 80px;
  color: aliceblue;
  font-size: 36px;
  text-align: center;

  &>div {
    position: absolute;
    top: 0;
    right: 40px;
    font-size: 16px;
  }
}

.divBox {
  width: 100%;
  height: 100%;
  background-image: url(./assets/imgs/bg2x.png);
  background-size: 100% 100%;
}

.navBox {
  display: grid;
  grid-template-columns: 480px auto 480px;
  // grid-template-rows: 80px 200px;
  gap: 35px;
  padding: 10px 25px;
  // background-color: #2196F3;

  div.itmeBox {
    width: 100%;
    height: 440px;
    background-image: url(./assets/imgs/区域框-标准.png);
    background-size: 100% 100%;

    &.itmeBoxWidth {
      background-image: url(./assets/imgs/区域框-整屏宽.png);

      .itmeTitle {
        background-image: url('./assets/imgs/板块标题-宽 2.png');
      }

      .appList {
        display: flex;
        padding: 10px 40px;
        font-weight: 400;
        color: #D8FEFF;
        font-size: 18px;
        gap: 50px;

        .appListTitle {
          background-image: url(./assets/imgs/小标题-背景.png);
          width: 399px;
          height: 40px;
          line-height: 40px;
          padding-left: 40px;
        }

        .appInfo {
          .appOverview {
            margin-top: 40px;
            display: flex;
            gap: 20px;

            .appOverviewNum {
              background-image: url(./assets//imgs/数字框.png);
              background-size: 100% 100%;
              font-size: 40px;
              color: #0FFBD6;
              width: 100px;
              height: 100px;
              text-align: center;

              p {
                color: #FFFFFF;
                font-size: 14px;
              }
            }

            .appOverviewInfo {
              padding: 10 20px;

              p {
                height: 50px;
                line-height: 50px;
              }
            }

            .payList {
              display: flex;
              gap: 20px;
              text-align: center;
              margin-top: 10px;
              justify-content: center;

              img {
                display: inline-block;
              }
            }
          }
        }

        .appInfoDetails {
          flex-grow: 1;

          &.supermarketList {
            display: flex;
            // gap: 50px;
          }

          &.supermarketList>div>p {
            height: 90px;
            line-height: 100px;

            span {
              font-weight: 600;
              font-size: 30px;
              color: #0FFBD6;
              display: inline-flex;
            }
          }

          .appListTitle {
            display: inline-flex;
          }

          &.supermarketList .appListInfo>div {
            height: 80px;
            font-size: 20px;
            line-height: 30px;
          }

          .appListInfo {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            margin-top: 40px;

            &>div {
              padding: 10px 20px;
              width: calc(50% - 15px);
              background-image: url(./assets//imgs/数字框.png);
              background-size: 100% 100%;
              height: 100px;
              font-size: 40px;
              color: #F8A000;

              p {
                font-size: 14px;
                color: #FFFFFF;
              }
            }
          }

          // 主要应用css
          &.appIconList {
            .appListInfo {
              flex-wrap: wrap;
              gap: 24px;
              margin-top: 40px;

              &>div {
                width: calc(33% - 15px);
                display: inline-flex;
                line-height: 80px;
                flex-grow: 1;
                color: #00F6FC;
                font-size: 18px;
                text-align: center;
                justify-content: center;
                gap: 20px;
                align-items: center;

                img {
                  display: inline-flex;
                }

              }
            }
          }

          //物联 css
          &.thingsList {
            .appListInfo {
              margin-top: 30px;
              gap: 20px;


              &>div {
                width: calc(30% - 15px);
                height: 120px;
                color: #0FFBD6;
                font-size: 18px;

              }
            }
          }

          // 生活 
          &.lifeList {
            .appListInfo {
              margin-top: 15px;
              gap: 20px;

              &>div {
                padding: 0;
                background: none;
                width: calc(50% - 15px);
                height: 120px;
                color: #0FFBD6;
                font-size: 18px;

                &>div>div {
                  display: flex;
                  gap: 10px;
                  // margin-top: 10px;

                  &>div {
                    background-image: url(./assets//imgs/数字框.png);
                    background-size: 100% 100%;
                    width: 30%;
                    height: 65px;
                    padding: 10px 20px;
                  }
                }
              }
            }
          }
        }

      }
    }

    .itmeTitle {
      background-image: url(./assets/imgs/板块标题.png);
      height: 48px;
      line-height: 48px;
      font-size: 18px;
      font-weight: 400;
      color: #D7FEFF;
      text-align: center;
      margin-bottom: 20px;
    }

    .peopleTitle {
      margin: 10px 40px;
      font-size: 14px;
      font-weight: 400;
      color: #00F6FC;
      text-align: center;
      height: 25px;
      line-height: 25px;
      vertical-align: middle;
      margin-bottom: 20px;

      &::after {
        content: url(./assets/imgs/小标题装饰-right.png);
        height: 25px;
        width: 25px;
        display: inline-block;
        vertical-align: middle;
      }

      &::before {
        height: 25px;
        vertical-align: middle;
        width: 25px;
        display: inline-block;
        margin: auto;
        content: url(./assets//imgs/小标题装饰-left.png);
      }
    }

    .numBox {
      margin: 10px 40px;
      display: flex;
      margin-bottom: 30px;
      gap: 20px;

      div {
        background-image: url(./assets/imgs/数字框-窄.png);
        background-size: 100% 100%;
        width: 50px;
        height: 80px;
        font-size: 50px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #0FFBD6;
        line-height: 50px;
        line-height: 80px;
        text-align: center;
      }
    }

    .applicationList {
      margin: 10px 40px;
      display: flex;
      flex-wrap: wrap;

      &>div {
        width: 50%;
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
      }

      div.appIcon {
        width: 70px;
        height: 70px;
        padding: 15px;
        background-size: 100% 100%;
        background-image: url(./assets/imgs/iconbg.png);
      }

      div.textBox {
        color: #fff;
        font-size: 14px;

        &>p:last-child {
          color: #AF67FF;
          font-weight: 600;
          font-size: 40px;
        }
      }
    }

    // 人事数据
    .dataList {
      margin: 10px 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 25px;
      background-image: url(./assets/imgs/);

      &.peopleList {
        background-image: url(./assets/imgs/pIcn.png);
        background-repeat: no-repeat;
        background-position: 160px 135px;
        background-size: 80px 80px;
      }

      div {
        width: 140px;
        height: 160px;
        background-image: url(./assets/imgs/数据框-六边形.png);

        p:first-child {
          margin-top: 40px;
          color: #FFFFFF;
          font-size: 14px;
          padding: 0 10px;
          text-align: center;
        }

        p:last-child {
          text-align: center;
          font-weight: 600;
          color: #00E4FF;
          font-size: 40px;
        }
      }
    }

    // 智慧楼宇
    .dataBox {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 40px;

      &>div {
        width: 50%;
      }

      #main {
        height: 180px;
      }

      #main2 {
        height: 180px;
      }

      p:first-child {
        color: #FFFFFF;
        font-size: 14px;
        text-align: left;
      }

      p:last-child {
        text-align: left;
        font-weight: 600;
        color: #00E4FF;
        font-size: 40px;
      }
    }
  }

  .navList {
    position: relative;

    &>div {
      margin: auto;
      position: relative;
      width: 850px;
    }

    &>div>div {
      position: absolute;
      width: 220px;
      height: 240px;

      // border: #fff solid 1px;

      &.things {
        left: 50px;
        top: 70px;
        background-image: url(./assets//imgs/智慧物联.png);

        &:hover {
          background-image: url('./assets//imgs/智慧物联(1).png');
        }
      }

      &.life {
        left: 240px;
        height: 250px;
        top: 180px;
        background-image: url(./assets//imgs/智慧生活.png);

        &:hover {
          background-image: url('./assets//imgs/智慧生活(1).png');
        }
      }

      &.supermarket {
        left: 420px;
        height: 265px;
        top: 20px;
        background-image: url(./assets//imgs/餐饮商超.png);

        &:hover {
          background-image: url('./assets//imgs/餐饮商超(1).png');
        }
      }

      &.pay {
        left: 600px;
        height: 265px;
        top: 150px;
        background-image: url(./assets//imgs/支付平台.png);

        &:hover {
          background-image: url('./assets//imgs/支付平台(1).png');
        }
      }
    }

    &::before {
      position: absolute;
      content: ' ';
      background-image: url(./assets//imgs/弧-left.png);
      width: 60px;
      height: 100%;
      display: inline-block;
      left: 0;
      top: 0;
    }

    &::after {
      position: absolute;
      content: ' ';
      background-image: url(./assets/imgs/弧-right.png);
      width: 60px;
      height: 100%;
      display: inline-block;
      right: 0;
      top: 0;
    }
  }
}
</style>