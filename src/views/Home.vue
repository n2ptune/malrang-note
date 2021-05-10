<template>
  <main class="grid-cols-12 grid">
    <section class="left col-span-2">
      <LeftWrapper />
    </section>
    <section class="center col-span-2">1</section>
    <section class="right col-span-8">
      <RightWrapper />
    </section>
  </main>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    LeftWrapper: defineAsyncComponent(
      () => import('@/components/layouts/LeftWrapper.vue')
    ),
    RightWrapper: defineAsyncComponent(
      () => import('@/components/layouts/RightWrapper.vue')
    )
  }
})
</script>

<style lang="postcss" scoped>
/* all */
.grid > * {
  @apply dark:text-white text-brand-black-w;
}
.left {
  @apply bg-brand-black text-white;
}
.center {
  @apply border-r dark:border-black border-gray-200
  dark:bg-brand-black-w bg-white;
}
.right {
  @apply dark:bg-brand-black-l bg-white;
}
</style>
