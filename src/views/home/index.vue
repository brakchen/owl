<template>

  <van-button type="primary" block @click="showPopup">创建工单</van-button>
  <!-- 拉取工单 -->
  <van-popup v-model:show="show" :style="{ padding: '64px' }" closeable>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="formStandardFilename" name="formStandardFilename" label="标准文件名"
            :rules="[{ required: true, message: '请填标准文件名' }]" />
          <van-uploader :after-read="afterRead" :max-size="4 * 1024 * 1024"  capture="camera"/>

        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
    </van-form>
  </van-popup>

  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell v-for="item in ticketList" :key="item.standardFilename" :title="item.standardFilename"
      :primaryKey="item.primaryKey" />
  </van-list>



</template>

<script setup>
import axios from 'axios';
import { showToast } from 'vant';
import { ref } from 'vue'
// const standardFileName = ref('')
let tmpFile;
const afterRead = (file) => {
  tmpFile = file.file
  console.log(file.file)
}
const formStandardFilename = ref('')

const show = ref(false);
const ticketList = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {

  axios.get("http://localhost:9009/list_tickets").then(function (response) {

    if (response.status === 200 && response.data.errno === 0) {
      response.data.data.forEach(element => {
        ticketList.value.push({
          standardFilename: element.standardFilename,
          createTime: element.createTime,
          primaryKey: element.id
        });
      });
    }
    finished.value = true;
  }).catch(function (error) {
    showToast({
      message: "数据加载失败",
      position: "top"
    })
    // 加载状态结束
    loading.value = true;
    console.log(error)
  });
};

const showPopup = () => {show.value = true;};

const onSubmit = (values) => {
  let formData = new FormData();
  console.log(tmpFile)
  formData.append('file', tmpFile);
  formData.append('standardFilename', values['formStandardFilename']);
  axios.post("http://localhost:9009/create_ticket", formData,{
    headers: {
        'Content-Type': 'multipart/form-data', 
    }
}).then(function (response) {
    if (response.status === 200 && response.data.errno === 0) {
      showToast({
        message: "提交成功",
        position: "top"
      })
    }
  }).catch(function (error) {
    showToast({
      message: "提交失败",
      position: "top"
    })
    // 加载状态结束
    console.log(error)
  });


}

</script>