const Login = {
    async render() {
        return ` 
            <!-- Login form creation starts-->
            <section class="container-fluid">
                <!-- row and justify-content-center class is used to place the form in center -->
                <section class="row justify-content-center">
                <section class="col-12 col-sm-6 col-md-4">
                    <form class="form-container">
                    <div class="form-group">
                    <h4 class="text-center font-weight-bold"> Login </h4>
                    <label for="InputEmail1">Email Address</label>
                    <input type="email" class="form-control" id="InputEmail1" aria-describeby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                    <label for="InputPassword1">Password</label>
                    <input type="password" class="form-control" id="InputPassword1" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    <div class="form-footer">
                    <p> Don't have an account? <a href="#">Sign Up</a></p>
                    
                    </div>
                    </form>
                </section>
                </section>
            </section>
            <!-- Login form creation ends -->
        `;
    }
}

export default Login;