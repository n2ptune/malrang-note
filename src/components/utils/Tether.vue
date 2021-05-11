<template>
  <transition appear name="fade">
    <div ref="selfRef" role="menu" class="custom-tether-base">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref } from 'vue'
import Tether from 'tether'

export default defineComponent({
  emits: ['update:visible'],
  props: {
    parentRef: {
      type: Object as PropType<Element>,
      required: true
    },
    attachment: {
      type: String,
      required: false,
      default: 'top center'
    },
    targetAttachment: {
      type: String,
      required: false,
      default: 'bottom center'
    },
    offset: {
      type: String,
      required: false,
      default: '-10px 0'
    },
    visible: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props, { emit }) {
    const selfRef = ref<HTMLElement | null>(null)
    const tetherRef = ref<Tether | null>(null)
    const eventHandler = (e: MouseEvent) => {
      if (e.target !== selfRef.value && e.target != props.parentRef) {
        emit('update:visible', false)
      }
    }

    onMounted(() => {
      if (selfRef.value) {
        tetherRef.value = new Tether({
          target: props.parentRef,
          element: selfRef.value,
          attachment: props.attachment,
          targetAttachment: props.targetAttachment,
          offset: props.offset,
          optimizations: {
            moveElement: false
          }
        })
        tetherRef.value.position()
        /**
         * Related to timing rendered element after resolve transition
         */
        setTimeout(() => {
          document.addEventListener('click', eventHandler)
        }, 0)
      }
    })

    onUnmounted(() => {
      tetherRef.value?.destroy()
      document.removeEventListener('click', eventHandler)
    })

    return {
      selfRef
    }
  }
})
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-500;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}

.custom-tether-base {
  @apply bg-white text-brand-black-tether shadow-xl p-4 rounded break-all;
}
</style>
