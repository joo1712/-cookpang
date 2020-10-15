
<template>
<!-- 
  Dashboard 
 -->
  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">최근 레시피</h3>
        </b-col>
        <b-col class="text-right">
          <router-link to="/classify" class="btn btn-sm btn-primary">더보기</router-link>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table"
              :data="tableData"
              header-row-class-name="thead-light">
      <el-table-column label="제목"
                       min-width="130px"
                       prop="page">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.page}}</div>
        </template>
      </el-table-column>
      <el-table-column label="작성자"
                       min-width="70px"
                       prop="visitors">
      </el-table-column>
      <el-table-column label="작성일"
                       min-width="90px"
                       prop="unique">
      </el-table-column>

      <el-table-column label="조회"
                       min-width="90px"
                       prop="bounceRate">
        <template v-slot="{row}">
          {{row.bounceRate}}
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'page-visits-table',
    components: {
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
            page: '첫번째 작성된 게시글 입니다.',
            visitors: '운영자',
            unique: '2020.09.11',
            bounceRate: '52'
          },
          {
            page: '두번째 작성된 게시글 입니다.',
            visitors: '주우형',
            unique: '2020.09.14',
            bounceRate: '32'
          },
          {
            page: '세번째 작성된 게시글 입니다.',
            visitors: '오영균',
            unique: '2020.09.25',
            bounceRate: '32'
          },
          {
            page: '네번째 작성된 게시글 입니다.',
            visitors: '이근',
            unique: '2020.09.31',
            bounceRate: '111'
          },
          {
            page: '다섯번째 작성된 게시글 입니다.',
            visitors: '로건',
            unique: '2020.10.14',
            bounceRate: '52'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
