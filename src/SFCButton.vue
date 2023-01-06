<template>
  <button @click="click">SFC Button</button>
</template>

<script lang="ts">
export default {
  name: 'SFCButton',
  methods: {
    click() {
      console.log(this)
    },
    test() {
      console.log('test')
    }
  }
}
</script>
