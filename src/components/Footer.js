import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState('');

  useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    setYear({ year });
  }, []);

  return (
    <footer>
      <section className='main-footer'>
        <div className='footer-col-1'>
          <span>Get Help</span>
          <Link to='/contact'>Contact</Link>
          <Link to='/shipping-return'>Shipping & Return</Link>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </div>

        <div className='footer-col-2'>
          <span>Join Our Newsletter</span>
          <p>Stay Ahead and Receive Exclusive Deals</p>
          <input type='text' name='lastname' placeholder='Your Email...' />
        </div>

        <div className='footer-col-3'>
          <Link to='/'>
            <img
              src='/images/pictograms/facebook.svg'
              alt='facebook'
              className='social facebook'
            />
          </Link>
          <Link to='/'>
            <img
              src='/images/pictograms/instagram.svg'
              alt='instagram'
              className='social instagram'
            />
          </Link>
          <Link to='/'>
            <img
              src='/images/pictograms/linkedin.svg'
              alt='linkedin'
              className='social linkedin'
            />
          </Link>
        </div>
      </section>

      <section className='copyright'>
        <p>
          © {year ? year.year + ' ' : ''}Just A Dash Beauty. All Rights Reserved
        </p>
        <p>
          <Link to='/'>Term of Use</Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
