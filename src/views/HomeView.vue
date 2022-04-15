<script>
import LoginItem from '@/components/LoginItem.vue'
import RegisterItem from '@/components/RegisterItem.vue'

export default {
  name: 'Home',
  components: {LoginItem, RegisterItem},
  data() {
    return {
      showLogin : true,
      loggedIn : true
    }
  },
  methods : {
    changeShowLogin () {
      this.showLogin = !this.showLogin
    }
  }
}

</script>

<template>
  <main>
    <LoginItem v-if="showLogin " :showLogin="showLogin" :changeShowLogin="changeShowLogin"/>
    <RegisterItem v-if="!showLogin" :showLogin="showLogin" :changeShowLogin="changeShowLogin"/>
  </main>
</template>
