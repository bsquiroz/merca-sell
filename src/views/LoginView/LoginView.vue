<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import Input from "../../components/common/Input/Input.vue";
import Loading from "../../components/common/Loading/Loading.vue";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth";
import { ref } from "vue";

const authStore = useAuthStore();
const loadingLogin = ref(false);

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  loadingLogin.value = true;
  await authStore.signIn(values.username, values.password);
  loadingLogin.value = false;
});
</script>

<template>
  <form class="w-2/3 space-y-6 m-auto" @submit="onSubmit">
    <Input
      name="username"
      label="Usuario"
      placeholder="Bsquiroz"
      type="text"
      desc="Aqui va tu usuario con el que te registraste"
    />

    <Input
      name="password"
      label="Contraseña"
      placeholder="***"
      type="password"
      desc="La que te dijimos que no olvidaras."
    />

    <Button type="submit" class="w-full">
      <Loading v-if="loadingLogin" />
      <span v-else>Login</span>
    </Button>
  </form>
</template>
