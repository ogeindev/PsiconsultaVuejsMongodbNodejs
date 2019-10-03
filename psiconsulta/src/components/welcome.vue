<template>
  <div class="hello">
    
    <div class="welcome1"><h1>WELCOME TO PSICONSULTA</h1></div>
    
    
    
    <div class="textpresentation">
    <p>Welcome to Psiconsulta!!! A web developer where you will find a lot of mind's professionals or people who are looking for an therapist. If you are looking for a therapist you just have to link <a href="register">here</a> and register. We provided a lot of users who are in our web to contact with you, free or 
    a change of a minimun price. You can find out it by registering in our web and we will offer you a list of people who could contact with you. Anote his phone number and we hope have helped you. If you are a therapist you can find too a lot of patients to gain experience like a free therapist or if you are a experienced therapis you can ask a minimun price. That's all in your hands. We only provided you a place where you can find each other</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h1{
  
  font-family: cursive;
  color: antiquewhite;
  padding: 10px;
  
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-family: sans-serif;
  color: hsl(209, 68%, 56%);
}
 p{
   font-family: cursive;
   font-size: 1.3em;
  
 }
  .textpresentation{
    margin-left: 10em;
    margin-right: 10em; 
  }
  .welcome1{
    background-image: url("../assets/cv.jpg");
    margin-top: 3vh;  
    margin-bottom: 3vh;
  }

</style>
