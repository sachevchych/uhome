<template>
  <div class="product-rating">
    <template v-for="(star, index) in this.stars">
      <font-awesome-icon :icon="star" class="icon" :key="index"></font-awesome-icon>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number
    }
  },
  computed: {
    stars() {
      if (this.rating !== false) {
        const stars = []
        let i = 1

        do {
          if (i <= this.rating) {
            stars.push(['fas', 'star'])
          } else if (i > this.rating && i + 0.5 < this.rating) {
            stars.push(['fas', 'star-half-alt'])
          } else if (i + 0.5 > this.rating && i + 1 < this.rating) {
            stars.push(['fas', 'star-half-alt'])
          } else {
            stars.push(['far', 'star'])
          }
          i++
        } while (i <= 5)

        return stars
      } else {
        return [
          ['fas', 'star-half-alt'],
          ['fas', 'star-half-alt'],
          ['fas', 'star-half-alt'],
          ['fas', 'star-half-alt'],
          ['fas', 'star-half-alt']
        ]
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.product-rating {

}

.icon {
  color: #fea569;
  font-size: .9rem;
}
</style>
