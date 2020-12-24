<template>
  <div class="slider-wrap">
    <div class="container-xxl">

      <slider/>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/ui/Slider";

export default {
  components: {Slider},
}
</script>

<style lang="scss">
.slider-wrap {
  background-color: #F6F9FC;
  padding: 3rem 0;
}
</style>
