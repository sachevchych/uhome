<template>
  <div class="container">
    <el-form ref="propertyForm" :model="property" :rules="rules" label-width="120px" v-loading="pageLoading">
      <el-form-item v-if="propertyId !== 'create'" label="ID" prop='id' >
        <el-input v-model="property._id" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="Назва" prop="name">
        <el-input v-model="property.name"></el-input>
      </el-form-item>
      <el-form-item label="Тип">
        <el-select v-model="property.type" placeholder="Оберіть тип властивості">
          <el-option label="Рядок" value="string"></el-option>
          <el-option label="Список" value="list"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Множинне">
        <el-switch v-model="property.multiple"></el-switch>
      </el-form-item>
      <!-- Values List -->
      <div v-if="property.type === 'list'">
        <el-table
          :data="property.values"
          style="width: 100%">
          <el-table-column label="ID">
            <template slot-scope="scope">
              <el-input v-model="scope.row.id" disabled></el-input>
            </template>
          </el-table-column>
          <el-table-column label="Значення">
            <template slot-scope="scope">
              <el-input v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="Сортування">
            <template slot-scope="scope">
              <el-input v-model="scope.row.sort"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="Дії">
            <template slot-scope="scope">
              <el-button
                type="danger"
                @click="handleDeletePropertyValue(scope.$index, scope.row)">Видалити
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button @click="handleAddValueInput" class="mt-2">Додати ще одну властивість</el-button>
      </div>
    </el-form>
    <div class="mt-2 d-flex justify-content-end">
      <el-button v-if="propertyId === 'create'" type="primary" @click="handleCreate" :loading="loading">Створити</el-button>
      <el-button v-else type="primary" @click="handleUpdate" :loading="loading">Зберегти</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propertyId: String
  },
  data() {
    return {
      loading: false,
      pageLoading: true,
      property: {
        _id: '',
        name: '',
        type: 'string',
        multiple: false,
        values: [
          {id: 0, name: '', sort: 100},
          {id: 1, name: '', sort: 100}
        ]
      },
      rules: {
        name: [{required: true, message: 'Властивість не може бути збережена без назви', trigger: 'blur'},]
      }
    };
  },
  mounted() {
    if (this.propertyId !== 'create') {
      this.fetchProperty(this.propertyId)
    } else {
      this.pageLoading = false
    }
  },
  methods: {
    async fetchProperty(id) {
      try {
        this.pageLoading = true
        this.property = await this.$store.dispatch('property/fetchById', id)
      } catch (e) {
        this.$message.error(e)
      } finally {
        this.pageLoading = false
      }
    },
    handleCreate() {
      this.$refs.propertyForm.validate(async valid => {
        if (valid) {
          this.loading = true

          try {
            await this.$store.dispatch('property/create', this.property)
            this.$message.success('Властивість створено')
          } catch (e) {
            this.$message.error(e)
          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning("Ви не заповнили всі необхідні поля")
        }
      })
    },
    handleUpdate() {
      this.$refs.propertyForm.validate(async valid => {
        if (valid) {
          try {
            this.loading = true
            await this.$store.dispatch('property/update', this.property)
            this.$message.success('Властивість оновлено')
          } catch (e) {
            this.$message.error(e)
          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning("Ви не заповнили всі необхідні поля")
        }
      })
    },
    handleAddValueInput() {
      const nextID = this.property.values[this.property.values.length - 1].id + 1

      this.property.values.push({
        id: nextID,
        value: '',
        sort: 100
      });
    },
    handleDeletePropertyValue(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>

</style>
