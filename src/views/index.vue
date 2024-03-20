<template>
  <div class="divBox">
    <video src="../assets/imgs/images/背景.mp4" autoplay="autoplay" loop="loop" muted="muted"></video>
    <div class="title">
      <!-- 数据大屏 -->
      <!-- <video src="../assets/imgs/images/背景.mp4" autoplay="autoplay" loop="loop" muted="muted"></video> -->
      <div style="color: aliceblue">
        {{ getDateDay() }} {{ getWeek() }}
        <!-- <i class="iocn clouds"></i> 多云  -->
        丨
        <span v-if="!isFull" @click="toFullScreen"><i class="iocn full"></i>全屏</span><span v-else
          @click="toWindowScreen"><i class="iocn window"></i>窗口</span>
      </div>
    </div>
    <div class="navBox">
      <!-- 人事数据 -->
      <div class="itmeBox" style="
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 18;
        ">
        <div class="itmeTitle">人事数据</div>
        <div class="dataList">
          <div>
            <p>在编校聘人员(人)</p>
            <p>5982</p>
          </div>
          <div>
            <p>后勤自聘人员(人)</p>
            <p>3791</p>
          </div>
          <div>
            <p>本科及以上学历人员(人)</p>
            <p>4155</p>
          </div>
          <div>
            <p>中级职称及以上(人)</p>
            <p>3469</p>
          </div>
        </div>
      </div>
      <!-- 四大图标 -->
      <div class="navList" style="
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 60;
        ">
        <div>
          <div class="things" @mouseover="nav = 2" @click="goDataDetails" @mouseout="nav = 0"></div>
          <div class="life" @mouseover="nav = 1" @click="goDataDetails" @mouseout="nav = 0"></div>
          <div class="supermarket" @mouseover="nav = 3" @click="goDataDetails" @mouseout="nav = 0"></div>
          <div class="pay" @mouseover="nav = 4" @click="goDataDetails" @mouseout="nav = 0"></div>
        </div>
      </div>
      <!-- 数字化应用功能分布 -->
      <div class="itmeBox" style="
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 26;
        ">
        <div class="itmeTitle right">数字化应用功能分布</div>
        <div class="applications">
          <div class="appNum">
            <div>
              <div class="appNumNum">31</div>
              <div class="appNumTitle">应用总数</div>
            </div>
            <div>
              <div class="appNumNum">25</div>
              <div class="appNumTitle">场景总数</div>
            </div>
            <div>
              <div class="appNumNum">4</div>
              <div class="appNumTitle">平台数量</div>
            </div>
            <div>
              <div class="appNumNum">29</div>
              <div class="appNumTitle">SaaS应用数</div>
            </div>
          </div>
          <div class="payChannel"></div>
          <div class="payItme">
            <div>
              <div class="payIco wx"></div>
              <div class="payTxt">微信</div>
            </div>
            <div>
              <div class="payIco zfb"></div>
              <div class="payTxt">支付宝</div>
            </div>
            <div>
              <div class="payIco ykt"></div>
              <div class="payTxt">川师一卡通</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 微生活用户数据 -->
      <div class="itmeBox" style="
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 20;
          grid-row-end: 46;
        ">
        <div class="itmeTitle">微生活用户数据</div>
        <div style="padding: 20px">
          <!-- <div class="peopleTitle">在校师生人数(人)</div> -->
          <div class="numBox">
            <div class="title"></div>
            <div>1</div>
            <div>0</div>
            <div>5</div>
            <div>9</div>
            <div>9</div>
            <div>2</div>
          </div>
          <div class="applicationList">
            <div class="textBox">
              <p>校区数量(个)</p>
              <p>2</p>
            </div>
            <div class="textBox">
              <p>部门数量(个)</p>
              <p>{{ 113 + 22 + 7 + 36 }}</p>
            </div>
            <div class="textBox">
              <p>身份数量(个)</p>
              <p>28</p>
            </div>
            <div class="textBox">
              <p>激活使用率</p>
              <p>62%</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 智慧楼宇 -->
      <div class="itmeBox" style="
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 48;
          grid-row-end: 95;
        ">
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
      <!-- 智慧餐饮7日汇总 -->
      <div class="itmeBox" style="
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 28;
          grid-row-end: 60;
        ">
        <div class="itmeTitle right">智慧餐饮7日汇总</div>
        <div class="foodBox">
          <div class="foodData">
            <div>
              <div class="foodDataNum">￥6373</div>
              <div class="foodTitle">交易额</div>
            </div>
            <div>
              <div class="foodDataNum">52</div>
              <div class="foodTitle">订单量</div>
            </div>
            <div>
              <div class="foodDataNum">￥122</div>
              <div class="foodTitle">客单价</div>
            </div>
          </div>
          <div class="payChannel"></div>
          <!-- top5排行 -->
          <div class="chartsContent">
            <div v-for="(itme, index) in arrTab[1].list[1].list" style="margin-top: 0px">
              <div class="chartsContentText">{{ itme.name }}</div>
              <div class="chartsContentBar">
                <div :style="{ width: itme.balance / 20 + '%' }"></div>
                <div class="chartsContentVal">{{ itme.balance }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 主要应用 -->
      <div class="itmeBox itmeBoxWidth" style="
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 62;
          grid-row-end: 95;
        ">
        <!-- 更具图标轮播 -->
        <div class="mainBox">
          <div class="mainApp" v-show="nav == 0">
            <div class="itmeTitle">主要应用</div>
            <div>
              <div>
                <div></div>
                <p>能汇通</p>
              </div>
              <div>
                <div></div>
                <p>充电宝</p>
              </div>
              <div>
                <div></div>
                <p>基础数据</p>
              </div>
              <div>
                <div></div>
                <p>智慧餐饮</p>
              </div>
              <div>
                <div></div>
                <p>智慧商圈</p>
              </div>
              <div>
                <div></div>
                <p>POS机管理</p>
              </div>
            </div>
          </div>

          <div v-show="nav == 2">
            <div class="itmeTitle">智慧生活</div>
            <div class="SmartLife">
              <template v-for="item in arr">
                <div v-for="i in item">
                  <h4>{{ i.title }}</h4>
                  <div>
                    <div v-for="j in i.list" style="">
                      <p style="">{{ j.name }}</p>
                      {{ j.val }}
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <div class="SmartIoT" v-show="nav == 3">
            <div class="itmeTitle">智慧物联</div>
            <div class="appListInfo">
              <div>
                <h4>能汇通</h4>
                <div>
                  <div>
                    <p>总充值订单数量(笔)</p>
                    <div>6532</div>
                  </div>
                  <div>
                    <p>总充值金额(元)</p>
                    <div><span> 76326372.21</span></div>
                  </div>
                  <div>
                    <p>日平均耗能量(度)</p>
                    <div>2392</div>
                  </div>
                </div>
              </div>
              <div>
                <h4>充电桩</h4>
                <div>
                  <div>
                    <p>总网点数量(个)</p>
                    <div>542</div>
                  </div>
                  <div>
                    <p>总充电次数(次)</p>
                    <div>2322123</div>
                  </div>
                  <div>
                    <p>总充电时长(小时)</p>
                    <div>231242.32</div>
                  </div>
                </div>
              </div>
              <div>
                <h4>智能保修</h4>
                <div>
                  <div>
                    <p>总维修工数(个)</p>
                    <div>2312</div>
                  </div>
                  <div>
                    <p>总工单数(次)</p>
                    <div>12123</div>
                  </div>
                  <div>
                    <p>总工单完成率(%)</p>
                    <div>95.32</div>
                  </div>
                </div>
              </div>
              <div>
                <h4>智能门禁</h4>
                <div>
                  <div>
                    <p>总设备数(个)</p>
                    <div>4321</div>
                  </div>
                  <div>
                    <p>总通行记录(次)</p>
                    <div><span>9872123</span></div>
                  </div>
                  <div>
                    <p>总异常人员数(人)</p>
                    <div>2312</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="platformPayment" v-show="nav == 4">
            <div class="itmeTitle">支付平台</div>
            <div class="appListInfo">
              <div>
                <div>
                  <p>总交易金额(元)</p>
                  63526373.43
                </div>
                <div>
                  <p>总交易笔数(笔)</p>
                  543235
                </div>
                <div>
                  <p>总支付场景数量</p>
                  25个
                </div>
                <div>
                  <p>总支付渠道</p>
                  3个
                </div>
              </div>
            </div>
          </div>

          <div class="supermarketSmart" v-show="nav == 1">
            <div class="itmeTitle">智慧商超</div>
            <div class="appListInfo">
              <div>
                <div class="appListTitle">智慧餐饮</div>
                <div>
                  <div>
                    <p>食堂数量(个)</p>
                    <span v-for="i in '4'">{{ i }}</span>
                    <p>档口数量(个)</p>
                    <span v-for="i in '24'">{{ i }}</span>
                  </div>

                  <div>
                    <div>
                      <p>今日交易笔数(笔)</p>
                      882
                    </div>
                    <div>
                      <p>今日交易金额(元)</p>
                      283,293
                    </div>
                    <div>
                      <p>订单总笔数(万笔)</p>
                      24.32
                    </div>
                    <div>
                      <p>订单总金额</p>
                      33526373.43
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- 维修工订单数 -->
      <div class="itmeBox" style="
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 62;
          grid-row-end: 95;
        ">
        <div class="itmeTitle right">维修工订单数</div>
        <div class="repairBox">
          <div class="repairTitle">
            <div>姓名</div>
            <div>分类</div>
            <div>订单数量</div>
            <div>完成数</div>
          </div>
          <div style="overflow: hidden">
            <div class="repairTable transformBox">
              <div class="repairTableItem" v-for="itme in [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          19, 20,
        ]">
                <div>姓名</div>
                <div>分类</div>
                <div>{{ itme }}</div>
                <div>完成数</div>
              </div>
            </div>
            <div style="margin-top: 5px" class="repairTable transformBox">
              <div class="repairTableItem" v-for="itme in [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          19, 20,
        ]">
                <div>姓名</div>
                <div>分类</div>
                <div>{{ itme }}</div>
                <div>完成数</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="itmeBox itmeBoxWidth" v-if="false" style="grid-column-start: 2; grid-column-end: 4">
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
                <p>平台数量 <span> 4</span></p>
                <p>SaaS应用数<span> 29</span></p>
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
                    <img src="../assets/imgs/pay_wechat@2x.png" alt="" />
                    <p>微信</p>
                  </div>
                  <div>
                    <img src="../assets/imgs/pay_alipay@2x.png" alt="" />
                    <p>支付宝</p>
                  </div>
                  <div>
                    <img src="../assets/imgs/pay_card@2x.png" alt="" />
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
                63526373.43
              </div>
              <div style="color: #af67ff">
                <p>总交易笔数(笔)</p>
                543235
              </div>
              <div style="color: #0ffbd6">
                <p>总支付场景数量</p>
                25个
              </div>
              <div style="color: #6de256">
                <p>总支付渠道</p>
                3个
              </div>
            </div>
          </div>
          <!-- 主要应用数据 -->
          <div class="appInfoDetails appIconList" v-show="nav == 0">
            <div class="appListTitle">主要应用</div>
            <div class="appListInfo">
              <div>
                <img src="../assets/imgs/能慧通.png" alt="" srcset="" />
                能慧通
              </div>
              <div>
                <img src="../assets/imgs/充电保.png" alt="" srcset="" />
                充电保
              </div>
              <div>
                <img src="../assets/imgs/基础数据.png" alt="" srcset="" />
                基础数据
              </div>
              <div>
                <img src="../assets/imgs/青e食.png" alt="" srcset="" />
                智慧餐饮
              </div>
              <div>
                <img src="../assets/imgs/青选go.png" alt="" srcset="" />
                智慧商圈
              </div>
              <div>
                <img src="../assets/imgs/POS机管理.png" alt="" srcset="" />
                POS机管理
              </div>
            </div>
          </div>
          <!-- 餐饮商圈数据 -->
          <div class="appInfoDetails supermarketList" v-show="nav == 3">
            <div>
              <div class="appListTitle">智慧餐饮</div>
              <p>
                食堂数量(个)
                <span style="width: 90px; display: inline-block; padding-left: 10px">4</span>
                档口数量(个)
                <span style="width: 90px; display: inline-block; padding-left: 10px">76</span>
              </p>
              <div class="appListInfo" style="gap: 10px; margin-top: 10px">
                <div>
                  <p>今日交易笔数(笔)</p>
                  882
                </div>
                <div style="color: #af67ff">
                  <p>今日交易金额(元)</p>
                  283,293
                </div>
                <div style="color: #0ffbd6">
                  <p>订单总笔数(万笔)</p>
                  24.32
                </div>
                <div style="color: #6de256">
                  <p>订单总金额</p>
                  33526373.43
                </div>
              </div>
            </div>

            <div>
              <div class="appListTitle">智慧商圈</div>
              <p>
                门店数量(个)
                <span style="width: 90px; display: inline-block; padding-left: 10px">2</span>
                商品数量(个)
                <span style="width: 90px; display: inline-block; padding-left: 10px">387</span>
              </p>
              <div class="appListInfo" style="gap: 10px; margin-top: 10px">
                <div>
                  <p>今日交易笔数(笔)</p>
                  182
                </div>
                <div style="color: #af67ff">
                  <p>今日交易金额(元)</p>
                  183,293
                </div>
                <div style="color: #0ffbd6">
                  <p>订单总笔数(万笔)</p>
                  14.32
                </div>
                <div style="color: #6de256">
                  <p>订单总金额</p>
                  23526373.88
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
                  <p>总充值订单数量： 6532 笔</p>
                  <p>总充值金额： 76326372.21 元</p>
                  <p>日平均耗能量： 2392 度</p>
                </div>
                <div>
                  <h4>充电桩</h4>
                  <p>总网点数量： 542 个</p>
                  <p>总充电次数： 2322123 次</p>
                  <p>总充电时长： 231242 小数</p>
                </div>
                <div>
                  <h4>智能保修</h4>
                  <p>总维修工数： 2312 个</p>
                  <p>总工单数： 12123 单</p>
                  <p>总工单完成率： 98%</p>
                </div>
                <div>
                  <h4>智能门禁</h4>
                  <p>总设备数： 4321 个</p>
                  <p>总通行记录： 9872123 次</p>
                  <p>总异常人员数： 2312 人</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 智慧生活数据 -->
          <div class="appInfoDetails lifeList" v-show="nav == 1">
            <div>
              <div class="appListTitle">智慧生活</div>
              <div class="appListInfo">
                <div class="lifeListInfo" v-for="item in arr">
                  <div v-for="i in item">
                    <h4>{{ i.title }}</h4>
                    <div>
                      <div v-for="j in i.list" style="">
                        <p style="">{{ j.name }}</p>
                        {{ j.val }}
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
</template>

