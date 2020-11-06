<template>
  <div class="page-container container">
    <div class="header">
      <h1>{{title}}</h1>
      <slot name="header"></slot>
    </div>

    <div class="content">
      <slot name="content"></slot>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PageContainer",
  props: {
    title: String
  }
}
</script>

<style scoped>
.page-container {
  padding: .5rem 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: .5rem;
}

.content {
  background-color: #ffffff;
  border-radius: .5rem;
  padding: 1rem 2rem;
}

.header h1 {
  font-size: 18px;
  font-weight: 500;
}

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #EBEDF3;
  padding: 1rem 0;
}

</style>
