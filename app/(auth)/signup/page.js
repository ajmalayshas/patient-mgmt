"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router = useRouter()
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8">
                    <div className="card login-page shadow mt-4 rounded border-0">
                        <div className="card-body">
                            <h4 className="text-center">Sign Up</h4>
                            {/* <form action="" className="login-form mt-4"> */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">First name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="First Name" name="s" required="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Last name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Last Name" name="s" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" placeholder="Email" name="email" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Password <span className="text-danger">*</span></label>
                                        <input type="password" className="form-control" placeholder="Password" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
                                        <input type="password" className="form-control" placeholder="Re-enter Password" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="d-grid">
                                        <button onClick={() => router.push("/")} className="btn btn-primary">Register</button>
                                    </div>
                                </div>

                                <div className="mx-auto">
                                    <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <Link href={'/'} className="text-dark fw-bold">Sign in</Link></p>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
