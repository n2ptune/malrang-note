import { ref } from 'vue'

export const useTether = () => {
  const parentRef = ref<Element | null>(null)
  const visible = ref(false)
  const visibleHandler = (value: boolean) => {
    visible.value = value
    if (parentRef.value) {
      parentRef.value.removeChild(
        parentRef.value.querySelector('.tether-target-marker') as Element
      )
    }
  }

  return {
    parentRef,
    visible,
    visibleHandler
  }
}
