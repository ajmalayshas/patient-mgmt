"use client"
import React from 'react'

const page = () => {
    return (
        <>
            <h5 class="mb-0">Dashboard</h5>
            <div class="row">
                <div class="col-xl-3 col-lg-6 mt-4">
                    <div class="card shadow border-0 p-4">
                        <div class="d-flex justify-content-between mb-3">
                            <h6 class="align-items-center mb-0">Users <span class="badge rounded-pill bg-soft-primary ms-1">+15%</span></h6>
                            <p class="mb-0 text-muted">220+ Week</p>
                        </div>
                        <div id="chart-1"></div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-6 mt-4">
                    <div class="card shadow border-0 p-4">
                        <div class="d-flex justify-content-between mb-3">
                            <h6 class="align-items-center mb-0">Patients <span class="badge rounded-pill bg-soft-success ms-1">+20%</span></h6>
                            <p class="mb-0 text-muted">220+ Week</p>
                        </div>
                        <div id="chart-2"></div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-6 mt-4">
                    <div class="card shadow border-0 p-4">
                        <div class="d-flex justify-content-between mb-3">
                            <h6 class="align-items-center mb-0">Urgent <span class="badge rounded-pill bg-soft-warning ms-1">+5%</span></h6>
                            <p class="mb-0 text-muted">220+ Week</p>
                        </div>
                        <div id="chart-3"></div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-6 mt-4">
                    <div class="card shadow border-0 p-4">
                        <div class="d-flex justify-content-between mb-3">
                            <h6 class="align-items-center mb-0">Canceled <span class="badge rounded-pill bg-soft-danger ms-1">-5%</span></h6>
                            <p class="mb-0 text-muted">220+ Week</p>
                        </div>
                        <div id="chart-4"></div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-4 col-lg-6 mt-4">
                    <div class="card border-0 shadow rounded">
                        <div class="d-flex justify-content-between p-4 border-bottom">
                            <h6 class="mb-0"><i class="uil uil-calender text-primary me-1 h5"></i> Latest Appointment</h6>
                            <h6 class="text-muted mb-0">55 Patients</h6>
                        </div>

                        <ul class="list-unstyled mb-0 p-4">
                            <li>
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/01.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Calvin Carlo</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>

                            <li class="mt-4">
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/02.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Joya Khan</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>

                            <li class="mt-4">
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/03.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Amelia Muli</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>

                            <li class="mt-4">
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/04.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Nik Ronaldo</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>

                            <li class="mt-4">
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/05.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Crista Joseph</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-6 mt-4">
                    <div class="card border-0 shadow rounded">
                        <div class="d-flex justify-content-between p-4 border-bottom">
                            <h6 class="mb-0"><i class="uil uil-calendar-alt text-primary me-1 h5"></i> Upcoming Appointment</h6>
                            <h6 class="text-muted mb-0">55 Patients</h6>
                        </div>

                        <ul class="list-unstyled mb-0 p-4">
                            <li>
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/06.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Cristino Murphy</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>

                            <li class="mt-4">
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/07.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Nick Jons</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>

                            <li class="mt-4">
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/08.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Alex Dirio</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>

                            <li class="mt-4">
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/09.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Vrunda Koli</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>

                            <li class="mt-4">
                                <a href="javascript:void(0)">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-inline-flex">
                                            <img src={"/images/client/10.jpg"} class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                            <div class="ms-3">
                                                <h6 class="text-dark mb-0 d-block">Aisha Low</h6>
                                                <small class="text-muted">Booking on 27th Nov, 2020</small>
                                            </div>
                                        </div>
                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-12 mt-4">
                    <div class="card border-0 shadow rounded">
                        <div class="p-4 border-bottom">
                            <h6 class="mb-0">Patient's Review</h6>
                        </div>

                        <div class="p-4">
                            <div class="client-review-slider">
                                <div class="tiny-slide">
                                    <p class="text-muted fst-italic">" It seems that only melodies in order to have a 'ready-made' text to sing with the melody of the originalthe 'Lorem Ipsum', which is said to have originated century. "</p>

                                    <div class="d-inline-flex align-items-center">
                                        <img src={"/images/client/01.jpg"} class="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt="" />
                                        <div class="ms-3">
                                            <ul class="list-unstyled d-block mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <h6 class="text-primary">- Thomas Israel <small class="text-muted">C.E.O</small></h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <p class="text-muted fst-italic">" The advantage of its writing melodies in order to have a 'ready-made' text to sing with the melody and the to itself or distract the viewer's attention from the layout. "</p>

                                    <div class="d-inline-flex align-items-center">
                                        <img src={"/images/client/02.jpg"} class="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt="" />
                                        <div class="ms-3">
                                            <ul class="list-unstyled d-block mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <h6 class="text-primary">- Carl Oliver <small class="text-muted">P.A</small></h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <p class="text-muted fst-italic">" There is now an in order to have a 'ready-made' text to sing with the melody alternatives to the classic Lorem Ipsum texts are amusing. "</p>

                                    <div class="d-inline-flex align-items-center">
                                        <img src={"/images/client/03.jpg"} class="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt="" />
                                        <div class="ms-3">
                                            <ul class="list-unstyled d-block mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <h6 class="text-primary">- Barbara McIntosh <small class="text-muted">M.D</small></h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <p class="text-muted fst-italic">" According to most sources in order to have a 'ready-made' text to sing with the melody the origin of the text by compiling all the instances. "</p>

                                    <div class="d-inline-flex align-items-center">
                                        <img src={"/images/client/04.jpg"} class="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt="" />
                                        <div class="ms-3">
                                            <ul class="list-unstyled d-block mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <h6 class="text-primary">- Christa Smith <small class="text-muted">Manager</small></h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <p class="text-muted fst-italic">" It seems that only in order to have a 'ready-made' text to sing with the melody 'Lorem Ipsum', which is said to have originated 16th century. "</p>

                                    <div class="d-inline-flex align-items-center">
                                        <img src={"/images/client/05.jpg"} class="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt="" />
                                        <div class="ms-3">
                                            <ul class="list-unstyled d-block mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <h6 class="text-primary">- Dean Tolle <small class="text-muted">Developer</small></h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <p class="text-muted fst-italic">" It seems that only lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody of time certain letters were added or deleted at the text. "</p>

                                    <div class="d-inline-flex align-items-center">
                                        <img src={"/images/client/06.jpg"} class="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt="" />
                                        <div class="ms-3">
                                            <ul class="list-unstyled d-block mb-0">
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <h6 class="text-primary">- Jill Webb <small class="text-muted">Designer</small></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-center mt-3">
                                <div class="col-md col-6 text-center pt-3">
                                    <img src={"/images/client/amazon.png"} class="avatar avatar-client" alt="" />
                                </div>

                                <div class="col-md col-6 text-center pt-3">
                                    <img src={"/images/client/google.png"} class="avatar avatar-client" alt="" />
                                </div>

                                <div class="col-md col-6 text-center pt-3">
                                    <img src={"/images/client/lenovo.png"} class="avatar avatar-client" alt="" />
                                </div>

                                <div class="col-md col-6 text-center pt-3">
                                    <img src={"/images/client/paypal.png"} class="avatar avatar-client" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-3 col-md-6 mt-4">
                    <div class="card features feature-primary text-center border-0 p-4 rounded shadow">
                        <div class="icon text-center rounded-lg mx-auto">
                            <i class="uil uil-message align-middle h3 mb-0"></i>
                        </div>
                        <div class="card-body p-0 mt-3">
                            <a href="javascript:void(0)" class="title text-dark h5">New Messages</a>
                            <p class="text-muted my-2">Due to its wide spread use as filler text</p>
                            <a href="javascript:void(0)" class="link">Read more <i class="ri-arrow-right-line align-middle"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mt-4">
                    <div class="card features feature-primary text-center border-0 p-4 rounded shadow">
                        <div class="icon text-center rounded-lg mx-auto">
                            <i class="uil uil-envelope-star align-middle h3 mb-0"></i>
                        </div>
                        <div class="card-body p-0 mt-3">
                            <a href="javascript:void(0)" class="title text-dark h5">Latest Proposals</a>
                            <p class="text-muted my-2">Due to its wide spread use as filler text</p>
                            <a href="javascript:void(0)" class="link">View more <i class="ri-arrow-right-line align-middle"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mt-4">
                    <div class="card features feature-primary text-center border-0 p-4 rounded shadow">
                        <div class="icon text-center rounded-lg mx-auto">
                            <i class="uil uil-hourglass align-middle h3 mb-0"></i>
                        </div>
                        <div class="card-body p-0 mt-3">
                            <a href="javascript:void(0)" class="title text-dark h5">Package Expiry</a>
                            <p class="text-muted my-2">Due to its wide spread use as filler text</p>
                            <a href="javascript:void(0)" class="link">Check here <i class="ri-arrow-right-line align-middle"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mt-4">
                    <div class="card features feature-primary text-center border-0 p-4 rounded shadow">
                        <div class="icon text-center rounded-lg mx-auto">
                            <i class="uil uil-heart align-middle h3 mb-0"></i>
                        </div>
                        <div class="card-body p-0 mt-3">
                            <a href="javascript:void(0)" class="title text-dark h5">Saved Items</a>
                            <p class="text-muted my-2">Due to its wide spread use as filler text</p>
                            <a href="javascript:void(0)" class="link">View items <i class="ri-arrow-right-line align-middle"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page