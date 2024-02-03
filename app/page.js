"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <section className="bg-home d-flex bg-light align-items-center" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="card login-page shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Sign In</h4>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Your Email <span className="text-danger">*</span></label>
                          <input type="email" className="form-control" placeholder="Email" name="email" required="" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Password <span className="text-danger">*</span></label>
                          <input type="password" className="form-control" placeholder="Password" required="" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between">
                          <div className="mb-3">
                            <div className="form-check">
                              <input className="form-check-input align-middle" type="checkbox" value="" id="remember-check" />
                              <label className="form-check-label" for="remember-check">Remember me</label>
                            </div>
                          </div>
                          <a href="forgot-password.html" className="text-dark h6 mb-0">Forgot password ?</a>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button onClick={()=>router.push("/dashboard")} className="btn btn-primary">Sign in</button>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3 text-center">
                        <h6 className="text-muted">Or</h6>
                      </div>

                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link href={'/signup'} onClick={()=>localStorage.setItem("userRole","user")} className="text-dark fw-bold">Sign Up</Link></p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
