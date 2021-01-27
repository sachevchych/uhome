<template>
  <div class="product-gallery d-flex flex-column flex-sm-row-reverse mb-3">
    <div class="preview p-1 ml-sm-2">
      <div :class="active === index ? 'active-true' : 'active-false'" v-for="(image, index) in images">
        <nuxt-picture
          class="preview-img-wrapper"
          :src="image.url"
          fit="contain"
          height="636"
          :alt="image.name"
        />
      </div>
    </div>
    <div
      class="gallery-list d-flex flex-wrap justify-content-center align-items-center flex-sm-nowrap flex-sm-column justify-content-sm-start">
      <div
        v-for="(image, index) in images"
        @click="handleThumbnailClick(index)"
        :class="active === index ? 'thumbnail thumbnail-active m-1' : 'thumbnail m-1'"
      >
        <nuxt-img
          class="thumbnail-img-wrapper"
          :src="image.url"
          :alt="image.name"
          fit="contain"
          width="68"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    handleThumbnailClick(imageIndex) {
      this.active = imageIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.product-gallery {
  background-color: #ffffff;
}

.gallery-list {
  .thumbnail {
    float: left;
    width: 80px;
    height: 80px;
    transition: all 0.2s ease-in-out;
    border: 1px solid #e3e9ef;
    border-radius: .3125rem;
    opacity: .75;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 6px;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &-active {
      border-color: $main-color;
      opacity: 1;
    }

    &-img-wrapper {
      width: auto;
      height: auto;
      max-height: 68px;
      max-width: 68px;
    }
  }
}

.preview {
  height: auto;
  width: 100%;
  position: relative;

  .active-false {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .active-true {
    position: relative;
    opacity: 1;
    z-index: 2;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: all 0.2s ease-in-out;
  }

  &-img-wrapper {
    height: auto;
    max-height: 636px;
    width: 100%;
  }
}

</style>
