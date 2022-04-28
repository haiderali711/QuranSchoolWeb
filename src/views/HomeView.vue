<script>
import QuranLogoItem from "@/components/QuranLogoItem.vue";

export default {
  name: "Home",
  props: ["loggedIn"],
  components: { QuranLogoItem },
  data() {
    return {
      showLogin: true,
    };
  },
  methods: {},
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <QuranLogoItem />
        </div>
      </div>
    </div>
  </main>
</template>
