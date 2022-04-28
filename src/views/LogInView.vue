<script>
import LoginItem from "@/components/LoginItem.vue";
import RegisterItem from "@/components/RegisterItem.vue";
import Cookies from "js-cookie";

export default {
  name: "SignInOrUp",
  props: ["loggedIn"],
  components: { LoginItem, RegisterItem },
  data() {
    return {
      showLogin: true,
    };
  },
  methods: {
    changeShowLogin() {
      this.showLogin = !this.showLogin;
    },
    onSuccessfullLogin(response) {
      console.log("Saving cookies in session !", response);
      Cookies.set("loginId", response._id, { expires: 1 });
      Cookies.set("isLoggedIn", true, {
        expires: 1,
      });
      this.$emit("set-logged-in", true);
    },
  },
};
</script>

<template>
  <main>
    <LoginItem
      v-if="showLogin"
      :showLogin="showLogin"
      :changeShowLogin="changeShowLogin"
      @LoginSuccessful="onSuccessfullLogin"
    />
    <RegisterItem
      v-if="!showLogin"
      :showLogin="showLogin"
      :changeShowLogin="changeShowLogin"
    />
  </main>
</template>
