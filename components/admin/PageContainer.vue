<template>
  <div class="container-xxl">
    <div class="header">
      <h1>{{title}}</h1>
      <slot name="header"></slot>
    </div>

    <div :class="background ? 'content' : ''">
      <slot name="content"></slot>
    </div>

    <div v-if="footer" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContainer",
  props: {
    title: {
      type: String,
      default: 'Заголовок не вказано'
    },
    background: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: .5rem;

  h1 {
    font-size: 18px;
    font-weight: 500;
  }
}

.content {
  border-radius: .5rem;
  padding: 1rem 2rem;
  background-color: #ffffff;
}

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: .5rem;
  background-color: #ffffff;
  margin-top: 1rem;
  padding: 1rem 2rem;
}
</style>