<script setup>
import * as echarts from "echarts";
import autofit from "autofit.js";
import { ref, onMounted } from "vue";
import array from "../arr";

import array1 from "../arrTab";

const arrTab = ref(array1);

const sortVal = (val1, val2) => {
  return val2.balance - val1.balance;
};

for (let index = 0; index < arrTab.value.length; index++) {
  for (let j = 0; j < arrTab.value[index].list.length; j++) {
    arrTab.value[index].list[j].list.sort(sortVal);
  }
}

const arr = ref(array);
const nav = ref(0);
const isFull = ref(document.fullscreenElement !== null);
const date = new Date();

autofit.init();

const toFullScreen = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
  isFull.value = true;
};
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
  isFull.value = false;
};

const goDataDetails = (item) => {
  switch (item.target.className) {
    case "things":
      location.href = "http://101.69.251.102:28186/link/VADnTOvW";
      break;

    case "life":
      location.href = "http://101.69.251.102:28186/link/DFMTrnXd";
      break;

    case "supermarket":
      location.href = "http://101.69.251.102:28186/link/QbsJOgQh";
      break;

    case "pay":
      location.href = "http://101.69.251.102:28186/link/I9LI2gMx";
      break;
  }
};

const getDateDay = () => {
  const date = new Date();
  let nowMonth = date.getMonth() + 1;
  let strDate = date.getDate();
  const seperator = "-";
  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = "0" + nowMonth;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return date.getFullYear() + "年" + nowMonth + "月" + strDate + "日";
};
const getWeek = () => {
  return "星期" + "日一二三四五六".charAt(new Date().getDay());
};

