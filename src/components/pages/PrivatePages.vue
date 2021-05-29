<template>
  <!-- <div>{{ privatePage.title || privatePageMeta.title }}</div> -->
  <div>
    <IconMenuList :menus="menus" />
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent, reactive, watch } from 'vue'
import IconMenuList from '@/components/utils/IconMenuList.vue'

export default defineComponent({
  components: {
    IconMenuList
  },
  setup() {
    const store = useStore()
    store.dispatch('private/dispatchPrivatePage')

    // const privatePageMeta = computed(
    //   () => store.getters['private/getPrivatePageMeta']
    // )
    const privatePage = computed(() => store.getters['private/getPrivatePage'])

    const menus = reactive([
      {
        name: '',
        iconType: 'book-open',
        onClickHandler: () => {
          console.log('hello world')
        }
      }
    ])

    // 메모장 제목 업데이트
    watch(
      () => privatePage.value.title,
      (title) => (menus[0].name = title)
    )

    return {
      menus
    }
  }
})
</script>
