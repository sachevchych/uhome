<template>
  <div class="specs" v-if="specs.length">
    <h2 class="specs-title">
      Характеристики
    </h2>
    <div>
      <ul class="specs-list">
        <li v-for="spec in specs" class="specs-item">
          <span class="specs-item-name">{{ spec.name }}:</span>
          <span class="specs-item-value">{{ spec.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    properties: {
      type: Array,
      required: true
    }
  },
  computed: {
    specs() {
      const specs = []

      this.properties.forEach(item => {
        if (item.property.main === true) {
          if (item.property.type === 'list') {
            const $value = []

            item.property.options.forEach(option => {
              item.value.forEach(value => {
                if (option.id === value) $value.push(option.name)
              })
            })

            specs.push({
              name: item.property.name,
              value: item.property.multiple ? $value.join(', ') : $value[0]
            })
          } else {
            specs.push({
              name: item.property.name,
              value: item.value.join()
            })
          }
        }
      })

      return specs
    }
  }
}
</script>

<style lang="scss" scoped>
.specs {
  &-title {
    font-size: 1.2rem;
    margin-bottom: .75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #373f50;
  }

  &-list {
    padding-left: 0;
    padding-bottom: .5rem;
    font-size: .875rem;
  }

  &-item {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e3e9ef;
    margin-bottom: .6rem;
    padding-bottom: .3rem;

    &-name {
      color: #7d879c;
    }

    &-value {
      color: #4b566b;
      text-align: right;
      max-width: 70%;
    }
  }
}

</style>
