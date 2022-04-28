<script>
import StudentsListItem from "@/components/StudentsListItem.vue";
import AddNewStudentItem from "@/components/AddNewStudentItem.vue";
import Cookies from "js-cookie";

export default {
  name: "StudentList",
  components: { StudentsListItem, AddNewStudentItem },
  data() {
    return {
      showLogin: true,
    };
  },
  beforeCreate() {
    let cookies = Cookies.get();
    console.log("cookies ", cookies, cookies.isLoggedIn);

    if (!cookies.isLoggedIn) {
      console.log("redirecting back to 404 cz already not logged in");

      this.$router.push({ path: "/notfound" });
    }
  },
  methods: {},
};
</script>

<template>
  <main>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-list-students-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-list-students"
          type="button"
          role="tab"
          aria-controls="nav-list-students"
          aria-selected="true"
        >
          Your Students
        </button>
        <button
          class="nav-link"
          id="nav-add-student-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-add-student"
          type="button"
          role="tab"
          aria-controls="nav-add-student"
          aria-selected="false"
        >
          Add a new Student
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-list-students"
        role="tabpanel"
        aria-labelledby="nav-list-students-tab"
      >
        <StudentsListItem />
      </div>
      <div
        class="tab-pane fade"
        id="nav-add-student"
        role="tabpanel"
        aria-labelledby="nav-add-student-tab"
      >
        <AddNewStudentItem />
      </div>
    </div>
  </main>
</template>

<style>
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #03d9c4;
  border-color: #03d9c4;
}
.nav-link,
.nav-link:hover {
  color: hsla(160, 100%, 37%, 1);
}

.nav-tabs {
  border-bottom-color: #03d9c4;
}
</style>
