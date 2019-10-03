<template>
  <div>
    <div class="row">
    <div class="col-md-4 mx-auto mt-4">
        <div class="card">
            <div class="card-header">
                Account Register for Therapist
                
            </div>
            <div class="card-body">
                <img src="../../assets/icopsi.jpg" alt="Logo">
                
                <form action="" method="POST">
            <br>
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" name="email" placeholder="Email" >
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder="Password" >
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="confirm_password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  
}
</script>