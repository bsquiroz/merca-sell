import { defineStore } from "pinia";

import { onMounted, ref, computed } from "vue";

import { useFirebaseAuth } from "vuefire";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { toast } from "vue-sonner";
import { User } from "../d";

import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();

  const auth = useFirebaseAuth();
  const authUser = ref<User>();

  async function signIn(username: string, password: string) {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth!,
        username,
        password
      );

      authUser.value = user;

      router.push({ name: "admin-list" });
    } catch (error: any) {
      console.log(error);
      if (error.code === "auth/invalid-credential") {
        toast.error("Credenciales incorrectas");
      } else {
        toast.error("Ocurrio un error, vuelve a intentarlo");
      }
    }
  }

  async function logout() {
    try {
      await signOut(auth!);

      authUser.value = undefined;

      router.push({ name: "login" });
    } catch (error) {
      console.log(error);
      toast.error("Ocurrio un error, recarga la pagina");
    }
  }

  const isAuth = computed(() => authUser);

  onMounted(() => {
    onAuthStateChanged(auth!, (user) => {
      if (user) {
        authUser.value = user;
        router.push({ name: "admin-list" });
      }
    });
  });

  return { signIn, logout, isAuth };
});
