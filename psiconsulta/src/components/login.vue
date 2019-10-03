<template>
  <div id="login">
    <div class="row">
    <div class="col-md-4 mx-auto">
        <div class="card mt-4 text-center">
            <div class="card-header">

            </div>
            <img src="../assets/icopsi.jpg" alt="Logo" class="rounded-circle mx-auto d-block m-2 logo">
            <div class="card-body">
                <form>
                    <div class="form-group">
                      <h2>Login</h2>
                      <br>
                        <input v-model="email" type="email" class="form-control" name="email" placeholder="Email" autofocus
                        >
                    </div>
                    <div class="form-group">
                        <input v-model="password" type="password" name="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <button @click="login" type="submit" class="btn btn-primary btn-block">Login</button>
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
import axios from 'axios'

export default {
    name: 'login',
    data() {
        return {
            emaiil: '',
            password: '',

            error:''
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            
            let user = {
                email: this.email,
                password: this.password
            }
            axios.post('http://localhost:3000/login', user)
                .then(res => {
                    // if successfull
                    if (res.status === 200) {
                        localStorage.setItem('token', res.data.token) // cambiar una clave desde el localstorage
                        this.$router.push('/profile')
                    }
                }, err => {
                    console.log(err.response)
                    this.error = err.response.data.error
                })
        }
    }, 
}
</script>
<style >
#login{
    background-image: url("../assets/u.jpg");
    background-size: cover; 

    height: 100vh;
    
}

h2 {
    font-family: cursive
}
</style>