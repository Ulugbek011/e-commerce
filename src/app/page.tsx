import Contacts from '@/components/contacts'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar></Navbar>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  )
}

export default page