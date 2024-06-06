<script setup lang="ts">
import { RouterView } from "vue-router";

import { Toaster } from "@/components/ui/toast";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

import { useAuthStore } from "../../store/auth";

const { isAuth, logout } = useAuthStore();
</script>

<template>
  <section class="bg-slate-100 text-black dark:bg-slate-900 dark:text-white">
    <header class="dark:bg-slate-950">
      <div class="flex items-center justify-between max-w-5xl m-auto px-5 py-3">
        <RouterLink
          :to="{ name: 'home' }"
          class="font-extrabold text-xl uppercase"
          >merca-cell-bs</RouterLink
        >

        <nav class="flex gap-4 items-center">
          <RouterLink
            :to="{ name: 'home' }"
            activeClass="text-primary font-bold"
            >Home</RouterLink
          >
          <RouterLink
            v-if="isAuth"
            :to="{ name: 'admin-list' }"
            activeClass="text-primary font-bold"
            >Admin</RouterLink
          >
          <RouterLink
            v-if="!isAuth"
            :to="{ name: 'login' }"
            activeClass="text-primary font-bold"
            >Login</RouterLink
          >
          <Button v-else variant="destructive" :onclick="logout"
            >Cerrar session</Button
          >
        </nav>
      </div>
    </header>
    <main class="max-w-5xl m-auto p-5 min-h-screen">
      <RouterView />
    </main>
    <Toaster />
    <Sonner richColors />
  </section>
</template>
