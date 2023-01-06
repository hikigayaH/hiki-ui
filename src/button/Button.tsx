import { defineComponent, PropType } from 'vue'
import 'uno.css'
export type ISize = 'small' | 'medium' | 'large'
export type IColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue' // 设定默认颜色
  },
  size: {
    type: String as PropType<ISize>,
    default: 'medium' // 设定默认大小
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  // 这个不一定需要
  icon: {
    type: Boolean,
    default: false
  }
}
const size = {
  small: {
    x: 1,
    y: 2,
    text: 'sm'
  },
  medium: {
    x: 2,
    y: 4,
    text: 'base'
  },
  large: {
    x: 3,
    y: 6,
    text: 'lg'
  }
}
export default defineComponent({
  name: 'SButton',
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
        ${props.icon ? '' : `py-${size[props.size].x} px-${size[props.size].y}`}
        ${props.round ? 'rounded-full' : 'rounded-lg'}
        shadow-md
        bg-${props.color}-${props.plain ? '100' : '500'}
        border-${props.color}-500
        border-solid
        text-${size[props.size].text}
        hover:border-${props.color}-${props.plain ? '500' : '400'}
        ${props.plain ? `text-${props.color}-500` : 'text-white'}
        transition duration-300 ease-in-out transform hover:scale-105
        cursor-pointer
        hover:bg-${props.color}-${props.plain ? '500' : '400'}
        hover:text-white
        m-1
      `}
      >
        {slots.default ? slots.default() : ''}
      </button>
    )
  }
})
