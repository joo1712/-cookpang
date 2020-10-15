<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card 4개 -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="총 레시피수"
                      type="gradient-red"
                      sub-title="350,897"
                      icon="ni ni-bullet-list-67"
                      class="mb-4">

            <template slot="footer">
              <b-progress :value="40" :max="max" class="mb-3"></b-progress>
              <span class="text-success mr-2">최근 10 분 전</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="총 리뷰글수"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <b-progress :value="20" :max="max" class="mb-3"></b-progress>
              <span class="text-success mr-2">최근 20 분 전</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="월 방문자 수"
                      type="gradient-green"
                      sub-title="260"
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
               <b-progress :value="30" :max="max" class="mb-3"></b-progress>
              <span class="text-danger mr-2">* 09.01 ~ 10.01 기준</span>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="접속중인 회원 수"
                      type="gradient-info"
                      sub-title="90"
                      icon="ni ni-circle-08"
                      class="mb-4">

            <template slot="footer">
              <b-progress :value="90" :max="max" class="mb-3"></b-progress>
              <span class="text-success mr-2">실시간</span>
              <span class="text-nowrap">접속회원 보기</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <!-- 총 레시피 조회수 변화추이 -->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">총 레시피 조회수 변화추이</h6>
                <h5 class="h3 text-white mb-0">뭐가 좋을까나...</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                       class="mr-2 mr-md-0"
                       :active="bigLineChart.activeIndex === 0"
                       link-classes="py-2 px-3"
                       @click.prevent="initBigChart(0)">
                      <span class="d-none d-md-block">월간</span>
                      <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)"
                  >
                    <span class="d-none d-md-block">주간</span>
                    <span class="d-md-none">W</span>
                  </b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </b-col>
        
        <!-- 월별 가입 회원수 그래프 -->
        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">월별 가입 회원수</h6>
                <h5 class="h3 mb-0">뭐가 좋을라나...</h5>
              </b-col>
            </b-row>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <!-- End charts-->

      <!--최근 레시피, Top 추천 회원 -->
      <b-row class="mt-5">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
          max: 100, 
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['4월', '5월', '6월', '7월', '8월', '9월'],
            datasets: [{
              label: '회원수',
              data: [20, 40, 20, 25, 30, 49]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: '조회수',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['3월','4월', '5월', '6월', '7월', '8월', '9월', '10월'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
