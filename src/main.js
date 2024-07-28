import './assets/main.css'

import { createApp,ref } from 'vue'
import App from './App.vue'
import { Tabbar, TabbarItem,Uploader,Button,Field,CellGroup  } from 'vant'

//引入路由器
import router from './router'

// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Uploader);
app.use(Button);
app.use(Field);
app.use(CellGroup);
app.mount('#app')

