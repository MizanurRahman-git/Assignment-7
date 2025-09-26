import React from 'react';
import Container from './Container';
import ximg from '../assets/x.png'
import liimg from '../assets/LinkedIn.png'
import fimg from '../assets/f.png'
import mimg from '../assets/mail.png'

const Footer = () => {
    return (
        <footer className='bg-black text-white'>
            <Container>
              <div className='grid md:grid-cols-8 space-y-12 lg:space-y-0 lg:grid-cols-12 py-20'>
                  <div className='col-span-4 ml-3 xl:ml-0 '>
                    <h1 className='font-bold text-[24px]'>CS — Ticket System</h1>
                    <p className='mt-5 w-80 text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>

                  <div className='col-span-2 space-y-5 ml-5 sm:ml-0'>
                        <h1 className='font-medium text-[20px]'>Company</h1>
                        <p className='text-[#A1A1AA]'>About Us</p>
                        <p className='text-[#A1A1AA]'>Our Mission</p>
                        <p className='text-[#A1A1AA]'>Contact Saled</p>
                  </div>
                  <div className='col-span-2 space-y-5'>
                        <h1 className='font-medium text-[20px]'>Services</h1>
                        <p className='text-[#A1A1AA]'>Products & Services</p>
                        <p className='text-[#A1A1AA]'>Customer Stories</p>
                        <p className='text-[#A1A1AA]'>Download Apps</p>
                  </div>
                  <div className='col-span-2 space-y-5 ml-5 xl:ml-0'>
                        <h1 className='font-medium text-[20px]'>Information</h1>
                        <p className='text-[#A1A1AA]'>Privacy Policy</p>
                        <p className='text-[#A1A1AA]'>Terms & Conditions</p>
                        <p className='text-[#A1A1AA]'>Join Us</p>
                  </div>
                  <div className='col-span-2 space-y-5'>
                        <h1 className='font-medium text-[20px]'>Social Links</h1>
                        <p className='flex items-center text-[#A1A1AA] gap-2'><img className='w-5 h-5' src={ximg}/> Twitter</p>
                        <p className='flex items-center text-[#A1A1AA] gap-2'><img className='w-5 h-5' src={liimg}/> LinkedIn</p>
                        <p className='flex items-center text-[#A1A1AA] gap-2'><img className='w-5 h-5' src={fimg}/> Facebook</p>
                        <p className='flex items-center text-[#A1A1AA] gap-2 text-sm sm:text-[16px]'><img className='w-5 h-5' src={mimg}/> support@cst.com</p>
                  </div>
              </div>

              <div className='text-center border-t-1 border-[#A1A1AA]'>
                <h1 className='py-6'>© 2025 CS — Ticket System. All rights reserved.</h1>
              </div>
        </Container>
        </footer>
    );
};

export default Footer;