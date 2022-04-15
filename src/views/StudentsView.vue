<script>
import StudentListItem from '@/components/StudentListItem.vue'

export default {
  name: 'StudentList',
  components: {StudentListItem},
  data() {
    return {
      showLogin : true
    }
  },
  methods : {

  }
}

</script>

<template>
  <main>
      <StudentListItem />
  </main>
</template>
