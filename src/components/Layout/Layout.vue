<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <main class="bg-slate-100 text-black dark:bg-slate-950 dark:text-white">
    <section class="max-w-5xl m-auto p-5 min-h-screen">
      <header class="flex items-center justify-between">
        <RouterLink
          :to="{ name: 'home' }"
          class="font-extrabold text-xl uppercase"
          >merca-cell-bs</RouterLink
        >

        <nav class="flex gap-4">
          <RouterLink :to="{ name: 'home' }" activeClass="text-green-500"
            >Home</RouterLink
          >
          <RouterLink :to="{ name: 'admin' }" activeClass="text-green-500"
            >Admin</RouterLink
          >
          <RouterLink :to="{ name: 'login' }" activeClass="text-green-500"
            >Login</RouterLink
          >
        </nav>
      </header>

      <RouterView />
    </section>
  </main>
</template>
