// 引入全域樣式
import './global.css'
// 引入 Taiwan Icon
import './assets/font/twicon.css'
// 引入 App.svelte
import App from './App.svelte'
// 引入 i18n
import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import zhTW from '../locales/zh-TW.json'
import en from '../locales/en.json'

addMessages('zh-TW', zhTW);
addMessages('en', en);

init({
  fallbackLocale: 'zh-TW',
  initialLocale: getLocaleFromNavigator(),
});

// 將 App 綁在 index.html 的 #app 上
const app = new App({
  target: document.getElementById('app')
})

export default app
