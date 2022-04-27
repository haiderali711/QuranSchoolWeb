<script>
import LoginItem from "@/components/LoginItem.vue";
import RegisterItem from "@/components/RegisterItem.vue";

export default {
  name: "Home",
  props: ["loggedIn"],
  components: { LoginItem, RegisterItem },
  data() {
    return {
      showLogin: true,
    };
  },
  methods: {},
};
</script>

<template>
  <main>Home</main>
</template>
