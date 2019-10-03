<template>
  <div id="profile">
    <div class="card-body  usercard">
      <h1 class="card-title font-weight-bold c1  text-left"><img src="https://img.icons8.com/color/30/000000/dot-logo.png"> Name: {{ name }} <img src="https://img.icons8.com/ultraviolet/40/000000/employee-card.png"></h1>
      <h2 class="card-text font-weight-bold c1  text-left"> <img src="https://img.icons8.com/color/30/000000/dot-logo.png"> Email: {{ email }} <img src="https://img.icons8.com/ultraviolet/40/000000/email.png"></h2>
      <h2 class="card-text font-weight-bold  c1  text-left"><img src="https://img.icons8.com/color/30/000000/dot-logo.png"> Phone: {{ phoneNumber }} <img src="https://img.icons8.com/dusk/40/000000/two-smartphones.png"></h2>
      <h2 class="card-text font-weight-bold c1  text-left"><img src="https://img.icons8.com/color/30/000000/dot-logo.png"> Role: {{ role }} <img src="https://img.icons8.com/color/40/000000/admin-settings-male.png"></h2>
      <h2 class="card-text font-weight-bold c1  text-left"><img src="https://img.icons8.com/color/30/000000/dot-logo.png"> Category: {{ category }} <img src="https://img.icons8.com/cute-clipart/40/000000/paste-special.png"></h2>
      
      <br>
      <router-link class="btn btn-info" to="/notes">Ir a tus notas</router-link>
      <div class="form-group">
        <label class="font-italic" id="label1">Please, select your rol</label>
        <select type="role" v-model="role" class="form-control" id="roleid">
          <option v-for="role in roles" :key="role._id">{{role}}</option>
        </select>
        <br />
        <label
          class="font-italic"
          id="label2"
        >Please, select your problem or specialty</label>
        <select type="category" v-model="category" class="form-control" id="categoryid">
          <option v-for="category in categories" :key="category._id">{{category}}</option>
        </select>
      </div>
   
    </div>
    <div v-if="submitted">
      <h3>Thanks for yout post</h3>
    </div>

    <div class="container p-2">
      <div class="row">
        <div class="col-md-4" v-for="usert in displayedUserst" :key="usert._id">
          <div class="card mb-2 cb2">
            <img v-bind:src="usert.avatar" alt="Profile Image" class="card-img-top w-10 imgava" />
            <div class="card-body cb">
              <h5 class="c2"><img src="https://img.icons8.com/ultraviolet/40/000000/employee-card.png">  {{usert.name}}</h5>
              <h5 class="c2"><img src="https://img.icons8.com/ultraviolet/40/000000/email.png">  {{usert.email}}</h5>
              <h5 class="c2"><img src="https://img.icons8.com/dusk/40/000000/two-smartphones.png">  {{usert.phoneNumber}}</h5>
              <h5 class="c2"><img src="https://img.icons8.com/color/40/000000/admin-settings-male.png">  {{usert.role}}</h5>
              <h5 class="c2"><img src="https://img.icons8.com/cute-clipart/40/000000/paste-special.png">  {{usert.category}}</h5>
              <button  v-on:click="mostrarId(usert)">Añadir</button>
            </div>
          </div>
        </div>

        <!-- <div class="container">
          <div class="row">
            <div class="btn-group col-md-2 offset-md-5">
              <button
                class="btn btn-sm btn-outline-secondary"
                type="button"
                v-if="page != 1"
                @click="page--"
              >Before</button>
              <button
               @click="page = pageNumber"
                type="button"
                class="btn btn-sm btn-outline-secondary"
                v-for="pageNumber in pages.slice(page-1, page+5)"
                :key="pageNumber"
              >{{pageNumber}}</button>
              <button
                class="btn btn-sm btn-outline-secondary"
                type="button"
                @click="page++"
                v-if="page < pages.length"
              >Next</button>
            </div>
          </div>
        </div> -->

      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "profile",
  data() {
    return {

      userst: [],
      name: "",
      email: "",
      role: "",
      phoneNumber: '',
      roles: ["Patient", "Therapist"],
      category: "",
      categories: [
        "Depression",
        "Addictions",
        "Phobias",
        "Conflicts of couple and family",
        "Eating disorders",
        "Distress"
      ],
      submitted: false,
      perPage: 10,
      pages: [],
      page: 1
    };
  },
  async created() {
    await this.getUserst();
    // user is not authorized
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/user", {
        headers: { token: localStorage.getItem("token") }
      })
      .then(res => {
        this.name = res.data.user.name;
        this.email = res.data.user.email;
        this.phoneNumber = res.data.user.phoneNumber;
        this.category = res.data.user.category;
        this.role = res.data.user.role;

      });
  },
  methods: {
    postInformation(e) {
      e.preventDefault();

      axios.get("http://localhost:3000", {}).then(function(data) {
        
        this.submitted = true;
      });
    },
    async getUserst() {
      const res = await axios.get("http://localhost:3000/userst");
      console.log(res);
      this.userst = res.data.userst;   
    },
    

    async logout() {
      await localStorage.clear();
      this.$router.push("/login");
    },
    
    mostrarId: function (i) {
       console.log(i)
    }
  },
  computed: {
    displayedUserst:  function() {
      return  this.searchSelect
    },
    searchSelect:  function () { 
  
       let searchSelect  =  this.userst.filter( (usert) => {
         return usert.category==this.category&&usert.role!=this.role;
       })
       return searchSelect     
    },
  },
  watch: {

  }
};
</script>

<style>
#roleid,
#categoryid {
  width: 70%;
  margin-left: 15%;
}
.usercard{
    background-image: url("../assets/i.jpg");
    background-size: cover;
    /* height: 100vh;  */
}

#label1, 
#label2 {
   color: rgb(168, 198, 255)
} 
.c1 {
   color: cornflowerblue
}

.cb2 {
  background-image: url("../assets/p.jpg");
  background-size: cover;
}
.c2 {
  color: rgb(83, 120, 189);
  font-size: 1em; 
  text-align: left
}

#profile{
  background-image: url("../assets/re.jpg");
  background-size: cover;
  height: 300vh;
  
  /* height: 100vh;  */
}

label,h1,h2,h3,h4,h5{
  font-family: cursive
}

</style>