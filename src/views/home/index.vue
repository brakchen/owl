<template>
<van-cell-group inset>
  <van-field v-model="standardFileName"  required label="标准文件名" placeholder="" />
</van-cell-group>
  <van-uploader :after-read="afterRead"   
  :max-size="4 * 1024 * 1024" 
  @oversize="onOversize" 
  capture="camera"  >
    <van-button  type="primary">样本</van-button>
    <van-button  type="primary">拍照</van-button>
  </van-uploader>
</template>

<script setup>

import { ref } from 'vue'
const standardFileName = ref('')
const afterRead = (file)=>{
    console.log(standardFileName.value)
    console.log(file)
}
</script>