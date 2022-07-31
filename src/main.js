// 引入全域樣式
import './global.css'
// 引入 Taiwan Icon
import './assets/font/twicon.css'
// 引入 App.svelte
import App from './App.svelte'

// 將 App 綁在 index.html 的 #app 上
const app = new App({
  target: document.getElementById('app')
})

export default app
