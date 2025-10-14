import React from 'react'

function Contacts() {
    return (
        <div>
            <section className="page1">
                <h1 className="text1" >Biz bilan bog’laning</h1>
            </section>
            <div className="wrapper pt-3">
                <section className="page2 py-5 my-5">
                    <div className="row align-items-center">

                        <div className="col-lg-6 d-flex flex-column  gap-5">
                            <div className="d-flex flex-column gap-3">
                                <h2 className="fw-bold text2 ">Keling, biz bilan gaplashaylik</h2>
                                <p>Savollar, shartlar yoki takliflar? Shaklni to‘ldiring va biz tez orada bog‘lanamiz.</p>
                            </div>

                            <div className="contact-info mt-4">
                                <p><i className="fa-solid fa-location-dot me-3"></i>1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.</p>
                                <p><i className="fa-solid fa-phone me-3"></i>+1 234 678 9108 99</p>
                                <p><i className="fa-solid fa-envelope me-3"></i>contact@moralizer.com</p>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="p-4 bg-white shadow-sm rounded">
                                <form className="d-flex flex-column gap-3">
                                    <div className="row mb-3">
                                        <div className="col-md-6 inp2">
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <input type="email" className="form-control" placeholder="Email" />


                                    <input type="number" className="form-control" placeholder="Phone number" />



                                    <textarea className="form-control" rows={4} placeholder="Your message..."></textarea>


                                    <button type="submit" className="btn btn-success">Send message</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contacts