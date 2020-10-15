<template>
  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">Top 추천 회원</h3>
        </b-col>
        <b-col class="text-right" v-show="false">
          <base-button size="sm" type="primary">See all</base-button>
        </b-col>
      </b-row>
    </template>


    <el-table
      class="table-responsive table"
      :data="tableData"
      header-row-class-name="thead-light">
      <el-table-column label="작성자" min-width="115px" prop="name">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.name}}</div>
        </template>
      </el-table-column>

      <el-table-column label="개시글수" min-width="110px" prop="visitors">
      </el-table-column>

      <el-table-column label="추천" min-width="220px" prop="progress">
        <template v-slot="{row}">
          <div class="d-flex align-items-center">
            <span class="mr-2">{{row.progress}}%</span>
            <base-progress :type="row.progressType" :value="row.progress" />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { BaseProgress } from '@/components';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'social-traffic-table',
    components: {
      BaseProgress,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        tableData: [
          {
            name: '오영균',
            visitors: '47',
            progress: 87,
            progressType: 'gradient-danger',
          },
          {
            name: '주우형',
            visitors: '43',
            progress: 79,
            progressType: 'gradient-success',
          },
          {
            name: '관리자',
            visitors: '50',
            progress: 68,
            progressType: 'gradient-primary',
          },
          {
            name: 'Cocomelon',
            visitors: '16',
            progress: 55,
            progressType: 'gradient-info',
          },
          {
            name: '뽀로로',
            visitors: '2',
            progress: 49,
            progressType: 'gradient-warning',
          }
        ]
      }
    }

  }
</script>
<style>
</style>
