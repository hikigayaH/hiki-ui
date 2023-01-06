import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'

const colors = ['black', 'gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
const size = ['small', 'medium', 'large']
const safelist = [
  ...colors.map(v => `text-${v}-500`),
  ...colors.map(v => `bg-${v}-100`),
  ...colors.map(v => `bg-${v}-500`),
  ...colors.map(v => `hover:bg-${v}-400`),
  ...colors.map(v => `hover:bg-${v}-500`),
  ...colors.map(v => `hover:border-${v}-400`),
  ...colors.map(v => `border-${v}-500`),
  ...size.map((v, i) => `px-${(i + 1) * 2}`),
  ...size.map((v, i) => `py-${i + 1}`),
  'text-sm',
  'text-base',
  'text-lg',
  'p-3',
  ...['search', 'edit', 'check', 'message', 'star-off', 'delete', 'add', 'share'].map(
    v => `i-ic-baseline-${v}`
  )
]

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()]
  })
