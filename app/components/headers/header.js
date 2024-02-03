"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [toggle,setToggle]=useState(false)
    return (
        <header id="topnav" className="defaultscroll sticky">
            <div className="container-fluid">
                <Link className="logo" href={'#'}>
                    <Image src={''} width={"100"} height="22" className="text-dark" alt="logo" />
                </Link>
                <div className="menu-extras">
                    <div className="menu-item">
                        <a className={`navbar-toggle ${toggle?'open':""}`} id="isToggle" onClick={()=>setToggle(!toggle)}>
                        </a>
                    </div>
                </div>

                <ul className="dropdowns list-inline mb-0">

                    <li className="list-inline-item mb-0 ms-1">
                        <Link href={"/"} className="btn btn-icon btn-pills btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                            Logout
                        </Link>
                    </li>

                    {/* <li className="list-inline-item mb-0 ms-1">
                        <div className="dropdown dropdown-primary">
                            <button type="button" className="btn btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={"/images/doctors/01.jpg"} className="avatar avatar-ex-small rounded-circle" alt="" />

                            </button>
                            <div className="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3" style={{ minWidth: "200px" }}>
                                <a className="dropdown-item d-flex align-items-center text-dark" href="doctor-profile.html">
                                    <img src={"/images/doctors/01.jpg"} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <div className="flex-1 ms-2">
                                        <span className="d-block mb-1">Calvin Carlo</span>
                                        <small className="text-muted">Orthopedic</small>
                                    </div>
                                </a>
                                <a className="dropdown-item text-dark" href="doctor-dashboard.html"><span className="mb-0 d-inline-block me-1"><i className="uil uil-dashboard align-middle h6"></i></span> Dashboard</a>
                                <a className="dropdown-item text-dark" href="doctor-profile-setting.html"><span className="mb-0 d-inline-block me-1"><i className="uil uil-setting align-middle h6"></i></span> Profile Settings</a>
                                <div className="dropdown-divider border-top"></div>
                                <a className="dropdown-item text-dark" href="login.html"><span className="mb-0 d-inline-block me-1"><i className="uil uil-sign-out-alt align-middle h6"></i></span> Logout</a>
                            </div>
                        </div>
                    </li> */}
                </ul>

                {/* <div id="navigation" className={`${toggle?"d-block":'d-none'}`}>
                    <ul className="navigation-menu nav-left">
                        <li className="has-submenu parent-menu-item">
                            <a href="javascript:void(0)">Home</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="index.html" className="sub-menu-item">Index One</a></li>
                                <li><a href="index-two.html" className="sub-menu-item">Index Two</a></li>
                                <li><a href="index-three.html" className="sub-menu-item">Index Three</a></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <a href="javascript:void(0)">Doctors</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item">
                                    <a href="javascript:void(0)" className="menu-item"> Dashboard </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="doctor-dashboard.html" className="sub-menu-item">Dashboard</a></li>
                                        <li><a href="doctor-appointment.html" className="sub-menu-item">Appointment</a></li>
                                        <li><a href="patient-list.html" className="sub-menu-item">Patients</a></li>
                                        <li><a href="doctor-schedule.html" className="sub-menu-item">Schedule Timing</a></li>
                                        <li><a href="invoices.html" className="sub-menu-item">Invoices</a></li>
                                        <li><a href="patient-review.html" className="sub-menu-item">Reviews</a></li>
                                        <li><a href="doctor-messages.html" className="sub-menu-item">Messages</a></li>
                                        <li><a href="doctor-profile.html" className="sub-menu-item">Profile</a></li>
                                        <li><a href="doctor-profile-setting.html" className="sub-menu-item">Profile Settings</a></li>
                                        <li><a href="doctor-chat.html" className="sub-menu-item">Chat</a></li>
                                        <li><a href="login.html" className="sub-menu-item">Login</a></li>
                                        <li><a href="signup.html" className="sub-menu-item">Sign Up</a></li>
                                        <li><a href="forgot-password.html" className="sub-menu-item">Forgot Password</a></li>
                                    </ul>
                                </li>
                                <li><a href="doctor-team-one.html" className="sub-menu-item">Doctors One</a></li>
                                <li><a href="doctor-team-two.html" className="sub-menu-item">Doctors Two</a></li>
                                <li><a href="doctor-team-three.html" className="sub-menu-item">Doctors Three</a></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-menu-item">
                            <a href="javascript:void(0)">Patients</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="patient-dashboard.html" className="sub-menu-item">Dashboard</a></li>
                                <li><a href="patient-profile.html" className="sub-menu-item">Profile</a></li>
                                <li><a href="booking-appointment.html" className="sub-menu-item">Book Appointment</a></li>
                                <li><a href="patient-invoice.html" className="sub-menu-item">Invoice</a></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-menu-item">
                            <a href="javascript:void(0)">Pharmacy</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="pharmacy.html" className="sub-menu-item">Pharmacy</a></li>
                                <li><a href="pharmacy-shop.html" className="sub-menu-item">Shop</a></li>
                                <li><a href="pharmacy-product-detail.html" className="sub-menu-item">Medicine Detail</a></li>
                                <li><a href="pharmacy-shop-cart.html" className="sub-menu-item">Shop Cart</a></li>
                                <li><a href="pharmacy-checkout.html" className="sub-menu-item">Checkout</a></li>
                                <li><a href="pharmacy-account.html" className="sub-menu-item">Account</a></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item"><a href="javascript:void(0)">Pages</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="aboutus.html" className="sub-menu-item"> About Us</a></li>
                                <li><a href="departments.html" className="sub-menu-item">Departments</a></li>
                                <li><a href="faqs.html" className="sub-menu-item">FAQs</a></li>
                                <li className="has-submenu parent-menu-item">
                                    <a href="javascript:void(0)" className="menu-item"> Blogs </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="blogs.html" className="sub-menu-item">Blogs</a></li>
                                        <li><a href="blog-detail.html" className="sub-menu-item">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="terms.html" className="sub-menu-item">Terms & Policy</a></li>
                                <li><a href="privacy.html" className="sub-menu-item">Privacy Policy</a></li>
                                <li><a href="error.html" className="sub-menu-item">404 !</a></li>
                                <li><a href="contact.html" className="sub-menu-item">Contact</a></li>
                            </ul>
                        </li>
                        <li><a href="https://shreethemes.in/doctris/layouts/admin/index.html" className="sub-menu-item" target="_blank">Admin</a></li>
                    </ul>
                </div> */}
            </div>
        </header>
    )
}

export default Header