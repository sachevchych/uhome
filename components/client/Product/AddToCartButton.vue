<template>
  <button class="btn" type="button">
    Додати в кошик
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  width: 100%;
  margin-bottom: 1.125rem;
  padding: .625rem 1.375rem;
  color: #ffffff;
  background-color: $primary;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba($primary, 0.9);
  border: 0;
  font-size: .9375rem;
  line-height: 1.5;
  border-radius: .3125rem;
  transition: background-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: $primary-light-1;
    box-shadow: 0 0.5rem 1.125rem -0.5rem rgba($primary, 0.2);
  }
}
</style>
