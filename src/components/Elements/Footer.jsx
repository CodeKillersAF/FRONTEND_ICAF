import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
        <section className='footer-title'>
          <p className='footer-title-heading'>
            Get All Details In One Place .... Application Framework Project
          </p>
          <p className='footer-title-text'>
            Official ICAF Site
          </p>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
                <Link>Best ICAF Site</Link>

            </div>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link>icaf@gmail.com</Link>
              <Link>077*******</Link>

            </div>
          </div>
          {/* <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Videos</h2>

            </div>
          </div> */}
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
              ICAF <i class="fas fa-dove" />
              </Link>
            </div>
            <small class='website-rights'>ICAF # 2021</small>
            <div class='social-icons'>
              <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                <i class='fab fa-facebook-f' />
              </Link>

              <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                <i class='fab fa-instagram' />
              </Link>

              <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
                <i class='fab fa-youtube' />
              </Link>

              <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                <i class='fab fa-twitter' />
              </Link>

              <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
                <i class='fab fa-linkedin' />
              </Link>

            </div>
          </div>
        </section>
      </div>
    )
}

export default Footer
