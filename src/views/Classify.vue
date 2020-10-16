<template>
  <div>
       <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
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

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">Classify</h3>
            <b-row class="icon-examples">
              <b-card
                title="제목 입니다."
                img-src="img/food/rice.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
          <b-card-text>
            이미지 레시피 게시글 내용입니다.
          </b-card-text>

          <b-button href="#" variant="primary" 
          @click="onCopy()"
          >더보기</b-button>
                </b-card>
                <b-card
                title="제목 입니다."
                img-src="img/food/rice.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; left:20px"
                class="mb-2"
              >
          <b-card-text>
            이미지 레시피 게시글 내용입니다.
          </b-card-text>
          
          <b-button href="#" variant="primary"
          @click="onCopy()"
          >더보기</b-button>
                </b-card>
 
            </b-row>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BaseHeader from '@/components/BaseHeader';

  Vue.use(VueClipboard)
  export default {
    name: 'classify',
    components: {
      BaseHeader
    },
    data() {
      return {
        max: 100
      }
    },
    methods: {
      onCopy() {
        this.$notify({
          type: 'info',
          message: 'Copied to clipboard'
        })
      }
    }
  };
</script>
<style></style>
