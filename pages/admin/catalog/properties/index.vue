<template>
  <PageContainer title="Список властивостей">
    <template v-slot:header>
      <el-button type="primary" @click="$router.push('/admin/catalog/properties/create')" size="medium">
        Додати властивість
      </el-button>
    </template>
    <template v-slot:content>
      <el-table
        :data="properties"
        style="width: 100%"
      >
        <el-table-column label="Назва" prop="name"></el-table-column>
        <el-table-column label="Тип" prop="type"></el-table-column>
        <el-table-column label="Множинне" prop="multiple">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.multiple === true" type="primary">Так</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Дії">
          <template slot-scope="scope">
            <el-button size="mini" round @click="edit(scope.row._id)">Редагувати
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handlerRemove(scope.row._id, scope.row.name)">Видалити
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </PageContainer>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {PageContainer},
  data() {
    return {
      dialogVisible: false,
      properties: []
    }
  },
  async asyncData({store}) {
    const properties = await store.dispatch('property/fetchProperties')
    return {properties}
  },
  methods: {
    edit(id) {
      this.$router.push(`/admin/catalog/properties/${id}`)
    },
    async handlerRemove(id, name) {
      try {
        await this.$confirm(`Видалити ${name}?`, 'Увага!', {
          confirmButtonText: 'Так',
          cancelButtonText: 'Відмінити',
          type: "warning"
        })
        await this.$store.dispatch('property/remove', id)
        this.properties = this.properties.filter(p => p._id !== id)
        this.$message.success(`${name} видалено`)
      } catch (e) {
        switch (e) {
          case 'cancel':
            this.$message.warning('Ви відмінили видалення')
            break
          default:
            this.$message.error(e)
            break
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
