<template>
  <div class="divBox">
    <video src="../assets/imgs/images/背景.mp4" autoplay="autoplay" loop="loop" muted="muted"></video>
    <div class="title">
      <button v-if="route.query?.ym == 7" v-for="(item, index) in 5" :key="index" @click="nav = index">{{ item
        }}状态</button>
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
          grid-row-end: 19;
        ">
        <div class="itmeTitle">人事数据</div>
        <div class="dataList">
          <div>
            <p>在编校聘人员(人)</p>
            <p>
              <countTo :end='allData.logistics_personnel.recruiting_staff_amount' :autoPlay="true" :repeat="true"
                :duration='3000' />
            </p>
          </div>
          <div>
            <p>后勤自聘人员(人)</p>
            <p>
              <countTo :end='allData.logistics_personnel.self_employed_logistically' :autoPlay="true" :repeat="true"
                :duration='3000' />
            </p>
          </div>
          <div>
            <p>本科及以上学历人员(人)</p>
            <p>
              <countTo :end='allData.logistics_personnel.bachelor_degree' :autoPlay="true" :repeat="true"
                :duration='3000' />
            </p>
          </div>
          <div>
            <p>中级职称及以上(人)</p>
            <p>
              <countTo :end='allData.logistics_personnel.intermediate_above_titles' :autoPlay="true" :repeat="true"
                :duration='3000' />
            </p>
          </div>
        </div>
      </div>
      <!-- 四大图标 + 1 -->
      <div class="navList" style="
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 60;
        ">
        <div>
          <!-- @mouseover="nav = 3,navStart=false" @mouseout="nav = 0, navStart = true" -->
          <div class="things" @click="goDataDetails"></div>
          <div class="life" @click="goDataDetails"></div>
          <div class="supermarket" @click="goDataDetails"></div>
          <div class="pay" @click="goDataDetails"></div>
          <div class="foodSafety" @click="goDataDetails"></div>
        </div>
      </div>
      <!-- 数字化应用功能分布 -->
      <div class="itmeBox" style="
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 27;
        ">
        <div class="itmeTitle right">数字化应用功能分布</div>
        <div class="applications">
          <div class="appNum">
            <div>
              <div class="appNumNum">
                <countTo :end='allData.logistics_info_construction.application_count' :autoPlay="true"
                  :useEasing="false" :repeat="true" :repeatTime="3000" :duration='1000' />
              </div>
              <div class="appNumTitle">应用总数</div>
            </div>
            <div>
              <div class="appNumNum">
                <countTo :end='allData.logistics_info_construction.scene_count' :autoPlay="true" :useEasing="false"
                  :repeat="true" :repeatTime="3000" :duration='1000' />
              </div>
              <div class="appNumTitle">场景总数</div>
            </div>
            <div>
              <div class="appNumNum">
                <countTo :end='allData.logistics_info_construction.platforms_count' :autoPlay="true" :useEasing="false"
                  :repeat="true" :repeatTime="3000" :duration='1000' />
              </div>
              <div class="appNumTitle">平台数量</div>
            </div>
            <div>
              <div class="appNumNum">
                <countTo :end='allData.logistics_info_construction.business_applications_count' :autoPlay="true"
                  :useEasing="false" :repeat="true" :repeatTime="3000" :duration='1000' />
              </div>
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
          grid-row-start: 21;
          grid-row-end: 47;
        ">
        <div class="itmeTitle">微生活用户数据</div>
        <div class="userData" style="padding: 20px">
          <!-- <div class="peopleTitle">在校师生人数(人)</div> -->
          <div class="numBox">
            <div class="title"></div>
            <div v-for="(item, index) in allData.life_user_situation.people_school_count + ''">
              <countTo :end='item - 0' :autoPlay="true" :useEasing="false" :repeat="true" :repeatTime="3000"
                :duration='1000' />
            </div>
            <!-- <div>0</div>
            <div>5</div>
            <div>9</div>
            <div>9</div>
            <div>2</div> -->
          </div>
          <div class="applicationList">
            <div class="textBox">
              <p>校区数量(个)</p>
              <p>{{ allData.life_user_situation.campuses_count }}</p>
            </div>
            <div class="textBox">
              <p>部门数量(个)</p>
              <p>{{ allData.life_user_situation.faculties_departments_count }}</p>
            </div>
            <div class="textBox">
              <p>身份数量(个)</p>
              <p>{{ allData.life_user_situation.life_attention_count }}</p>
            </div>
            <div class="textBox">
              <p>激活使用率</p>
              <p>{{ allData.life_user_situation.activation_rate }}%</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 智慧楼宇 -->
      <div class="itmeBox" style="
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 49;
          grid-row-end: 96;
        ">
        <div class="itmeTitle">智慧公寓</div>
        <div class="dataBox">
          <div>
            <p>总楼幢数量(幢)</p>
            <p>{{ allData.kettle_apartment_data.zldsl }}</p>
          </div>
          <div>
            <p>总房间数(个)</p>
            <p>{{ allData.kettle_apartment_data.zfjsl }}</p>
          </div>
          <div>
            <p>总床位数(个)</p>
            <p>{{ allData.kettle_apartment_data.zcwsl }}</p>
          </div>
          <div>
            <p>总入住人数</p>
            <p>{{ allData.kettle_apartment_data.zrzrs }}</p>
          </div>

          <div id="main"></div>
          <div id="main1"></div>
        </div>
      </div>
      <!-- 智慧餐饮7日汇总 -->
      <div class="itmeBox" style="
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 29;
          grid-row-end: 61;
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
            <div v-for="(itme, index) in arrTab" style="margin-top: 0px">
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
          grid-row-start: 63;
          grid-row-end: 96;
        ">
        <!-- 更具图标轮播 -->
        <div class="mainBox">
          <div class="mainApp" v-show="nav == 0">
            <div class="itmeTitle">业务系统</div>
            <div class="appList">

              <div>
                <div>
                  <div></div>
                  <p>智慧餐饮</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>教工餐厅就餐</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>订单配送</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>云餐厅</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>POS管理</p>
                  <p>2024.04.03上线</p>
                </div>
              </div>

              <div>
                <div>
                  <div></div>
                  <p>智能用电</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>电瓶车充电</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>智慧公寓</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>卫生检查</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>智慧巡检</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>智慧门禁</p>
                  <p>2024.04.03上线</p>
                </div>
                <!-- <div>
                  <div></div>
                  <p>辅导员系统</p>
                  <p>2024.04.03上线</p>
                </div> -->
              </div>

              <div>
                <div>
                  <div></div>
                  <p>我要吐槽</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>新闻公告</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>智慧商圈</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>电子钱包</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>问卷调查</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>聚合收款码</p>
                  <p>2024.04.03上线</p>
                </div>
                <!-- <div>
                  <div></div>
                  <p>自习室预约</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>智能云印</p>
                  <p>2024.04.03上线</p>
                </div> -->
              </div>

              <div>
                <div>
                  <div></div>
                  <p>支付平台</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>用车管理</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>智慧报修</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>失物招领</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>跳蚤市场</p>
                  <p>2024.04.03上线</p>
                </div>
              </div>

              <div>
                <div>
                  <div></div>
                  <p>用户中心</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>基础数据</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>权限管理</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>消息中心</p>
                  <p>2024.04.03上线</p>
                </div>
                <div>
                  <div></div>
                  <p>审批中心</p>
                  <p>2024.04.03上线</p>
                </div>
              </div>

            </div>
          </div>

          <div v-show="nav == 3">
            <div class="itmeTitle">智能报修</div>
            <div class="SmartLife">
              <div>
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
          </div>

          <div class="SmartIoT" v-show="nav == 1">
            <div class="itmeTitle">智慧公寓</div>
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
                <h4>智能报修</h4>
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

          <div class="supermarketSmart" v-show="nav == 2">
            <div class="itmeTitle">智慧餐饮</div>
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

              <div>
                <div class="appListTitle">智慧餐厅</div>
                <div>
                  <div>
                    <p>餐厅数量(个)</p>
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
          grid-row-start: 63;
          grid-row-end: 96;
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
                <div>姓名{{ itme }}</div>
                <div>分类{{ itme }}</div>
                <div>{{ itme }}</div>
                <div>{{ itme * 5 }}</div>
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
                  <h4>智能报修</h4>
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