onMounted(() => {
  const chartDom = document.getElementById("main");
  const chartDom1 = document.getElementById("main1");
  const myChart = echarts.init(chartDom);
  const myChart1 = echarts.init(chartDom1);
  const option = {
    series: [
      {
        type: "pie",
        radius: ["20%", "45%"],
        avoidLabelOverlap: false,
        label: {
          formatter: "{b}\n{c}%",
          textBorderColor: "none",
          color: "#fff",
        },
        data: [
          { value: 80, name: "入住率" },
          { value: 20, name: "未入住率" },
        ],
      },
    ],
  };

  option && myChart.setOption(option);
  option && myChart1.setOption(option);
});
</script>

<style lang="less" scoped>
.iocn {
  width: 20px;
  height: 20px;
  display: inline-flex;
  vertical-align: sub;
}

.cloud {
  background-image: url("../assets/imgs/阴天.png");
}

.sunny {
  background-image: url(../assets/imgs/晴天.png);
}

.clouds {
  background-image: url(../assets/imgs/多云.png);
}

.rain {
  background-image: url(../assets/imgs/雨天.png);
}

.snow {
  background-image: url(../assets/imgs/雪天.png);
}

.full {
  background-image: url(../assets/imgs/全屏.png);
  background-size: 100% 100%;
}

