<script>
export default {
  props: ["teacherId"],
  methods: {},
};
</script>

<template>
  <div class="box">
    <div id="header">
      <div id="cont-lock"><i class="bi bi-person-plus"></i></div>
      <div id="bottom-head">
        <h1 id="logintoregister">Add a new Student</h1>
      </div>
    </div>
    <div class="box-content">
      <form action="" method="post">
        <div class="group">
          <input class="inputMaterial" type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Name</label>
        </div>
        <div class="group">
          <input class="inputMaterial" type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
        </div>
        <div class="group">
          <input class="inputMaterial" type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Username</label>
        </div>
        <div class="group">
          <input class="inputMaterial" type="password" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Password</label>
        </div>
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
@import "./styling/AddNewStudentItem.scss";
</style>