import { useRoute } from 'vue-router';

const route = useRoute()

const arrTab = ref(array1[1].list[1].list.splice(0, 5));

const sortVal = (val1, val2) => {
  return val2.balance - val1.balance;
};

arrTab.value.sort(sortVal);

const arr = ref(array);

const nav = ref(0);
const navStart = ref(true);
const isFull = ref(document.fullscreenElement !== null);

setInterval(() => { navStart.value && nav.value++ && nav.value == 5 && (nav.value = 0) }, 15000)

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

let jumpAddress, hpptAddress, typeAddress;
if (/dev-/.test(location.hostname)) {
  typeAddress = 1
  jumpAddress = 'http://101.69.251.102:28186';
  hpptAddress = 'https://dev-sicnu-data-screen.goliveplus.cn';
} else if (/.edu.cn/.test(location.hostname)) {
  typeAddress = 2
  jumpAddress = 'https://dataease.sicnu.edu.cn';
  hpptAddress = 'https://sicnu-data-screen.goliveplus.cn';
} else {
  typeAddress = 3
  jumpAddress = 'http://172.24.65.43';
  hpptAddress = 'http://172.24.65.43';
}

const goDataDetails = (item) => {
  switch (item.target.className) {
    case "life":
      location.href = jumpAddress + "/link/" + (typeAddress) == 1 ? 'VADnTOvW' : 'JZgQEs47';
      break;

    case "things":
      location.href = jumpAddress + "/link/" + (typeAddress) == 1 ? 'DFMTrnXd' : 'EoyaJFBm';
      break;

    case "supermarket":
      location.href = jumpAddress + "/link/" + (typeAddress) == 1 ? 'QbsJOgQh' : '9cPFh5Fg';
      break;

    case "pay":
      location.href = jumpAddress + "/link/" + (typeAddress) == 1 ? 'I9LI2gMx' : 'YZvQ4Y2p';
      break;
    case "foodSafety":
      location.href = "http://logisticssystem.sicnu.edu.cn/BlueData/Index.html";
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
const allData = ref({
  life_user_situation: {},
  logistics_info_construction: {},
  logistics_personnel: {},
  kettle_apartment_data: {},
})

const bodyMounted = () => {
  const chartDom = document.getElementById("main");
  const chartDom1 = document.getElementById("main1");
  const myChart = echarts.init(chartDom);
  const myChart1 = echarts.init(chartDom1);
  const option = {
    series: [
      {
        type: "pie",
        color: ['#F0A900', '#00B24B'],
        radius: ["25%", "50%"],
        avoidLabelOverlap: false,
        label: {
          formatter: "{b}\n{c}%",
          textBorderColor: "none",
          color: "#fff",
        },
        data: [
          { value: 34, name: "成龙校\n区房间\n比例" },
          { value: 66, name: "狮子山\n校区房\n间比例" },
        ],
      },
    ],
  };
  const occupancyRate = allData.value.kettle_apartment_data.zfjsl / allData.value.kettle_apartment_data.yrzfjs || 20
  const option2 = {
    series: [
      {
        type: "pie",
        color: ['#1758DE', '#00DEDB'],
        radius: ["25%", "50%"],
        avoidLabelOverlap: false,
        label: {
          formatter: "{b}\n{c}%",
          textBorderColor: "none",
          color: "#fff",
        },
        data: [
          { value: parseInt(occupancyRate), name: "入住率" },
          { value: parseInt(100 - occupancyRate), name: "未入住\n率" },
        ],
      },
    ],
  };

  option && myChart.setOption(option2);
  option && myChart1.setOption(option);
};

// #用于前端验签
// KEY = eb4420b70c4eb9722d78400d8f817c42
// SECRET = 64a6dd7185c0539a6a2f217ea340c91b

fetch(hpptAddress + "/data_screen/api/all/data/", {
  headers: {
    appKey: 'eb4420b70c4eb9722d78400d8f817c42',
    sign: 'e00183440d3fc51ee4598718ca395373',
    timestamp: '1718777708',
    // timestamp: new Date().getTime(),
    randStr: '1sqrct3UyeFRI8dl',
  }
})
  .then((response) => response.json())
  .then((data) => {
    allData.value = data.data.data;
    bodyMounted();
  });

</script>
<style lang="less">
:root {
  --color: red;
}

@import './index.less';
</style>
