<template>
  <div class="wrap">
    <div class="page-bar">
      <h1>Список користувачів</h1>
      <nuxt-link to="/settings/users/create">
        <el-button type="primary" size="medium">Додати користувача</el-button>
      </nuxt-link>
    </div>
    <div class="container">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Дата"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Ім'я"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Адреса">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Тарас',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Василь',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Петро',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Галина',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Василина',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Євкакій',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Григорій',
          address: 'No. 189, Grove St, Los Angeles'
        }],
      }
    }
  }
</script>

<style scoped>

</style>
