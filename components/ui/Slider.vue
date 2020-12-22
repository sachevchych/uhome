<template>
  <div class="wrap">
    <div class="slider">
      <div v-for="(color, index) in sliders"
           :class="['slide', classes[index]].join(' ')"
           :style="`background-color: ${color}`">
      </div>
    </div>
    <div class="switch">
      <div class="switch-dot"></div>
      <div class="switch-dot"></div>
      <div class="switch-dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      sliders: ['#6f42c1', '#4e54c8', '#d62b70', '#ef8114']
    }
  },
  computed: {
    classes() {
      const classes = []
      for (let i = 0; i < this.sliders.length; i++) {
        if (i === this.active) {
          classes.push('center')
        } else if (i < this.active) {
          classes.push('left')
        } else {
          classes.push('right')
        }
      }
      return classes
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
}

.slide {
  height: 100%;
  display: block;
  position: absolute;
  width: 100%;
  border-radius: .5rem;
  transition: all .5s ease-in-out;
}

.switch {
  background-color: #959cb6;
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: center;
  padding: .5rem;

  &-dot {
    margin: 0 .4rem;
    
    height: .5rem;
    width: .5rem;
    background-color: rgba(255, 255, 255, 0.8);
  }
}

.left {
  left: -100%;
}

.center {
  left: 0;
}

.right {
  left: 100%;
}
</style>
