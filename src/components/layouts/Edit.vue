<template>
  <section
    class="text-brand-black bg-gray-50 border-r border-gray-200 dark:bg-brand-black-w dark:border-brand-black dark:text-white col-span-3"
  >
    <slot name="center" />
  </section>
  <section
    class="text-brand-black bg-white dark:text-white dark:bg-brand-black-l col-span-11"
  >
    <slot name="right" />
  </section>
</template>
