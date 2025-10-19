"use client"
import Contacts from '@/components/contacts'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase/firebase.config'

function page() {
  const [products, setProducts] = useState([])
  async function fetchProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.docs.map((doc) => {
      const product = {
        id: doc.id,
        ...doc.data()
      }
      products.push(product)
    })
    setProducts([...products]);
    console.log(products);
  }
  useEffect(() => { fetchProducts() }, [])
  return (
    <div>
      <Navbar></Navbar>
      <div className='wrapper'>
        <main className="container py-5">
          <div className="row align-items-center g-4 flex-column flex-lg-row">

            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="fw-bold display-5 mb-3">
                Zo’r jihozlar bilan <br />
                sarguzashtlarni kashf eting
              </h1>
              <p className="text-muted mb-4">
                Sarguzasht ishqibozlari uchun mo‘ljallangan ochiq havoda kerakli
                jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager
                anjomlargacha, hammasi sizning tajribangizni yuksaltirish uchun.
              </p>
              <button className="btn btn-success px-4 py-2 rounded-pill fw-semibold">
                Xarid qiling
              </button>


              <div className="d-flex flex-wrap gap-4 mt-5 justify-content-center justify-content-lg-start">
                <div>
                  <h4 className="fw-bold">200+</h4>
                  <p className="text-muted small mb-0">Xalqaro brendlar</p>
                </div>
                <div>
                  <h4 className="fw-bold">2,000+</h4>
                  <p className="text-muted small mb-0">Yuqori Sifatli Mahsulotlar</p>
                </div>
                <div>
                  <h4 className="fw-bold">30,000+</h4>
                  <p className="text-muted small mb-0">Baxtli mijozlar</p>
                </div>
              </div>
            </div>


            <div className="col-lg-6 d-flex justify-content-center">
              <div className="rounded-4 overflow-hidden shadow-sm" style={{ maxWidth: "500px" }}>
                <Image
                  src="/images/tent.png"
                  alt="Tent"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </main>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default page