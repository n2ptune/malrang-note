<template>
  <div class="p-2">
    <FilterMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import FilterMenu from './FilterMenu.vue'

export default defineComponent({
  components: { FilterMenu },
  setup() {
    const noteList = inject('noteList')
    const isShared = inject('isShared')
  }
})
</script>
