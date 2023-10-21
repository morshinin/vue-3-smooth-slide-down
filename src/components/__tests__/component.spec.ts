import { mount } from '@vue/test-utils'
import { Vue3SmoothSlideDown } from '..'
import { it, expect } from 'vitest'

it('mounts and unmounts in response to v-model', async () => {
    const wrapper = mount(Vue3SmoothSlideDown, {
        props: {
            modelValue: false
        }
    })

    expect(wrapper.find('.Vue3SmoothSlideDown').exists()).toBeFalsy()
    await wrapper.setProps({ modelValue: true })
    expect(wrapper.find('.Vue3SmoothSlideDown').exists()).toBeTruthy()
    await wrapper.setProps({ modelValue: false })
    expect(wrapper.find('.Vue3SmoothSlideDown').exists()).toBeFalsy()
})