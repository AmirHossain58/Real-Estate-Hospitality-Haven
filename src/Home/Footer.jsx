import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <aside className='gap-0'>
  <Link to={'/'} className="font-bold text-xl">Hospitality<span className="text-red-500">Haven</span></Link>
  <p>Luxury Living, Elevated <br /> to Perfection</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Hotel Management</a>
    <a className="link link-hover">Event Planning</a>
    <a className="link link-hover">Guest Experience Enhancement</a>
    <a className="link link-hover">Concierge Services</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;