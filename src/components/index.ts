import { defineComponent, h, Transition } from 'vue';

export const Vue3SmoothSlideDown = defineComponent({
    props: {
        modelValue: {
            type: Boolean,
            default: true,
        },
        tag: {
            type: String,
            default: 'div',
        },
    },
    setup(props, { slots }) {
        function enterTransitionMy(element: Element, done: () => void) {
            const HTMLElement = element as HTMLElement
            const { height } = getComputedStyle(element)
            HTMLElement.style.overflow = 'hidden'
            const animation = HTMLElement.animate([{ height: '0px'}, {height: height}], 500)
            HTMLElement.style.height = ''
            animation.onfinish = () => {
                done()
            }
        }

        function leaveTransitionMy(element: Element, done: () => void) {
            const HTMLElement = element as HTMLElement
            const { height } = getComputedStyle(element)
            const animation = HTMLElement.animate([{height: height}, { height: '0px'}], 500)
            animation.onfinish = () => {
                done()
            }
        }
        return () => {
            return h(
                    Transition,
                    {
                        css: false,
                        onEnter: enterTransitionMy,
                        onLeave: leaveTransitionMy, 
                    },
                    () => {
                        return props.modelValue ?
                            h(
                                props.tag, 
                                { class: 'Vue3SmoothSlideDown' }, 
                                slots
                            )
                            : null
                    }
                )
        }
    }
})