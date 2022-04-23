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
          <label>Personal Number</label>
        </div>
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
          <label>Phone Number</label>
        </div>
        <div class="group">
          <input class="inputMaterial" type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Parents Number</label>
        </div>

        <button id="buttonlogintoregister" type="submit">
          Add the Student
        </button>
      </form>
    </div>
    <div id="footer-box"></div>
  </div>
</template>

<style scoped lang="scss">
@import "./styling/AddNewStudentItem.scss";
</style>
