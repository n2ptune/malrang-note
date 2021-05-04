<template>
  <div>Hello Malrang note</div>
  <div v-if="!firebaseLoaded">Loading Firebase.....</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import firebase from 'firebase'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const firebaseLoaded = computed(() => firebase.apps.length)
    const store = useStore()

    console.log(store)

    return {
      firebaseLoaded
    }
  }
})
</script>
