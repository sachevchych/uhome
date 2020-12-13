<template>
  <div class="row row-cols-1">
    <div class="col rating">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center rating-label-left">
          <span>5</span>
          <font-awesome-icon :icon="['fas', 'star']" class="rating-icon"></font-awesome-icon>
        </div>
        <div class="w-100 mx-2">
          <el-progress :percentage="80" color="#20c997" :show-text="false"></el-progress>
        </div>
        <div class="rating-label-right">
          <span>42</span>
        </div>
      </div>
    </div>
    <div class="col rating">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center rating-label-left">
          <span>4</span>
          <font-awesome-icon :icon="['fas', 'star']" class="rating-icon"></font-awesome-icon>
        </div>
        <div class="w-100 mx-2">
          <el-progress :percentage="60" color="#28a745" :show-text="false"></el-progress>
        </div>
        <div class="rating-label-right">
          <span>16</span>
        </div>
      </div>
    </div>
    <div class="col rating">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center rating-label-left">
          <span>3</span>
          <font-awesome-icon :icon="['fas', 'star']" class="rating-icon"></font-awesome-icon>
        </div>
        <div class="w-100 mx-2">
          <el-progress :percentage="45" color="#ffc107" :show-text="false"></el-progress>
        </div>
        <div class="rating-label-right">
          <span>9</span>
        </div>
      </div>
    </div>
    <div class="col rating">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center rating-label-left">
          <span>2</span>
          <font-awesome-icon :icon="['fas', 'star']" class="rating-icon"></font-awesome-icon>
        </div>
        <div class="w-100 mx-2">
          <el-progress :percentage="23" color="#fd7e14" :show-text="false"></el-progress>
        </div>
        <div class="rating-label-right">
          <span>4</span>
        </div>
      </div>
    </div>
    <div class="col rating">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center rating-label-left">
          <span>1</span>
          <font-awesome-icon :icon="['fas', 'star']" class="rating-icon"></font-awesome-icon>
        </div>
        <div class="w-100 mx-2">
          <el-progress :percentage="10" color="#dc3545" :show-text="false"></el-progress>
        </div>
        <div class="rating-label-right">
          <span>2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.rating {
  color: #4B566B;
  font-size: 1rem;
  margin-bottom: .6rem;

  &:last-child {
    margin-bottom: 0;
  }

  &-label {
    &-left {
      width: 1.9rem;
      display: flex;
      justify-content: space-between;
    }

    &-right {
      width: 1.9rem;
      display: flex;
      justify-content: flex-end;
    }
  }

  &-icon {
    font-size: .75rem;
  }
}
</style>
