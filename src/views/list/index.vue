<template>


  <!-- <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell v-for="item in ticketList" :key="item.standardFilename" :title="item.standardFilename"
      :primaryKey="item.primaryKey" />
  </van-list> -->

  <van-collapse v-model="activeNames">
    <van-collapse-item v-for="item in ticketList" :title="item.standardFilename" :name="item.standardFilename">
    </van-collapse-item>
  </van-collapse>
  <!-- <van-cell-group inset>
  <van-field v-model="standardFileName"  required label="标准文件名" placeholder="" />
</van-cell-group>
  <van-uploader :after-read="afterRead"   
  :max-size="4 * 1024 * 1024" 
  @oversize="onOversize" 
  capture="camera"  >
    <van-button  type="primary">样本</van-button>
    <van-button  type="primary">拍照</van-button>
  </van-uploader> -->
</template>

<script setup>
import axios from 'axios';
import { showToast } from 'vant';
import { ref,onMounted } from 'vue'
const activeNames = ref([]);
const ticketList = ref([]);
onMounted(() => {
  axios.get("http://localhost:9009/list_tickets").then(function (response) {

    if (response.status === 200 && response.data.errno === 0) {
      response.data.data.forEach(element => {
        ticketList.value.push({
          standardFilename: element.standardFilename,
          createTime: element.createTime,
          primaryKey: element.id
        });
        activeNames.value.push(element.standardFilename)

      });
    }

  }).catch(function (error) {
    showToast({
      message: "数据加载失败",
      position: "top"
    })
    // 加载状态结束
    console.log(error)
  });
})




</script>