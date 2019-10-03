<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
    
          <router-link class="psiconsulta" to="/">Psiconsulta</router-link>
       
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            
            <li class="nav-item active">
              <router-link class="profile"  to="/profile">Profile</router-link>
            </li>
 
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown register">
              <a
                class="register dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Register</a>
              <div class="dropdown-menu"  aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/register">Register</router-link>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" @click="logout">LogOut</button>
                <!-- <router-link class="dropdown-item" to="/">Log out</router-link> -->

              </div>
            </li>

            <li class="nav-item active">
              <router-link class="login" to="/login">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
<transition name="bounce">
  <router-view/>
</transition>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    // user is not authorized
    if (localStorage.getItem('token') === null ) {
      this.$router.push('/login');
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
    
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
.profile{
  color: #f3f3f3;
  font-size: 1.9em;
  font-family: cursive
}

#nav a {
  font-weight: bold;
}


.login{
  color: #f3f3f3;
  font-size: 1.9em;
  font-family: cursive;
  margin-left: 1em;
}
.register{
  color: #f3f3f3;
  font-size: 1.4em;
  font-family: cursive;
  
}
.psiconsulta{
  color: #295afc;
  font-size: 2.3em;
  margin-right: 1em;
  font-family: cursive;
  
}
#nav a.router-link-exact-active {
  color: #42b983;
}



/* .v-enter-active, .v-leave-active {
  transition: opacity 2.5s;
}

.v-leave-active, .v-leave-to {
  opacity: 0;
} */

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
