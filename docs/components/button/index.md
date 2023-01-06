# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <SButton color="blue">主要按钮</SButton>
    <SButton color="green">绿色按钮</SButton>
    <SButton color="gray">灰色按钮</SButton>
    <SButton color="yellow">黄色按钮</SButton>
    <SButton color="red">红色按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton color="blue" plain>朴素按钮</SButton>
    <SButton color="green" plain>绿色按钮</SButton>
    <SButton color="gray" plain>灰色按钮</SButton>
    <SButton color="yellow" plain>黄色按钮</SButton>
    <SButton color="red" plain>红色按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton size="small" plain>小按钮</SButton>
    <SButton size="medium" plain>中按钮</SButton>
    <SButton size="large" plain>大按钮</SButton>
  </div>
  <div style="margin-bottom:20px;">
    <SButton size="small" color="blue" round plain
      ><i class="i-ic-baseline-search p-3"></i>搜索按钮</SButton
    >
    <SButton size="small" color="green" round plain
      ><i class="i-ic-baseline-edit p-3"></i>编辑按钮</SButton
    >
    <SButton size="small" color="gray" round plain
      ><i class="i-ic-baseline-check p-3"></i>成功按钮</SButton
    >
    <SButton size="small" color="yellow" round plain
      ><i class="i-ic-baseline-message p-3"></i>提示按钮</SButton
    >
    <SButton size="small" color="red" round plain
      ><i class="i-ic-baseline-delete p-3"></i>删除按钮</SButton
    >
  </div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo

```vue
<template>
  <div class="flex flex-row">
    <SButton plain size="small"><i class="i-ic-baseline-edit p-3"></i></SButton>
    <SButton plain size="small"><i class="i-ic-baseline-delete p-3"></i></SButton>
    <SButton plain size="small"><i class="i-ic-baseline-check p-3"></i></SButton>
    <SButton round plain size="small"><i class="i-ic-baseline-search p-3"></i>搜索</SButton>
  </div>
</template>
```

:::
