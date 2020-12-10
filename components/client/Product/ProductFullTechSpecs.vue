<template>
  <div class="specs">
    <h2 class="specs-title">
      Характеристики <small>{{ product.brand.name }} {{ product.model }}</small>
    </h2>
    <div class="d-flex" v-if="!product.specs.length">
      <span class="empty-text">
        Характеристики до цього товару поки що відсутін. Але зовсім скоро ми це виправимо, а поки ви можете зателефонувати до нас і ми проконсультуємо Вас по цьому товару.
      </span>
    </div>
    <div v-if="product.specs.length" class="row gx-5">
      <ul class="specs-list col-12 col-lg-6" v-for="group in specs" v-if="group.specs.length">
        <li class="specs-group-title">
          {{ group.name }}
        </li>
        <template v-for="prop in group.specs">
          <li class="specs-item">
            <span class="specs-item-name">{{ prop.name }}:</span>
            <span class="specs-item-value">{{ prop.value }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    specs() {
      const specs = []
      let index = -1

      if (this.product.category.properties) {
        this.product.category.properties.forEach(categoryProp => {
          if (categoryProp.type === 'divider') {
            index = index + 1
            specs.push({
              name: categoryProp.name,
              id: categoryProp._id,
              specs: []
            })
          } else {
            const specProp = this.product.specs.find(spec => spec.property._id === categoryProp._id)

            if (specProp) {
              let $specProp = {}
              if (specProp.property.type === 'list') {
                const $value = []

                specProp.property.options.forEach(option => {
                  specProp.value.forEach(value => {
                    if (option.id === value) $value.push(option.name)
                  })
                })

                $specProp = {
                  id: specProp.property._id,
                  name: specProp.property.name,
                  value: specProp.property.multiple ? $value.join(', ') : $value[0]
                }
              } else {
                $specProp = {
                  id: specProp.property._id,
                  name: specProp.property.name,
                  value: specProp.value.join()
                }
              }

              specs[index].specs.push($specProp)
            }
          }
        })
      }

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

    small {
      color: #7d879c;
      font-size: 1.1rem;
      font-weight: 400;
    }
  }

  &-list {
    padding-bottom: .3rem;
    padding-top: .3rem;
    margin: 0;
    font-size: .875rem;
  }

  &-group-title {
    font-size: 1.0425rem;
    margin-top: .2rem;
    margin-bottom: .75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #373f50;
    list-style: none;
  }

  &-item {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e3e9ef;
    margin-bottom: .6rem;
    padding-bottom: .3rem;

    &:last-child {
      border-bottom: none;
    }

    &-name {
      color: #7d879c;
    }

    &-value {
      color: #4b566b;
      text-align: right;
    }
  }
}

.empty-text {
  color: #7d879c;
  margin: 0 0 2rem;
}

</style>
