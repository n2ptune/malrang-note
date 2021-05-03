<template>
  <div>Hello Malrang note</div>
  <div v-if="!firebaseLoaded">Loading Firebase.....</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import firebase from 'firebase'

export default defineComponent({
  setup() {
    const firebaseLoaded = computed(() => firebase.apps.length)

    return {
      firebaseLoaded
    }
  }
})
</script>
