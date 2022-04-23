<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: { RouterLink, RouterView },
  data() {
    return {
      loggedIn: true,
    };
  },
  methods: {
    setLoggedIn() {
      this.loggedIn = true;
    },
    setLoggedOut() {
      this.loggedIn = false;
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
                        <RouterLink
                          class="route-link-class"
                          to="/"
                          :loggedIn="loggedIn"
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
                    <li class="nav-item">
                      <a
                        class="nav-link dropdown-toggle"
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
                              >Add new Student</RouterLink
                            >
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
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
        <RouterView />
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

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
