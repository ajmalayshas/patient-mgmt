"use client"
import Link from 'next/link'
import React from 'react'
import style from "./sidebar.module.css"
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const userRole = localStorage.getItem("userRole")
    const pathName = usePathname()
    console.log(userRole, pathName)
    const sidebarItems = []
    const adminItems = [
        { path: "/admin/dashboard", label: 'Dashboard', icon: 'ri-airplay-line' },
        {
            path: "/admin/patients", label: 'Patients', icon: '', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameq="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
        },
        {
            path: "/admin/users", label: 'Users', icon: '', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameq="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
        },
        // {path:"/",label:'',icon:''},
        // {path:"/",label:'',icon:''},
        // {path:"/",label:'',icon:''},
        // {path:"/",label:'',icon:''},
    ]
    const userItems = [
        { path: "/dashboard", label: 'Dashboard', icon: 'ri-airplay-line' },
        {
            path: "/patients", label: 'Patients', icon: '', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameq="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
        },
        {
            path: "/doctors", label: 'Doctors', icon: '', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameq="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
        },
        // { path: "/", label: '', icon: '' },
        // { path: "/", label: '', icon: '' },
        // { path: "/", label: '', icon: '' },
    ]
    const patientItems = [
        { path: "/dashboard", label: 'Dashboard', icon: 'ri-airplay-line' },
        { path: "/appointment", label: 'Appointment', icon: 'ri-calendar-check-line' },
        // { path: "/", label: '', icon: '' },
        // { path: "/", label: '', icon: '' },
        // { path: "/", label: '', icon: '' },
        // { path: "/", label: '', icon: '' },
        // { path: "/", label: '', icon: '' },
    ]

    const links = userRole == "admin" ? adminItems : userRole == "user" ? userItems : patientItems;

    return (
        <>
            <div class="col-xl-3 col-lg-4 col-md-5 col-12">
                <div className={style.sidebar}>
                    <ul class="list-unstyled sidebar-nav mb-0">
                        {links.map((data, index) =>
                            <li key={index} className={`navbar-item ${pathName.includes(data.path) ? style.sidebar_active : ""}`}>
                                <Link href={data.path} class="">{data.svg ? data.svg : <i className={`${data.icon} navbar-icon`}></i>} {data.label}</Link></li>
                        )}
                        <li class="navbar-item"><Link href={userRole == "admin" ? "/admin/login" : "/"} class=""><i class="ri-login-circle-line align-middle navbar-icon"></i> LogOut</Link></li>

                    </ul>
                </div>
                {/* <div class="rounded shadow overflow-hidden sticky-bar">
                    <div class="card border-0">
                        <img src={"/images/doctors/profile-bg.jpg"} class="img-fluid" alt="" />
                    </div>

                    <div class="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                        <img src={"/images/doctors/01.jpg"} class="rounded-circle shadow-md avatar avatar-md-md" alt="" />
                        <h5 class="mt-3 mb-1">Dr. Calvin Carlo</h5>
                        <p class="text-muted mb-0">Orthopedic</p>
                    </div>

                    <ul class="list-unstyled sidebar-nav mb-0">
                        {links.map((data, index) =>
                            <li key={index} class="navbar-item"><Link href={data.path} class="navbar-link">{data.svg ? data.svg : <i className={`${data.icon} navbar-icon`}></i>} {data.label}</Link></li>
                        )} */}
                {/* <li class="navbar-item"><a href="doctor-appointment.html" class="navbar-link"><i class="ri-calendar-check-line align-middle navbar-icon"></i> Appointment</a></li>
                        <li class="navbar-item"><a href="doctor-schedule.html" class="navbar-link"><i class="ri-timer-line align-middle navbar-icon"></i> Schedule Timing</a></li>
                        <li class="navbar-item"><a href="invoices.html" class="navbar-link"><i class="ri-pages-line align-middle navbar-icon"></i> Invoices</a></li>
                        <li class="navbar-item"><a href="doctor-messages.html" class="navbar-link"><i class="ri-mail-unread-line align-middle navbar-icon"></i> Messages</a></li>
                        <li class="navbar-item"><a href="doctor-profile.html" class="navbar-link"><i class="ri-user-line align-middle navbar-icon"></i> Profile</a></li>
                        <li class="navbar-item"><a href="doctor-profile-setting.html" class="navbar-link"><i class="ri-user-settings-line align-middle navbar-icon"></i> Profile Settings</a></li>
                        <li class="navbar-item"><a href="patient-list.html" class="navbar-link"><i class="ri-empathize-line align-middle navbar-icon"></i> Patients</a></li>
                        <li class="navbar-item"><a href="patient-review.html" class="navbar-link"><i class="ri-chat-1-line align-middle navbar-icon"></i> Patients Review</a></li>
                        <li class="navbar-item"><a href="doctor-chat.html" class="navbar-link"><i class="ri-chat-voice-line align-middle navbar-icon"></i> Chat</a></li>
                        <li class="navbar-item"><a href="login.html" class="navbar-link"><i class="ri-login-circle-line align-middle navbar-icon"></i> Login</a></li>
                        <li class="navbar-item"><a href="forgot-password.html" class="navbar-link"><i class="ri-device-recover-line align-middle navbar-icon"></i> Forgot Password</a></li> */}
                {/* <li class="navbar-item"><Link href={userRole=="admin"?"/admin/login":"/"} class="navbar-link"><i class="ri-login-circle-line align-middle navbar-icon"></i> LogOut</Link></li> */}

                {/* </ul>
                </div> */}
            </div>
        </>
    )
}

export default Sidebar