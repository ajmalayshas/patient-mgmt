"use client"
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter()
    return (
      <div>
        <section class="bg-home d-flex bg-light align-items-center" >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-8">
                {/* <img src={"/images/logo-dark.png"} height="22" class="mx-auto d-block" alt="" /> */}
                <div class="card login-page shadow mt-4 rounded border-0">
                  <div class="card-body">
                    <h4 class="text-center">Sign In</h4>
                    <form action="" class="login-form mt-4">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label class="form-label">Your Email <span class="text-danger">*</span></label>
                            <input type="email" class="form-control" placeholder="Email" name="email" required="" />
                          </div>
                        </div>
  
                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label class="form-label">Password <span class="text-danger">*</span></label>
                            <input type="password" class="form-control" placeholder="Password" required="" />
                          </div>
                        </div>
  
                        <div class="col-lg-12">
                          <div class="d-flex justify-content-between">
                            <div class="mb-3">
                              <div class="form-check">
                                <input class="form-check-input align-middle" type="checkbox" value="" id="remember-check" />
                                <label class="form-check-label" for="remember-check">Remember me</label>
                              </div>
                            </div>
                            <a href="forgot-password.html" class="text-dark h6 mb-0">Forgot password ?</a>
                          </div>
                        </div>
                        <div class="col-lg-12 mb-0">
                          <div class="d-grid">
                            <button onClick={()=>router.push('/admin/dashboard')} class="btn btn-primary">Sign in</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  