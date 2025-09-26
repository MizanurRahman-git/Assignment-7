import React from 'react';
import Container from './Container';

const Navber = () => {
    return (
        <nav>
            <Container>
            <div className="flex justify-between py-3 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li>Home</li>
      <li>FAQ</li>
      <li>Changelog</li>
      <li>Blog</li>
      <li>Download</li>
      <li>Contact</li>
      </ul>
    </div>
    <a className="btn btn-ghost font-bold text-[24px]">CS — Ticket System</a>
  </div>
  <div className='flex justify-between'>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 lg:mr-18 xl:mr-10 gap-5 text-[16px]">
      <li>Home</li>
      <li>FAQ</li>
      <li>Changelog</li>
      <li>Blog</li>
      <li>Download</li>
      <li>Contact</li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn px-8 py-2 lg:mr-20 cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hidden md:block">+  New Ticket</a>
  </div>
  </div>
</div>
            </Container>
        </nav>
    );
};

export default Navber;