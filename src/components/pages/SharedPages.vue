<template>
  <div>
    <IconMenuList :menu="sharedMenu" children>
      <template v-slot:children>
        <li
          v-for="meta in sharedPageMeta"
          :key="meta.title"
          class="menu-item"
          @click="handleRoute(meta)"
        >
          {{ meta.title }}
        </li>
      </template>
    </IconMenuList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useStore } from '@/store'
import IconMenuList, { IconMenu } from '@/components/utils/IconMenuList.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    IconMenuList
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    store.dispatch('shared/dispatchSharedPages')

    const sharedPageMeta = computed<PageMeta[]>(
      () => store.getters['shared/getPageMeta']
    )

    const sharedMenu = reactive<IconMenu>({
      name: '공유 페이지',
      iconType: 'users',
      onClickHandler: () => {
        console.log('hello world')
      }
    })

    return {
      sharedMenu,
      sharedPageMeta,
      handleRoute: (meta: PageMeta) => {
        router.push(`/edit/${meta.uid}`)
      }
    }
  }
})
</script>
