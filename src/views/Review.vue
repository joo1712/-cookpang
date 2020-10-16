<template>
  <div>
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
      <b-row>
        <b-col>
          <light-table/>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from './Tables/projects'
  import users from './Tables/users'
  import LightTable from "./Tables/RegularTables/LightTable";

  export default {
    components: {
      LightTable,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        users,
        max:100
      };
    }
  };
</script>
<style>
.el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}
</style>
