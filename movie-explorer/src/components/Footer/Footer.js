import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__content'>
        <div className='footer__project-name-block'>
          <p className='footer__project-name'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        </div>
        <div className='footer__info'>
          <p className='footer__year'>© 2020</p>
          <div className='footer__link-block'>
            <a href='https://practicum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
            <a href='https://github.com/AgrrFoss' className='footer__link'>Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;