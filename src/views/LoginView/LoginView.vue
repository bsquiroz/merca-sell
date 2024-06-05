<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import Input from "../../components/common/Input/Input.vue";

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);

  toast({
    title: "Your credentials corrects",
  });
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

    <Button type="submit" class="w-full"> Ingresar </Button>
  </form>
</template>
