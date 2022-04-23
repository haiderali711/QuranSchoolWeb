<script>
import TodaysAttendenceItem from "@/components/TodaysAttendenceItem.vue";
import PreviousAttendenceItem from "@/components/PreviousAttendenceItem.vue";

export default {
  name: "Attendence",
  components: { TodaysAttendenceItem, PreviousAttendenceItem },
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
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-todays-attendence-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-todays-attendence"
          type="button"
          role="tab"
          aria-controls="nav-today-attendence"
          aria-selected="true"
        >
          Todays Attendence
        </button>
        <button
          class="nav-link"
          id="nav-previous-attendence-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-previous-attendence"
          type="button"
          role="tab"
          aria-controls="nav-previous-attendence"
          aria-selected="false"
        >
          Previous Attendence
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-todays-attendence"
        role="tabpanel"
        aria-labelledby="nav-todays-attendence-tab"
      >
        <TodaysAttendenceItem />
      </div>
      <div
        class="tab-pane fade"
        id="nav-previous-attendence"
        role="tabpanel"
        aria-labelledby="nav-previous-attendence-tab"
      >
        <PreviousAttendenceItem />
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
