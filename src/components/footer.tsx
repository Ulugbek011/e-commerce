import Image from 'next/image'
import React from 'react'
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcApplePay } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
function Footer() {
    return (
        <footer className="bg-success text-white pt-5 pb-3" style={{
            backgroundColor: "#184a25 !important"
        }}>
            <div className="wrapper">
                <div className="row text-start">

                    <div className="col-md-3 mb-4">


                        <Image src="/images/picnicLogo.png" alt="Logo" width={64} height={64} />

                        <div className="d-flex gap-3 fs-5 mb-4">
                            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>


                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold mb-3">KOMPANIYA</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className=" text-decoration-none text-secondary">Biz haqimizda</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Xususiyatlar</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Ishlash jarayoni</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Karyera imkoniyatlari</a></li>
                        </ul>
                    </div>


                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">YORDAM</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className=" text-decoration-none text-secondary">Mijozlarni qo‘llab-quvvatlash</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Yetkazib berish tafsilotlari</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Shartlar va qoidalar</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Maxfiylik siyosati</a></li>
                        </ul>
                    </div>


                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold mb-3">SAVOLLAR</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className=" text-decoration-none text-secondary">Hisob</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Yetkazib berishni boshqarish</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Buyurtmalar</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">To‘lovlar</a></li>
                        </ul>
                    </div>


                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold mb-3">RESURSLAR</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className=" text-decoration-none text-secondary">Bepul e-kitoblar</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Dasturlash bo‘yicha qo‘llanmalar</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">Qanday foydalanish - Blog</a></li>
                            <li><a href="#" className=" text-decoration-none text-secondary">YouTube pleylist</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="border-light" />


                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
                    <p className="mb-0 text-secondary">Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="d-flex gap-3 fs-3 mt-3 mt-md-0">
                        <FaCcVisa></FaCcVisa>
                        <FaCcMastercard></FaCcMastercard>
                        <FaCcApplePay></FaCcApplePay>
                        <FaCcPaypal></FaCcPaypal>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer