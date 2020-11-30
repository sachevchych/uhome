<template>
  <PageContainer title="Список брендів">
    <template v-slot:header>
      <el-button type="primary" @click="dialog = { display: true, create: true}" size="medium">
        Створити бренд
      </el-button>
      <!--   Edit brand modal   -->
      <el-dialog
        :title="dialog.create ? 'Створення бренду' : 'Редагування бренду'"
        :visible.sync="dialog.display"
        :before-close="handleClose"
      >
        <el-form :model="brand">
          <el-form-item label="Назва бренду">
            <el-input v-model="brand.name"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" v-if="dialog.create" @click="handleCreate">Створити</el-button>
        <el-button type="primary" v-else @click="handleUpdate">Оновити</el-button>
      </span>
      </el-dialog>
    </template>
    <template v-slot:content>
      <el-table
        :data="brands"
        style="width: 100%"
      >
        <el-table-column label="Назва" prop="name"></el-table-column>
        <el-table-column label="Дії">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">Редагувати</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleRemove(scope.row)">Видалити
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
      brands: [],
      brand: {},
      dialog: {
        display: false,
        type: 'create'
      }
    }
  },
  async asyncData({store}) {
    const brands = await store.dispatch('brand/fetchBrands')
    return {brands}
  },
  methods: {
    async handleCreate() {
      try {
        this.brands.push(await this.$store.dispatch('brand/create', this.brand))
        this.$message.success(`Бренд ${this.brand.name} успішно створено`)
        this.dialog = { display: false }
        this.brand = {}
      } catch (e) {
        this.$message.error(`Не вдалося створити бренд. Помилка ${e}`)
      }
    },
    async handleUpdate() {
      try {
        await this.$store.dispatch('brand/update', this.brand)
        this.$message.success(`Бренд ${this.brand.name} успішно оновлено`)
        this.dialog = { display: false }
        this.brand = {}
      } catch (e) {
        this.$message.error(`Не вдалося оновити бренд. Помилка ${e}`)
      }
    },
    async handleRemove(brand) {
      try {
        await this.$confirm(`Видалити бренд ${brand.name}?`, 'Увага!', {
          confirmButtonText: 'Так',
          cancelButtonText: 'Відмінити',
          type: "warning"
        })
        await this.$store.dispatch('brand/remove', brand._id)
        this.brands = this.brands.filter(b => b._id !== brand._id)
        this.$message.success(`Бренд ${brand.name} видалено`)
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
    },
    handleEdit(brand) {
      this.dialog = { display: true, create: false }
      this.brand = brand
    },
    handleClose(done) {
      this.$confirm('Ви впевнені що хочете закрити вікно?')
        .then(_ => {
          this.brand = {}
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>

<style scoped>

</style>
