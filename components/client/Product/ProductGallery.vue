<template>
  <div class="product-gallery d-flex flex-column">
    <div class="preview">
      <div :class="active === index ? 'active-true' : 'active-false'" v-for="(image, index) in images">
        <img :src="image.url" :alt="image.name">
      </div>
    </div>
    <div class="gallery-list">
      <div
        v-for="(image, index) in images"
        @click="handleThumbnailClick(index)"
        :class="active === index ? 'thumbnail thumbnail-active m-1' : 'thumbnail m-1'"
      >
        <img :src="image.url" :alt="image.name"/>
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  .thumbnail {
    float: left;
    width: 5rem;
    height: 5rem;
    transition: all 0.2s ease-in-out;
    border: 1px solid #e3e9ef;
    border-radius: .3125rem;
    opacity: .75;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 0.2rem;

    &:hover {
      opacity: 1;
    }

    &-active {
      border-color: $main-color;
      opacity: 1;
    }

    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: scale-down;
    }
  }
}

.preview {
  height: auto;
  width: 100%;
  padding: 1rem;
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
    z-index: 10;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: all 0.2s ease-in-out;
  }

  img {
    width: 100%;
    max-height: 500px;
    object-fit: scale-down;
  }
}

</style>
