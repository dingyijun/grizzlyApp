<template>
  <div class="gzBodyer">
    <div v-if="hasHeader" class="gzHeader" :style="{height:headerHeight}">
      <slot name="header"></slot>
    </div>
    <div class="gzContent">
      <slot></slot>
    </div>
    <div v-if="hasFooter" class="gzFooter" :style="{height:footerHeight}">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerHeight: {
      type: String,
      default: '50px'
    },
    footerHeight: {
      type: String,
      default: '50px'
    }
  },
  computed: {
    hasHeader () {
      return !!this.$slots.header;
    },
    hasFooter () {
      return !!this.$slots.footer;
    }
  },
  methods: {},
  mounted () { }
};
</script>
<style lang="less" scoped>
.gzBodyer {
  height: 100%;
  display: flex;
  flex-direction: column;
  .gzContent{
    flex: 1;
  }
}
</style>
