<template>
  <transition appear name="fade">
    <div ref="selfRef">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, PropType, ref } from 'vue'
import Tether from 'tether'

export default defineComponent({
  props: {
    parentRef: {
      type: Object as PropType<HTMLElement>
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
    visible: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const selfRef = ref(null)
    const tetherRef = ref<Tether | null>(null)

    onMounted(() => {
      if (selfRef.value) {
        tetherRef.value = new Tether({
          target: props.parentRef,
          element: selfRef.value,
          attachment: props.attachment,
          targetAttachment: props.targetAttachment
        })
        tetherRef.value.position()
      }
    })

    onBeforeUnmount(() => {
      if (tetherRef.value) {
        tetherRef.value.destroy()
      }
    })

    return {
      selfRef
    }
  }
})
</script>

<style lang="postcss">
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
</style>
