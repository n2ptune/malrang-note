<template>
  <div class="p-2">
    <Tippy interactive trigger="click">
      <Feather type="filter" :size="20" />
      <template #content>
        <div>TODO: Dropdown Filter</div>
      </template>
    </Tippy>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import Feather from '../utils/Feather.vue'

export default defineComponent({
  setup() {
    const noteList = inject('noteList')
    const isShared = inject('isShared')

    return {
      noteList,
      isShared
    }
  },
  components: { Feather }
})
</script>
