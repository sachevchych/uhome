<template>
  <PageContainer title="Редагування властивості">
    <template v-slot:header>
      Кнопка видалення властивості
    </template>
    <template v-slot:content>
      <PropertyFrom :propertyId="$route.params.id"/>
    </template>
  </PageContainer>
</template>

<script>
import PropertyFrom from "@/components/admin/Property/PropertyFrom";
import PageContainer from "@/components/admin/PageContainer";

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {PageContainer, PropertyFrom}
}
</script>

<style scoped>

</style>
