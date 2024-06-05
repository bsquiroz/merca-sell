import { defineStore } from "pinia";

import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const auth = useFirebaseAuth();

  function signIn(username: string, password: string) {
    signInWithEmailAndPassword(auth!, username, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return { signIn };
});
