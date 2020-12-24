<template>
  <div class="wrap" @mouseover="stopTimer" @mouseout="setTimer">
    <div class="slider">
      <div v-for="(color, index) in sliders"
           class="slide"
           :style="`left: ${classes[index]}%`">
        <div class="row h-100">
          <div class="col-md-5 order-md-2 d-flex align-items-center justify-content-center">
            <img class="slide-image" src="https://kernau.com.ua/upload/iblock/85b/85b7752013fff6a25cd5802f9c052d73.png" alt="image">
          </div>
          <div class="col-md-7 order-md-1 d-flex align-items-center justify-content-center">
            <div class="p-2">
              <h2>Чайник KERNAU</h2>
              <h1>Супер пропозиція за супер ціною!</h1>
              <h3>Тільки зараз, не пропусти свій шанс</h3>
              <el-button type="primary" round>Переглянути</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="switch">
      <div v-for="(color, index) in sliders"
           :class="['switch-dot', index === active ? 'switch-dot-active' : ''].join(' ')"
           @click="toggleActive(index)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      sliders: ['#6f42c1', '#4e54c8', '#d62b70', '#ef8114'],
      timer: '',
      mouseDown: false,
      zeroPosition: 0
    }
  },
  computed: {
    classes() {
      const classes = []
      for (let i = 0; i < this.sliders.length; i++) {
        if (i === this.active) {
          classes.push('0')
        } else if (i < this.active) {
          classes.push('-100')
        } else {
          classes.push('100')
        }
      }
      return classes
    }
  },
  methods: {
    toggleActive(index) {
      this.active = index
    },
    nextSlide() {
      if (this.sliders.length - 1 === this.active) {
        this.active = 0
      } else {
        this.active = this.active + 1
      }
    },
    setTimer() {
      this.timer = setInterval(() => this.nextSlide(), 5000)
    },
    stopTimer() {
      clearInterval(this.timer)
    }
  },
  mounted() {
    this.setTimer()
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  color: #373f50;
}

.slider {
  width: 100%;
  min-height: 500px;
  height: auto;
  overflow: hidden;
  position: relative;
  border-radius: $border-radius-lg;
}

.slide {
  height: 100%;
  display: block;
  position: absolute;
  width: 100%;
  transition: all .5s ease-in-out;

  &-image {
    height: 70%;
    width: 70%;
    object-fit: scale-down;
  }

}

.switch {
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: center;
  padding: .5rem;
  position: absolute;
  bottom: 1rem;

  &-dot {
    transition: all .5s ease-in-out;
    margin: 0 .3rem;
    border-radius: 3px;
    height: 6px;
    width: 6px;
    background-color: #b6bcc5;
    box-sizing: border-box;
    cursor: pointer;
  }

  &-dot-active {
    width: 24px;
    background-color: $main-color;
  }
}
</style>
