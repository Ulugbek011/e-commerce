import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
function Navbar() {
    return (
        <nav className="d-flex justify-content-between py-2 align-items-center wrapper">


            <Image src="/images/picnicLogo.png" alt="Logo" width={60} height={60} />

            <div className="text-decoration-none d-flex justify-content-between w-25 navbarList">
                <a className="text-decoration-none text-black" href="#">Bosh sahifa</a>
                <a className="text-decoration-none text-black" href="#">Mahsulotlar</a>
                <a className="text-decoration-none text-black" href="#">Aloqa</a>
                <a className="text-decoration-none text-black" href="#">Blog</a>
            </div>
            <div className="d-flex align-items-center gap-3">
                <i className="fa-solid fa-magnifying-glass searchInp"></i>
                <input className="form-control navbarInput" type="text" placeholder="search for products" />
                <button className="btn btn-outline-dark"><FaShoppingCart></FaShoppingCart></button>
                <button className="btn btn-outline-dark hamburger"><GiHamburgerMenu></GiHamburgerMenu></button>


            </div>
        </nav>
    )
}

export default Navbar