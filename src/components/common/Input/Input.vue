<script setup lang="ts">
import { defineProps } from "vue";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

defineProps<{
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "password";
  desc: string;
}>();
</script>

<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem v-auto-animate>
      <FormLabel>{{ label }}</FormLabel>
      <FormControl>
        <Input
          :type="type"
          :placeholder="placeholder"
          v-bind="componentField"
        />
      </FormControl>
      <FormDescription> {{ desc }} </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<style scoped></style>
