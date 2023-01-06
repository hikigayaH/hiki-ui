import Button from '../index'

import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
// 测试分组
describe('Button', () => {
  // mount
  test('mount  @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button'
      }
    })

    // 断言
    expect(wrapper.text()).toBe('Button')
  })
  test('red', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button'
      },
      props: {
        color: 'red'
      }
    })
    expect(
      wrapper
        .classes()
        .map(v => v.replace('\n', ''))
        .includes('bg-red-500')
    ).toBe(true)
  })
})
