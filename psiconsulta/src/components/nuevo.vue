<template>
  <div>
    <div class="container">
      <button v-on:click="getUsers" class="btn btn primary">Listar</button>
  <div class="row">
    <div class="col-sm-4">
      <ul class="list-group">
        <li class="list-group-item">
            <select type="text" v-model="category" class="form-control" id="categoryid">
                <option v-for="category in  categories" >{{category}}</option>
            </select>
        </li>
        <li class="list-group-item" v-for="item in searchUser">
         <h5>{{item.name}}</h5>
          <h5>{{item.email}}</h5>
          <h5>{{item.category}}</h5>
         <h5> {{item.role}}</h5>
        </li>
      </ul>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import axios from'axios'

export default {
  name: "profile",
  data() {
    return { 
      name: "",
      email: "",
      role: "",
      category:"",
      userst: [],
      roles: ["Patient", "Therapist"],
      categor:"",
      categors: [ "Depression",
        "Addictions",
        "Phobias",
        "Conflicts of couple and family",
        "Eating disorders",
        "distress"],
      
      list: [],
      categories: [
        "Depression",
        "Addictions",
        "Phobias",
        "Conflicts of couple and family",
        "Eating disorders",
        "distress","a","b","c","d"
      ],
      submitted: false,
      perPage: 10,
      pages: [],
      page: 1
    }
  },
  methods: {
    async    getUsers () {
      let urlUsers = "http://localhost:3000/userst";
     await axios.get(urlUsers).then(response =>  {
        this.list =response.data.userst
      })
    }
  },
  computed: {
       searchUser:  function () {
       return this.list.filter( (item) => item.category==this.category)
    }
  },
}

</script>