import { createApp } from 'vue/dist/vue.esm-bundler.js'
import SmartyUI, { SButton, SFCButton, JSXButton } from './entry'

createApp({
  template: `
      <div>
      <SButton color="blue" plain>蓝色按钮</SButton>
      <SButton color="green" plain>绿色按钮</SButton>
      <SButton color="gray" plain>灰色按钮</SButton>
      <SButton color="yellow" plain>黄色按钮</SButton>
      <SButton color="red" plain>红色按钮</SButton>
      </div>
      <div>
      <SButton size="large" color="blue">蓝色按钮</SButton>
      <SButton size="large" color="green">绿色按钮</SButton>
      <SButton size="large" color="gray">灰色按钮</SButton>
      <SButton size="large" color="yellow">黄色按钮</SButton>
      <SButton size="large" color="red">红色按钮</SButton>
      </div>
      <div>
      <SButton round size="small" color="blue">蓝色按钮</SButton>
      <SButton round size="small" color="green">绿色按钮</SButton>
      <SButton round size="small" color="gray">灰色按钮</SButton>
      <SButton round size="small" color="yellow">黄色按钮</SButton>
      <SButton round size="small" color="red">红色按钮</SButton>
      </div>
      <div>
      <SButton plain size="small" color="blue" round><i class="i-ic-baseline-search p-3"></i></SButton>
      <SButton plain size="small" color="green"><i class="i-ic-baseline-search p-3"></i></SButton>
      <SButton plain color="gray"><i class="i-ic-baseline-search p-3"></i></SButton>
      <SButton plain color="yellow"><i class="i-ic-baseline-search p-3"></i></SButton>
      <SButton plain color="red"><i class="i-ic-baseline-search p-3"></i></SButton>
      </div>
  `
})
  .use(SmartyUI)
  .mount('#app')
