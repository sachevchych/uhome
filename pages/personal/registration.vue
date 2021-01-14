<template>
  <page-template :breadcrumbs="breadcrumbs" title="Реєстрація особистого кабінету">
    <template slot="article">
      <div class="d-flex align-items-center justify-content-center">
        <div class="registration">
          <Registration/>
        </div>
      </div>
    </template>
  </page-template>
</template>

<script>
import PageTemplate from "@/components/client/Pages/PageTemplate";

export default {
  name: "registration",
  components: {PageTemplate},
  data() {
    return {
      breadcrumbs: [
        {label: 'Особистий кабінет', url: '/personal/'},
        {label: 'Реєстрація', url: ''}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.registration {
  background-color: #ffffff;
  border-radius: $border-radius-lg;
  padding: 2rem;
  max-width: 600px;
  box-shadow: $shadow-lg;
}
</style>
