<template>
  <UIFrame>
    <UIHeader
      slot="header"
      color="#067BDA"
      textColor="#ffffff"
      :z-depth="1"
      :title="title">
      <Button
        icon
        slot="left"
      >
        <Icon
          value=":icon-left"
          :size="24"
        />
      </Button>
      <Button
        icon
        slot="right"
      >
        <Icon
          value=":icon-bars"
          :size="24"
        />
      </Button>
    </UIHeader>
    <slot></slot>
  </UIFrame>
</template>

<script>
import { Icon, Button } from 'muse-ui';
import UIFrame from './UIFrame';
import UIHeader from './UIHeader';

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    UIFrame,
    UIHeader,
    Button,
    Icon
  },
  methods: {},
  mounted () { }
};
</script>
<style lang="less" scoped>
.header{
  height: 50px;
  .left{
    height: 36px;
    padding: 0 6px;
  }
}
</style>
