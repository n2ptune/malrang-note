<template>
  <div>
    <IconMenuList :menu="privateMenu" />
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent, reactive, watch } from 'vue'
import IconMenuList, { IconMenu } from '@/components/utils/IconMenuList.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    IconMenuList
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    store.dispatch('private/dispatchPrivatePage')

    const privatePage = computed<PageMeta>(
      () => store.getters['private/getPrivatePage']
    )

    const privateMenu = reactive<IconMenu>({
      name: '',
      iconType: 'book-open',
      onClickHandler: () => {
        router.push(`/edit/${privatePage.value.uid}`)
      }
    })

    // 메모장 제목 업데이트
    watch(
      () => privatePage.value.title,
      (title) => (privateMenu.name = title)
    )

    return {
      privateMenu
    }
  }
})
</script>
