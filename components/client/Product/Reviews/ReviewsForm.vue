<template>
  <div class="form">
    <h3 class="title mt-0">Написати відгук</h3>
    <el-form :model="review" :rules="rules" ref="reviewForm" label-position="left" :inline="false">
      <el-form-item label="Ваше ім'я" prop="author">
        <el-input v-model="review.author"></el-input>
      </el-form-item>
      <el-form-item label="Оцінка" prop="rating">
        <el-select v-model="review.rating" placeholder="Оберіть оцінку" class="w-100">
          <el-option label="5 зірок" :value="5"></el-option>
          <el-option label="4 зірки" :value="4"></el-option>
          <el-option label="3 зірки" :value="3"></el-option>
          <el-option label="2 зірки" :value="2"></el-option>
          <el-option label="1 зірка" :value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Відгук" prop="text">
        <el-input
          type="textarea"
          v-model="review.text"
          :autosize="{ minRows: 4 }"
          maxlength="400"
          show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item label="Що сподобалося" prop="pros">
        <el-input type="textarea"
                  v-model="review.pros"
                  :autosize="{ minRows: 2 }"
                  maxlength="100"
                  show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="Що не сподобалося" prop="cons">
        <el-input type="textarea"
                  v-model="review.cons"
                  :autosize="{ minRows: 2 }"
                  maxlength="100"
                  show-word-limit></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="w-100" type="primary" @click="onSubmit" :loading="loading">Опублікувати відгук</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      review: {
        author: '',
        rating: '',
        text: '',
        pros: '',
        cons: '',
        product: this.productId
      },
      rules: {
        author: [
          { required: true, message: "Будь ласка, введіть ваше ім'я", trigger: 'blur' }
        ],
        rating: [
          { required: true, message: 'Оберіть будь ласка оцінку', trigger: 'change' }
        ],
        text: [
          { required: true, message: 'Поле відгук повинне бути заповненим', trigger: 'blur' },
          { min: 50, max: 400, message: 'Будь ласка, зробіть відгук більш детальним, щонайменше 50 символів', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  methods: {
    onSubmit() {
      this.$refs['reviewForm'].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('public/review/create', this.review)
          this.loading = false
          this.$refs['reviewForm'].resetFields();
          this.$message.success('Ваш відгук успішно опубліковано!')
        } else {
          this.$message.warning('Заповнніть, будь ласка, усі необхідні поля.')
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: .75rem;
  font-weight: 600;
  line-height: 1.2;
  font-size: 1.4rem;
  color: #373f50;
}

.form {
  background-color: #f6f9fc;
  border-radius: .4375rem;
  padding: 2rem;
}
</style>
