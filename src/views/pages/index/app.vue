<template>
<div>
  <Button @click="handleClick">点击</Button>
  <Dialog title="弹窗" width="360" :open="isOpen">
     <h1>{{demo}}</h1>
    <Button color="primary" @click="isOpen=false">关闭</Button>
  </Dialog>
</div>
</template>

<script>
import service from 'service';
import { Button, Dialog } from 'muse-ui';

export default {
  data () {
    return {
      demo: 'demo',
      isOpen: false
    };
  },
  components: {
    Button,
    Dialog
  },
  methods: {
    async query () {
      const response = await service.demo({demo: 'this is a demo'});
      console.log(response);
      switch (response.code) {
        case 0:
          this.demo = response.result.demo;
          break;
        default:
          break;
      }
    },
    handleClick () {
      this.isOpen = true;
    }
  },
  mounted () {
    this.query();
  }
};
</script>
<style lang="less">
@import url('../../../assets/css/base.less');
@main: #0096ff;
h1{
  color: @main;
}
</style>
