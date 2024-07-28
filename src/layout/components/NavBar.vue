<template>
    <van-tabbar router v-model="active">
        <van-tabbar-item icon="home-o" to="/home" >首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/list">列表</van-tabbar-item>
      </van-tabbar>
</template>

<script>
import { ref, } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};

</script>