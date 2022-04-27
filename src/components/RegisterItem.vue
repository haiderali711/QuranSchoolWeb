<script>
export default {
  props: ["showLogin", "changeShowLogin"],
  data() {
    return {
      newTeacher: {
        name: "",
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    createNewTeacher() {
      // Make axios request here
      console.log("submitted", this.newTeacher);
    },
  },
};
</script>

<template>
  <div class="box">
    <div id="header">
      <div id="cont-lock"><i class="bi bi-book"></i></div>
      <div id="bottom-head">
        <h1 id="logintoregister">Register A New Teacher</h1>
      </div>
    </div>
    <div class="box-content">
      <form action="" @submit.prevent="createNewTeacher">
        <div class="group">
          <input
            class="inputMaterial"
            v-model="newTeacher.name"
            type="text"
            required
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Name</label>
        </div>
        <div class="group">
          <input
            class="inputMaterial"
            v-model="newTeacher.email"
            type="text"
            required
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
        </div>
        <div class="group">
          <input
            class="inputMaterial"
            v-model="newTeacher.username"
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
            v-model="newTeacher.password"
            type="password"
            required
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Password</label>
        </div>
        <button id="buttonlogintoregister" type="submit">Register</button>
      </form>
    </div>
    <div id="footer-box">
      <p class="footer-text">
        Already Registered?<span class="sign-up" @click="changeShowLogin">
          Sign In instead!</span
        >
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./styling/RegisterItem.scss";
</style>
