<template>
  <section class="item-wrapper" :style="styleObj">
    <div class="item-label">
      <slot name="label"></slot>
    </div>
    <div class="item-cont">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'item',
  props: {
    styleObj: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>
.item-wrapper {
  display: flex;
  font-size: 1rem;
  height: 32px;
  line-height: 32px;
  margin-bottom: 15px;
  vertical-align: middle;
  text-align: left;

  .item-label {
    flex: 0 0 6rem;
    font-weight: normal;
    white-space: nowrap;
    color: #333;
  }

  .item-cont {
    flex: 1;
    color: #666;
  }
}
</style>