.window {
  background-image: url(../assets/imgs/全屏.png);
  background-size: 100% 100%;
}

.title {
  position: relative;
  background-image: url(../assets/imgs/images/文字标题.png),
    url(../assets/imgs/apng/头部标题栏.png);
  background-size: 320px 60px, 100% 100%;
  background-repeat: no-repeat;
  background-position: center top, center;
  width: 100%;
  height: 80px;
  line-height: 72px;
  color: aliceblue;
  font-size: 32px;
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
  // background-image: url(../assets/imgs/bg2x.png);
  background-size: 100% 100%;
  position: relative;

  video {
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.navBox {
  display: grid;
  grid-template-columns: 480px 860px 480px;
  grid-template-rows: repeat(100, 10px);
  grid-auto-flow: row dense;
  // gap: 20px;
  column-gap: 20px;
  padding: 10px 30px;
  justify-content: center;

  div.itmeBox {
    display: flex;
    flex-direction: column;
    background-image: url(../assets/imgs/apng/板块底边线-窄.png);
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: 0 100%;

    .mainBox {
      display: flex;
      height: 100%;
      width: 400%;
      gap: 20px;

      &>div {
        width: 25%;
        display: flex;
        flex-direction: column;

        &>div:nth-child(2) {
          flex-grow: 1;
          background-image: url(../assets/imgs/images/背景框2.png);
          background-size: 100% 100%;
          display: flex;
        }
      }

      //
      .mainApp {
        &>div:nth-child(2) {
          justify-content: space-around;

          &>div {
            width: 16.6%;
            height: 110px;
            background-image: url(../assets/imgs/images/应用背景-默认.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;

            &:nth-child(odd) {
              background-position-y: bottom;
              align-self: center;
            }

            &>div {
              margin: auto;
              width: 100px;
              height: 65px;
              background-repeat: no-repeat;
              background-size: 25%;
              background-position-x: center;
              background-position-y: 30px;
            }

            &:nth-child(1)>div {
              background-image: url(../assets/imgs/images/icon/应用logo3.png);
            }

            &:nth-child(2)>div {
              background-image: url(../assets/imgs/images/icon/应用logo2.png);
            }

            &:nth-child(3)>div {
              background-image: url(../assets/imgs/images/icon/应用logo1.png);
            }

            &:nth-child(4)>div {
              background-image: url(../assets/imgs/images/icon/应用logo6.png);
            }

            &:nth-child(5)>div {
              background-image: url(../assets/imgs/images/icon/应用logo4.png);
            }

            &:nth-child(6)>div {
              background-image: url(../assets/imgs/images/icon/应用logo5.png);
            }

            &>p {
              text-align: center;
              color: rgba(0, 246, 252, 1);
              font-size: 14px;
            }
          }
        }
      }

      .SmartLife {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 10px;

        h4 {
          width: 120px;
          height: 70px;
          font-family: PingFang SC;
          font-weight: 600;
          font-size: 16px;
          color: #ffffff;
          line-height: 7px;
          text-align: center;
          line-height: 70px;
          background-image: url(../assets/imgs/apng/数据展示框5.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }

        &>div {
          width: 100%;
          display: flex;

          &>div {
            flex-grow: 1;
            display: flex;
            color: #ffffff;
            align-items: center;

            &>div {
              width: 33%;
              // height: 40px;
              padding: 10px 20px;
              font-size: 20px;
              font-weight: 600;
              display: flex;
              flex-direction: column-reverse;
              background-image: url(../assets/imgs/images/数据展示框3.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;

              &:nth-child(2) {
                position: relative;

                &::before {
                  position: absolute;
                  left: 0;
                  content: ' ';
                  height: 35px;
                  vertical-align: middle;
                  display: inline-block;
                  margin: auto;
                  border-left: 1px solid #11c7df;
                }

                &::after {
                  position: absolute;
                  right: 0;
                  content: ' ';
                  height: 35px;
                  vertical-align: middle;
                  display: inline-block;
                  margin: auto;
                  border-left: 1px solid #11c7df;
                }
              }

              p {
                font-weight: 400;
                font-size: 12px;
                color: #00fffc;
              }
            }
          }
        }
      }
    }

    .platformPayment {
      &>div.appListInfo>div {
        background-image: url(../assets/imgs/apng/波形.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position-y: bottom;
        width: 100%;
        height: 100%;
        padding: 10px;
        position: relative;

        &>div {
          position: absolute;
          display: flex;
          background-repeat: no-repeat;
          background-size: contain;
          color: #fff;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          p {
            color: #00fffc;
          }
        }

        &>div:nth-child(1) {
          width: 120px;
          height: 120px;
          background-image: url(../assets/imgs/apng/泡泡.png);
          left: 50px;
          bottom: 40px;
        }

        &>div:nth-child(2) {
          width: 164px;
          height: 164px;
          background-image: url(../assets/imgs/apng/泡泡-绿.png);
          left: 220px;
          top: 40px;
        }

        &>div:nth-child(3) {
          width: 172px;
          height: 172px;
          background-image: url(../assets/imgs/apng/泡泡-蓝.png);
          left: 450px;
          top: 60px;

          p {
            color: #0090ff;
          }
        }

        &>div:nth-child(4) {
          width: 120px;
          height: 120px;
          background-image: url(../assets/imgs/apng/泡泡.png);
          right: 60px;
          top: 40px;
        }
      }
    }

    .SmartIoT {
      &>div.appListInfo {
        width: 200%;
        gap: 20px;
        padding: 20px;
        font-weight: 600;
        color: #00fffc;

        &>div {
          width: 50%;
          display: flex;
          flex-direction: column;

          h4 {
            font-size: 16px;
            height: 60px;
            line-height: 60px;
            padding-left: 20px;

            &::before {
              height: 45px;
              vertical-align: middle;
              width: 40px;
              display: inline-block;
              margin: auto;
              content: url(../assets/imgs/images/菱形.png);
            }
          }

          &>div {
            flex-grow: 1;
            display: flex;
            gap: 8px;

            &>div {
              background-image: url(../assets/imgs/apng/数据展示框6.png);
              background-size: 100% 100%;

              &>div {
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                padding: 0 30px;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
              }

              p {
                font-size: 12px;
                height: 40px;
                text-align: center;
                line-height: 40px;
              }

              width: 130px;
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }

    .supermarketSmart {
      .appListInfo {
        padding: 20px;
        gap: 20px;
        width: 200%;

        &>div {
          width: 50%;
          display: flex;
          flex-direction: column;
          color: rgba(0, 255, 252, 1);

          .appListTitle {
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            padding-left: 20px;

            &::before {
              height: 45px;
              vertical-align: middle;
              width: 40px;
              display: inline-block;
              margin: auto;
              content: url(../assets/imgs/images/菱形.png);
            }
          }

          &>div:nth-child(2) {
            display: flex;
            gap: 20px;

            &>div:nth-child(1) {
              width: 230px;

              p {
                background-image: url(../assets/imgs/apng/小标题背景.png);
                padding: 0 10px;
                margin-bottom: 10px;
              }

              span {
                width: 36px;
                height: 53px;
                display: inline-block;
                background-image: url(../assets/imgs/images/数据展示框2.png);
                background-size: 100% 100%;
                font-weight: 600;
                font-size: 30px;
                color: #FFFFFF;
                text-align: center;
                line-height: 53px;
                margin-bottom: 10px;
                margin-left: 10px;

              }
            }

            &>div:nth-child(2) {
              flex-grow: 1;
              display: grid;
              gap: 10px;
              grid-template-columns: 280px 280px;
              grid-template-rows: 68px 120px;
              text-align: center;
              align-items: center;

              &>div {
                display: flex;
                align-items: center;
                flex-direction: column-reverse;
                justify-content: center;
                color: #fff;
                font-size: 18px;

                height: 100%;
                background-image: url(../assets/imgs/apng/数据展示框5.png);
                background-size: 100% 100%;

                p {
                  color: rgba(0, 255, 252, 1);
                  font-size: 14px;
                }
              }

              &>div:nth-child(-n+2) {
                height: 100%;
                background-image: url(../assets/imgs/apng/数据展示框4-宽.png);
                background-size: 100% 100%;
              }
            }

          }
        }
      }
    }

    &>div:nth-child(2) {
      flex-grow: 1;
      background-image: url(../assets/imgs/images/背景框2.png);
      background-size: 100% 100%;
    }

    overflow: hidden;

    &.itmeBoxWidth {
      background-image: url(../assets/imgs/apng/板块底边线-宽.png);

      &>div:nth-child(2) {
        background-image: url(../assets/imgs/images/中型框背景.png);
      }

      .itmeTitle {
        background-image: url("../assets/imgs/apng/板块标题栏-middle.png");
      }
    }

    .appList {
      display: flex;
      padding: 10px 40px;
      font-weight: 400;
      color: #d8feff;
      font-size: 18px;
      gap: 10px;
    }

    .appListTitle {
      width: 399px;
      height: 40px;
      line-height: 40px;
      padding-left: 40px;
    }

    .appOverview {
      margin-top: 40px;
      display: flex;
      gap: 20px;

      .appOverviewNum {
        // background-image: url(../assets/imgs/数字框.png);
        background-size: 100% 100%;
        font-size: 40px;
        color: #0ffbd6;
        width: 100px;
        height: 100px;
        text-align: center;

        p {
          color: #ffffff;
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
          color: #0ffbd6;
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
          // background-image: url(../assets/imgs/数字框.png);
          background-size: 100% 100%;
          height: 100px;
          font-size: 40px;
          color: #f8a000;

          p {
            font-size: 14px;
            color: #ffffff;
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
            color: #00f6fc;
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
            color: #0ffbd6;
            font-size: 18px;
          }
        }
      }

      // 生活
      &.lifeList {
        .appListInfo {
          margin-top: 5px;
          gap: 20px;

          .lifeListInfo {
            h4 {
              margin-top: 5px;
            }
          }

          &>div {
            padding: 0;
            background: none;
            width: calc(50% - 15px);
            color: #0ffbd6;
            font-size: 18px;

            &>div>div {
              display: flex;
              gap: 10px;
              // margin-top: 10px;

              &>div {
                // background-image: url(../assets/imgs/数字框.png);
                background-size: 100% 100%;
                width: 33%;
                height: 65px;
                padding: 10px 20px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }

    .itmeTitle {
      padding-left: 100px;
      background-image: url(../assets/imgs/apng/板块标题栏-left.png);

      &::before {
        height: 30px;
        vertical-align: middle;
        width: 40px;
        display: inline-block;
        margin: auto;
        content: url(../assets/imgs/images/菱形.png);
      }

      &.right {
        text-align: right;
        padding-right: 100px;
        background-image: url(../assets/imgs/apng/板块标题栏-right.png);

        &::before {
          content: "";
        }

        &::after {
          height: 30px;
          vertical-align: middle;
          width: 40px;
          display: inline-block;
          margin: auto;
          content: url(../assets/imgs/images/菱形.png);
        }
      }

      height: 48px;
      line-height: 48px;
      font-size: 18px;
      font-weight: 400;
      color: #d7feff;
      text-align: left;
      margin-bottom: 2px;
    }

    .peopleTitle {
      margin-bottom: 40px;
      padding-top: 10px;
      font-size: 14px;
      font-weight: 400;
      color: #00f6fc;
      text-align: center;
      height: 25px;
      line-height: 25px;
      vertical-align: middle;
      margin-bottom: 20px;

      &::after {
        // content: url(../assets/imgs/小标题装饰-right.png);
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
        // content: url(../assets/imgs/小标题装饰-left.png);
      }
    }

    .numBox {
      display: flex;
      margin-bottom: 30px;
      gap: 10px;

      &>.title {
        width: 71px;
        background-image: url(../assets/imgs/images/在校师生人数.png);
        background-position: center;
        background-size: 71px 39px;
        flex: none;
      }

      div {
        // background-image: url(../assets/imgs/数字框-窄.png);
        background-image: url(../assets/imgs/images/数据展示框2.png);
        background-size: 100% 100%;
        width: 50px;
        height: 80px;
        font-size: 50px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #0ffbd6;
        line-height: 50px;
        line-height: 80px;
        text-align: center;
      }
    }

    .applicationList {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      &>div {
        width: 102px;
        display: flex;
        flex-direction: column-reverse;
        background-image: url(../assets/imgs/images/数据展示框3.png);
        background-size: 100% 100%;
        text-align: center;
        height: 62px;
        padding: 10px 0;
      }

      div.textBox {
        color: #00fffc;
        font-size: 12px;

        &>p:last-child {
          color: #ffffff;
          font-weight: 600;
          font-size: 20px;
        }
      }
    }

    // 人事数据
    .dataList {
      padding: 20px 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 10px;
      // background-image: url(../assets/imgs/);

      div {
        width: 106px;
        height: 90px;
        display: flex;
        flex-direction: column-reverse;
        // background-image: url(../assets/imgs/数据框-六边形.png);

        p:first-child {
          color: #00fffc;
          font-size: 12px;
          padding: 0 10px;
          text-align: center;
        }

        p:last-child {
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-weight: 600;
          color: #ffffffff;
          font-size: 24px;
          background-image: url(../assets/imgs/images/数据展示框.png);
          background-size: 100% 100%;
        }
      }
    }

    // 智慧楼宇
    .dataBox {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 40px;
      background-image: url("/src/assets/imgs/images/背景框2.png"),
        url(../assets/imgs/images/楼宇背景.png) !important;
      background-size: 100% 100%, 100% 220px !important;
      background-repeat: no-repeat;
      align-items: center;
      justify-content: center;

      &>div {
        width: 50%;
        color: #ffffff;
        text-align: left;
        padding: 16px;
        gap: 10px;

        &:nth-child(-n + 4) {
          animation-duration: 3s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          animation-direction: alternate;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 3s;

          &:nth-child(1) {
            align-self: flex-start;
            animation-name: zoom-down;
            background-color: rgba(0, 178, 75, 1);
            transform: scale(0.8);
          }

          &:nth-child(2) {
            background-color: rgba(0, 222, 219, 1);
          }

          &:nth-child(3) {
            align-self: flex-start;
            animation-name: zoom-down;
            background-color: rgba(0, 38, 178, 1);
            transform: scale(0.8);
          }

          &:nth-child(4) {
            background-color: rgba(158, 0, 240, 1);
          }

          width: 104px;
          height: 104px;

          &:nth-child(2n) {
            align-self: flex-end;
            animation-name: zoom-up-and-down;
            width: 84px;
            height: 84px;
          }

          border-radius: 50%;
        }
      }

      #main {
        height: 180px;
      }

      #main1 {
        height: 180px;
      }

      p:first-child {
        font-size: 14px;
      }

      p:last-child {
        font-weight: 600;
        font-size: 20px;
      }
    }

    // 数字化应用
    .applications {
      display: flex;
      flex-direction: column;
      padding: 18px;

      .appNum {
        display: flex;
        justify-content: space-around;

        &>div {
          display: flex;
          flex-direction: column;
          text-align: center;

          .appNumNum {
            width: 80px;
            height: 80px;
            font-family: PingFang SC;
            font-weight: 600;
            font-size: 30px;
            color: #fefefe;
            background-image: url(../assets/imgs/apng/基座.png);
            // background-size: 100% 100%;
            background-position: center;
          }

          .appNumTitle {
            font-family: PingFang SC;
            font-weight: 600;
            font-size: 14px;
            color: #00fffc;
          }
        }
      }

      .payChannel {
        border-bottom: 2px solid #00f6fc;
        margin: 15px 0;
      }

      .payItme {
        display: flex;
        justify-content: space-around;
        text-align: center;
        gap: 10px;

        &>div {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .payIco {
          width: 40px;
          height: 40px;

          &.wx {
            background-image: url(../assets/imgs/images/微信.png);
          }

          &.zfb {
            background-image: url(../assets/imgs/images/支付宝.png);
          }

          &.ykt {
            background-image: url(../assets/imgs/images/一卡通.png);
          }
        }

        .payTxt {
          flex-grow: 1;
          text-align: center;
          font-family: PingFang SC;
          font-weight: 600;
          font-size: 16px;
          color: #00fffc;
        }
      }
    }

    // 餐饮七日排行
    .foodBox {
      display: flex;
      flex-direction: column;
      padding: 18px;

      .foodData {
        display: flex;
        justify-content: space-around;
        gap: 20px;

        &>div {
          display: flex;
          flex-direction: column;
          text-align: center;
          background-image: url(../assets/imgs/images/数据展示框4.png);
          background-size: 100% 100%;
          width: 128px;
          height: 68px;
          text-align: center;
          align-items: center;

          .foodDataNum {
            width: 91px;
            height: 40px;
            line-height: 42px;
            font-family: PingFang SC;
            font-weight: 600;
            font-size: 20px;
            color: #fefefe;
          }

          .foodTitle {
            font-family: PingFang SC;
            font-weight: 600;
            font-size: 14px;
            color: #00fffc;
          }
        }
      }

      .payChannel {
        border-bottom: 2px solid #00f6fc;
        margin: 15px 0;
      }

      .payItme {
        display: flex;
        justify-content: space-around;
        text-align: center;
        gap: 10px;

        &>div {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .payIco {
          width: 40px;
          height: 40px;

          &.wx {
            background-image: url(../assets/imgs/images/微信.png);
          }

          &.zfb {
            background-image: url(../assets/imgs/images/支付宝.png);
          }

          &.ykt {
            background-image: url(../assets/imgs/images/一卡通.png);
          }
        }

        .payTxt {
          flex-grow: 1;
          text-align: center;
          font-family: PingFang SC;
          font-weight: 600;
          font-size: 16px;
          color: #00fffc;
        }
      }
    }

    // 维修订单
    .repairBox {
      padding: 10px;
      display: flex;
      row-gap: 5px;
      column-gap: 5px;
      flex-direction: column;

      &>.repairTitle {
        display: flex;
        column-gap: 5px;
        font-family: PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #00fffc;
        text-align: center;

        >div {
          width: 111px;
          height: 24px;
          background: rgba(0, 129, 144, 0.2);
          // opacity: 0.2;
        }
      }

      overflow: hidden;

      & .repairTable {
        flex-grow: 1;
        display: flex;
        row-gap: 5px;
        flex-direction: column;

        &.transformBox {
          animation: scrollHorizontally 10s linear infinite;
        }

        .repairTableItem {
          width: 100%;
          display: flex;
          column-gap: 5px;
          font-family: PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #fff;
          text-align: center;

          >div {
            width: 111px;
            height: 24px;
            background: rgba(0, 129, 144, 0.2);
            // opacity: 0.2;
          }
        }
      }
    }
  }

  .navList {
    position: relative;
    background-image: url(../assets/imgs/apng/模型底.png);
    // background-size: 100% 100%;
    background-size: cover;
    background-position: center;
    background-position-y: 32px;
    background-repeat: no-repeat;

    &>div {
      margin: auto;
      position: relative;
      width: 850px;
    }

    &>div>div {
      position: absolute;
      width: 220px;
      height: 220px;
      background-size: 100% 100%;
      transition: all 1s;

      &:hover {
        transform: scale(1.2);
      }

      // border: #fff solid 1px;

      &.things {
        left: 80px;
        top: 180px;
        background-image: url(../assets/imgs/apng/智慧物联.png);
      }

      &.life {
        left: 310px;
        height: 230px;
        top: 310px;
        background-image: url(../assets/imgs/apng/智慧生活.png);
      }

      &.supermarket {
        left: 310px;
        height: 265px;
        top: 20px;
        background-image: url(../assets/imgs/apng/餐饮商超.png);
      }

      &.pay {
        left: 550px;
        height: 225px;
        top: 170px;
        background-image: url(../assets/imgs/apng/支付平台.png);
      }
    }

    &::before {
      position: absolute;
      content: " ";
      // background-image: url(../assets/imgs/弧-left.png);
      width: 60px;
      height: 100%;
      display: inline-block;
      left: 0;
      top: 0;
    }

    &::after {
      position: absolute;
      content: " ";
      // background-image: url(../assets/imgs/弧-right.png);
      width: 60px;
      height: 100%;
      display: inline-block;
      right: 0;
      top: 0;
    }
  }
}

/* 定义关键帧动画 */
@keyframes zoom-up-and-down {
  0% {
    transform: scale(1) translateY(0);
  }

  50% {
    transform: scale(1.2) translateY(-10px);
  }

  100% {
    transform: scale(1) translateY(0);
  }
}

@keyframes zoom-down {
  0% {
    transform: scale(1) translateY(0);
  }

  50% {
    transform: scale(0.8) translateY(10px);
  }

  100% {
    transform: scale(1) translateY(0);
  }
}

@keyframes scrollHorizontally {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}

// top
.chartsContent {
  display: flex;
  flex-direction: column;
  color: #fff;

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
      width: 50px;
      flex: none;
    }

    .chartsContentVal {
      width: 60px;
      text-align: right;
    }

    .chartsContentBar {
      flex-grow: 1;
      display: flex;
      align-items: center;
      position: relative;

      &>div:first-child {
        height: 10px;
        border-radius: 10px;
        background: #00d2ff;
      }

      &>div:last-child {
        width: 100%;
        text-align: center;
        position: absolute;
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 22px;
        color: #061222;
        text-stroke: 1px #11c7df;
        -webkit-text-stroke: 1px #11c7df;
      }
    }
  }
}
</style>
