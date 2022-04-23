<script>
export default {
  props: [],
  methods: {},
  data() {
    return {
      listStudents: [
        {
          _id: "6251923db3263c3cf329c1ac",
          name: "Haider Ali",
          email: "blackpowa711@gmail.com",
          personalNumber: "9411074751",
          phoneNumber: "0765757570",
          parentNumber: "0765757578",
          dateRegistration: "2022-04-09T14:03:41.252Z",
        },
        {
          _id: "62519cc60a30c21296be600f",
          name: "second student",
          email: "newstudent2@gmail.com",
          personalNumber: "9411078567",
          phoneNumber: "0765757456",
          parentNumber: "0765785623",
          dateRegistration: "2022-04-09T14:48:38.314Z",
        },
      ],
    };
  },
};
</script>

<template>
  <table class="container">
    <thead>
      <tr>
        <th><h1>Name</h1></th>
        <th><h1>Email</h1></th>
        <th><h1>Personnummer</h1></th>
        <th><h1>Tel. N.</h1></th>
        <th><h1>Parents N.</h1></th>
        <th><h1>Date</h1></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in listStudents" v-bind:key="student._id">
        <td>{{ student.name }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.personalNumber }}</td>
        <td>{{ student.phoneNumber }}</td>
        <td>{{ student.parentNumber }}</td>
        <td>{{ student.dateRegistration }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="css">
@import "./styling/StudentsListItem.css";
</style>
