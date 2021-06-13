<template>
  <div class="p-2">
    <FilterMenu />
    <Notes />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilterMenu from './FilterMenu.vue'
import Notes from './Notes.vue'

export default defineComponent({
  components: { FilterMenu, Notes }
})
</script>
