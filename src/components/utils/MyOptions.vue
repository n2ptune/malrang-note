<template>
  <div>
    <Button
      class="w-full rounded-full"
      :icon="{ noHoverClass: true, type: 'edit', size: 16 }"
    >
      새로운 메모
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/common/Button.vue'

export default defineComponent({
  components: {
    Button
  }
  // setup() {}
})
</script>
