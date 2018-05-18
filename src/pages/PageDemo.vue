<template>
  <div>
    <button @click="handleClick">Click</button>
    <child @pfn="handlePfn"></child>
    <group>
      <x-switch :title="('Basic Usage')" v-model="show1"></x-switch>
      <x-switch :title="('Android Theme')" v-model="show7"></x-switch>
    </group>
    <actionsheet
      v-model="show1"
      :menus="menus1"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"></actionsheet>

    <actionsheet
      v-model="show7"
      :menus="menu7"
      theme="android"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')">
    </actionsheet>
  </div>
</template>

<script scoped>
import Child from '@/components/Child';
import { TransferDom, Actionsheet, Group, XSwitch, Toast } from 'vux';

export default{
  props: [],
  data() {
    return {
      show1: false,
      menus1: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline',
      },
      show7: false,
      menu7: {
        menu1: '北京烤鸭',
        menu2: '陕西油泼面',
        menu3: '西安肉夹馍',
      },
    };
  },
  methods: {
    handleClick() {
      console.log(1);
    },
    handlePfn() {
      console.log('from child');
    },
    click(key) {
      console.log(key);
    },
    log(str) {
      console.log(str);
    },
  },
  components: {
    Child,
    Actionsheet,
    Group,
    XSwitch,
    Toast,
  },
  directives: {
    TransferDom,
  },
};
</script>

<style scoped></style>
