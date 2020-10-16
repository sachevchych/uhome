<template>
    <el-form ref="propertyForm" :model="property" :rules="rules" label-width="120px">
      <el-form-item label="Назва" prop="name">
        <el-input v-model="property.name"></el-input>
      </el-form-item>
      <el-form-item label="Тип">
        <el-select v-model="property.type" placeholder="please select your zone">
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
      <el-divider></el-divider>
      <el-button class="mt-2" v-if="propertyId === 'create'" type="primary" @click="handleCreate">Створити</el-button>
    </el-form>
</template>

<script>
export default {
  props: ['propertyId'],
  data() {
    return {
      loading: false,
      property: {
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
  methods: {
    handleCreate() {
      this.$refs.propertyForm.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            name: this.property.name,
            type: this.property.type,
            multiple: this.property.multiple,
            values: this.property.type === 'list' ? this.property.values : null
          }

          console.log('formData', formData)

          try {
            await this.$store.dispatch('property/create', formData)
            this.$message.success('Товар створено')
          } catch (e) {
            this.$message.error(e)
          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning("Ви не заповнили всі обов'язкові поля")
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
