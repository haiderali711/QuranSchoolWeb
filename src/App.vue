<script>
import { RouterLink, RouterView } from "vue-router";
import Cookies from "js-cookie";

export default {
  components: { RouterLink, RouterView },
  data() {
    return {
      loggedIn: false,
    };
  },
  created() {
    let cookies = Cookies.get();
    console.log("cookies ", cookies, cookies.isLoggedIn);

    if (cookies.isLoggedIn) this.loggedIn = true;
    else this.loggedIn = false;

    // if (cookie != null) {
    //   if (cookie.data.user.loggedIn === true) {
    //     this.loggedIn = true;
    //     this.mod = cookie.data.user.moderator === true;
    //   } else {
    //     this.login = false;
    //     this.loggedIn = false;
    //   }
    // }
  },
  methods: {
    setLoggedIn() {
      console.log("set log in to true");
      this.loggedIn = true;
      this.$router.push({ path: "/" });
    },
    setLoggedOut() {
      console.log("logging out");
      this.loggedIn = false;
      Cookies.remove("loginId");
      Cookies.remove("isLoggedIn");
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <header>
          <div class="wrapper">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <img
                  alt="Vue logo"
                  class="logo"
                  src="../android-chrome-192x192.png"
                />

                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page">
                        <RouterLink class="route-link-class" to="/"
                          >Home</RouterLink
                        >
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        <RouterLink class="route-link-class" to="/about"
                          >About</RouterLink
                        >
                      </a>
                    </li>
                    <li class="nav-item" v-if="!loggedIn">
                      <a class="nav-link">
                        <RouterLink
                          class="route-link-class"
                          to="/sign"
                          :setLoggedIn="setLoggedIn"
                          >Login</RouterLink
                        >
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        <RouterLink class="route-link-class" to="/attendence"
                          >Attendence</RouterLink
                        >
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link dropdown-toggle green"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Administration
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            <RouterLink
                              class="route-link-class"
                              to="/students"
                              v-if="loggedIn"
                              >Manage Students</RouterLink
                            >
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Manage Payment Records
                          </a>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                      <a class="nav-link" @click="setLoggedOut">Logout</a>
                    </li>
                    <!-- <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> -->
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <RouterView @set-logged-in="setLoggedIn" />
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

#navbarDropdown {
  color: hsla(160, 100%, 37%, 1);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  margin: 0 auto 2rem;
  height: 60px;
  width: 60px;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.route-link-class:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.navbar-light .navbar-nav .nav-link {
  color: hsla(160, 100%, 37%, 1);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: block;
    place-items: center;
  }

  #app {
    display: block;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    max-height: 50;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    height: 50;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
