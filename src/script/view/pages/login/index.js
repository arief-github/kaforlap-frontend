const LoginForm = {
    async render() {
        return ` 
        <!doctype html>
        <html lang="en">
          <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
        
            <!-- Optional JavaScript; choose one of the two! -->
        
            <!-- Option 1: Bootstrap Bundle with Popper -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        
            <section class="vh-100" style="background-color: #eee;">
                <div class="container h-100">
                  <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                      <div class="card text-black" style="border-radius: 25px;">
                        <div class="card-body p-md-5">
                          <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              
                              <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>
              
                              <form class="mx-1 mx-md-4">
              
              
                                <div class="d-flex flex-row align-items-center mb-4">
                                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                  <div class="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" class="form-control" />
                                    <label class="form-label" for="form3Example3c">Username</label>
                                  </div>
                                </div>
              
                                <div class="d-flex flex-row align-items-center mb-4">
                                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                  <div class="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4c" class="form-control" />
                                    <label class="form-label" for="form3Example4c">Password</label>
                                  </div>
                                </div>
              
              
              
                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                   <a href="#/gudang"><button type="button" class="btn btn-primary btn-lg">Login</button></a> 
                                </div>
                              
                                 <div class="form-footer">
                            <p class="text-center"> Don't have an account? <a href="#/register">Sign Up</a></p>
                            
                            </div>
                                
                              </form>
              
                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                class="img-fluid" alt="Sample image">
              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>        
          </body>
        </html>
        `;
    }
}

export default LoginForm;