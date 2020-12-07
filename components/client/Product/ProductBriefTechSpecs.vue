<template>
  <div class="specs">
    <h2 class="specs-title">
      Характеристики
      <small v-if="type === 'full'">{{ product.brand.name }} {{ product.model }}</small>
    </h2>
    <div v-if="type === 'briefly'">
      <ul class="specs-list">
        <li v-for="prop in properties" v-if="prop.main" class="specs-item">
          <span class="specs-item-name">{{ prop.name }}:</span>
          <span class="specs-item-value">{{ prop.value }}</span>
        </li>
      </ul>
    </div>
    <div v-else-if="type === 'full'">
      <ul class="specs-list">
        <template v-for="prop in properties">
          <li class="specs-item" v-if="prop.type === 'property'">
            <span class="specs-item-name">{{ prop.name }}:</span>
            <span class="specs-item-value">{{ prop.value }}</span>
          </li>
          <li v-else class="specs-group-title">
            {{ prop.name }}
          </li>
        </template>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProductBriefTechSpecs",
  props: {
    product: {
      type: Object,
      required: true
    },
    type: {
      type: String, /* full, briefly */
      default: 'full'
    }
  },
  computed: {
    properties() {
      const result = []
      this.product.category.properties.forEach(categoryProperty => {
        if (categoryProperty.type === 'divider') {
          result.push({...categoryProperty})
        } else {
          this.product.specs.forEach(productProperty => {
            if (categoryProperty._id === productProperty.property._id) {
              if (productProperty.value) {
                let value = []

                if (productProperty.property.type === 'list') {
                  productProperty.value.forEach(specValue => {
                    const option = productProperty.property.options.find(option => option.id === specValue)
                    value.push(option.name)
                  })
                } else {
                  value = productProperty.value
                }

                result.push({
                  _id: productProperty.property._id,
                  type: categoryProperty.type,
                  name: productProperty.property.name,
                  value: value.join(', '),
                  main: !!categoryProperty.main
                })
              }
            }
          })
        }
      })
      return result
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
    padding-left: 0;
    padding-bottom: .5rem;
    font-size: .875rem;
  }

  &-group-title {
    font-size: 1.0425rem;
    margin-top: 1.4rem;
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
