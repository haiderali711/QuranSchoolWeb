<script>
export default {
  props: ["teacherAsProps", "todaysAttendenceAsProps"],
  methods: {
    createNewAttendence() {
      //needs to actually call the api to create a new object of attendence but right now we make a fake and assign to todaysAttendence
      this.todaysAttendence = {
        date: "2022-04-23",
        teacherID: "ausydgfhasidnf",
        classType: "Hifz",
        studentList: [],
      };
    },
    addStudentToTodaysAttendence(student) {
      if (!this.todaysAttendence.studentList.includes(student))
        this.todaysAttendence.studentList.push(student);
    },
  },
  data() {
    return {
      todaysAttendence: null,
      teacher: {
        _id: "ausydgfhasidnf",
        name: "My teacher",
        email: "test.teacher@gmail.com",
        username: "teacher711",
        password: "Abcd786786",
        students: ["Haider", "Luffy", "Zoro", "Sanji"],
      },
    };
  },
};
</script>

<template>
  <div
    class="start-attendence-div"
    v-if="todaysAttendence == null"
    v-bind="todaysAttendence"
  >
    <button class="start-attendence" @click="createNewAttendence()">
      Start attendence
    </button>

    <p class="p-message">
      It seems as the Attendence for today has not been started yet.
    </p>
  </div>
  <div class="start-attendence-div" v-else v-bind="todaysAttendence">
    <div class="container">
      <div class="row">
        <div class="col listFrom">
          <a>List of Students</a>
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action"
              v-for="student in teacher.students"
              @click="addStudentToTodaysAttendence(student)"
              :key="student"
            >
              {{ student }}
            </a>
          </div>
        </div>
        <div class="col listTo">
          <a>Assigned As Present</a>
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action"
              v-for="student in todaysAttendence.studentList"
              :key="student"
            >
              {{ student }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./styling/TodaysAttendenceItem.scss";
</style>
