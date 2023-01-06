import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JSXButton',
  render() {
    return <button onClick={() => this.click()}>TSX Button</button>
  },
  methods: {
    click() {
      console.log(this)
    }
  }
})
