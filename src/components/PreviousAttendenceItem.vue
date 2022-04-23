<script>
export default {
  props: ["previousAttendenceProps"],
  methods: {},
  data() {
    return {
      // TODO : Update the PreviousAttendence variable with the the props one or just use the props instead of it
      previousAttendence: [
        {
          date: "2022-04-23",
          teacherID: "ausydgfhasidnf",
          classType: "Hifz",
          studentList: ["Haider", "Ali", "Johan", "Rubber"],
        },
        {
          date: "2022-04-20",
          teacherID: "ausydgfhasidnf",
          classType: "Murajah",
          studentList: ["Haider", "Ali", "Rubber"],
        },
        {
          date: "2022-04-17",
          teacherID: "ausydgfhasidnf",
          classType: "Hifz",
          studentList: ["Haider", "Ali", "Zoro"],
        },
        {
          date: "2022-04-14",
          teacherID: "ausydgfhasidnf",
          classType: "Murajah",
          studentList: ["Haider", "Ali", "Ahmad"],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="previous-attendence">
    <div class="accordion" id="accordionFlushExample">
      <div
        class="accordion-item"
        v-for="attendence in previousAttendence"
        v-bind:key="attendence.date"
      >
        <h2 class="accordion-header" :id="'flush-heading' + attendence.date">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapse' + attendence.date"
            aria-expanded="false"
            :aria-controls="'flush-collapse' + attendence.date"
          >
            {{ attendence.date }} - {{ attendence.classType }}
          </button>
        </h2>
        <div
          :id="'flush-collapse' + attendence.date"
          class="accordion-collapse collapse"
          :aria-labelledby="'flush-heading' + attendence.date"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="item in attendence.studentList"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./styling/PreviousAttendenceItem.scss";
</style>
