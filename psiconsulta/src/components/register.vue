<template>
  <div id="register">
    <div class="row">
    <div class="col-md-4 mx-auto mt-4">
        <div class="card">
            <div class="card-header">
            
            </div>
            <div class="card-body">
                <img src="../assets/icopsi.jpg" alt="Logo">
                <h2>Register</h2>
                <form>
                    <br>
                    <div class="form-group">
                        <input v-model="name" type="text" class="form-control" name="name" autofocus placeholder="Introduce your name" required>
                    </div>
                    <div class="form-group">
                        <input v-model="email" type="email" class="form-control" name="email" placeholder="Introduce your email" required>
                    </div>
                    <div class="form-group">
                        <input v-model="phoneNumber" type="tel" class="form-control" name="phone" placeholder="Introduce your phone number" required>
                    </div>
                    <label>Select your role</label>
                    <select type="role" v-model="role" class="form-control"  required>
                        <option v-for="role in roles" :key="role._id">{{role}}</option>
                    </select>
                    <label class="mt-3">Select your problem or specialty</label>
                    <select type="category" v-model="category" class="form-control"  required>
                        <option v-for="category in categories" :key="category._id">{{category}}</option>
                    </select>

                    <div class="form-group mt-4">
                        <input v-model="password" type="password" class="form-control" name="password" placeholder="Introduce your password" required>
                    </div>
                    <div class="form-group">
                        <button @click="register" type="submit" class="btn btn-primary btn-block">SignUp</button>
                        {{ error }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'register',
    data() {
        return {
            name: '',
            email: '',
            phoneNumber: '',
            password: '',
            category:'',
            role:'',
            roles: ["Patient", "Therapist"],
            categories: [
            "Depression",
            "Addictions",
            "Phobias",
            "Conflicts of couple and family",
            "Eating disorders",
            "Distress"],
            error: '',
        }
    },
    methods: {
        register(e) {
            e.preventDefault();
            let newUser = {
               name: this.name,
               email: this.email,
               phoneNumber: this.phoneNumber,
               password : this.password,
               category: this.category,
               role: this.role
            }
            axios.post('http://localhost:3000/register', newUser)
                .then(res => {
                    console.log(res)
                    this.error = '';
                    this.$router.push('/login'); // te envia a otra direccion
                }, err => {
                    console.log(err.response)
                    this.error = err.response.data.error
                })
        }
    },
}
</script>
<style>
#register {
    background-image: url("../assets/t.jpg");
    background-size: cover;
    height: 100vh;
}    
h2, label, select {
    font-family: cursive
}
</style>