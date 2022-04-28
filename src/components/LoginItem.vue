<script>
import Cookies from "js-cookie";
import { Api } from "../Api";
export default {
  props: ["showLogin", "changeShowLogin"],
  data() {
    return {
      formUser: {
        username: "",
        password: "",
      },
      authenticatingResponse: {},
    };
  },
  beforeCreate() {
    let cookies = Cookies.get();
    console.log("cookies ", cookies, cookies.isLoggedIn);

    if (cookies.isLoggedIn) {
      console.log("redirecting back to Home cz already logged in");

      this.$router.push({ path: "/" });
    }
  },
  methods: {
    checkAuthentication() {
      // Make axios request here
      Api.get(
        "/teacher/" + this.formUser.username + "/" + this.formUser.password
      )
        .then((response) => {
          this.authenticatingResponse = response.data;
          if (response.status == 200)
            this.$emit("LoginSuccessful", this.authenticatingResponse);
        })
        .catch((error) => {
          let message = { err: error };

          console.log("error ", message);
        });

      console.log("Authentication submitted from Login Item");
    },
  },
};
</script>

<template>
  <div class="box">
    <div id="header">
      <div id="cont-lock"><i class="bi bi-key"></i></div>
      <div id="bottom-head"><h1 id="logintoregister">Login</h1></div>
    </div>
    <form action="" @submit.prevent="checkAuthentication">
      <div class="group">
        <input
          class="inputMaterial"
          v-model="formUser.username"
          type="text"
          required
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Username</label>
      </div>
      <div class="group">
        <input
          class="inputMaterial"
          v-model="formUser.password"
          type="password"
          required
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Password</label>
      </div>
      <button id="buttonlogintoregister" type="submit">Login</button>
    </form>
    <div id="footer-box">
      <p class="footer-text">
        Not a member?<span class="sign-up" @click="changeShowLogin">
          Sign up now</span
        >
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./styling/LoginItem.scss";
</style>
