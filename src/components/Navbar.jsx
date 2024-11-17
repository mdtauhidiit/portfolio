import React from 'react';
import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='mb-3 flex items-center justify-between py-6'>
       <div className="flex flex-shrink-0 items-center">
       <a href="/"><h1 class="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text tracking-tight text-3xl text-transparent">MT</h1></a>
       </div>
       <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https:/www.linkedin.com/in/mdtauhid204' target='_blank'><FaLinkedin/></a>
        <a href='https:/www.github.com/mdtauhidiit' target='_blank'> <FaGithub/></a>
        <a href='https:/www.instagram.com/__.mohd.tauhid.__' target='_blank'><FaInstagram/></a>
        <a href="#"><FaSquareXTwitter/></a>
       </div>
    </nav>
  )
}

export default Navbar