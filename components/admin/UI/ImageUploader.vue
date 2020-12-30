<template class="m-5">
  <div class="wrap">
    <div class="uploader">
      <input type="file"
             accept=".jpeg,.jpg,.png,image/jpeg,image/png"
             aria-label="upload image button"
             id="assetsFieldHandle"
             @change="handleImage"/>
      <label v-show="!loading" class="field-handler inner" for="assetsFieldHandle">
        +
      </label>
      <div v-show="loading" class="loading inner">
        <font-awesome-icon class="loading-icon" :icon="['fas', 'spinner']" spin/>
      </div>
      <div class="preview inner" v-if="image">
        <cld-image
          :public-id="image"
          width="180"
          height="180"
          crop="lpad"
          fetchFormat="webp"
          quality="80"
          alt="category image">
        </cld-image>
      </div>
      <div class="remove inner" v-show="image">
        <el-button @click="remove" size="mini" round type="danger">Видалити</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  model: {
    prop: 'image',
    event: 'change'
  },
  props: {
    image: String
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async handleImage(event) {
      const file = event.target.files[0]

      if (!file) return false

      this.loading = true
      /* create a reader */
      const readData = (f) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(f);
      });

      /* Read data */
      const data = await readData(file);

      /* upload the converted data */
      const response = await this.$cloudinary.upload(data, {
        folder: 'categories',
        uploadPreset: 'ml_default',
      })

      this.$emit("change", response.public_id);
      this.loading = false
    },
    remove() {
      this.$emit("change", '');
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  height: 1px;
  width: 1px;
  overflow: hidden;
  opacity: 0;
  position: absolute;
}

.uploader {
  height: 200px;
  width: 200px;
  border-radius: .5rem;
  border: 1px solid rgba($gray, .6);
  position: relative;
  cursor: pointer;
  padding: 0;
  transition: border .1s ease-in;

  &:hover {
    border-color: $primary;

    .remove {
      opacity: 1;
    }
  }
}

.field-handler {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  cursor: pointer;
  transition: color .1s ease-in;

  &:hover {
    color: $primary;
  }
}

.preview {
  border-radius: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove {
  opacity: 0;
  transition: opacity .2s ease;
  background-color: rgba($white, .25);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading {
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  &-icon {
    font-size: 2rem;
    color: $dark;
  }
}

.inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
