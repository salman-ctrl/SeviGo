import { useState, useEffect } from 'react';
import './App.css';
import Image from './img/bg-imgage.png';
import logo from './img/logo_SeviGO-removebg-preview.png';

function App() {
  useEffect(() => {
    let valueDisplay = document.querySelectorAll('.num');
    let totalDisplay = document.querySelector('.total');
    let interval = 7770;
    let totalSum = 0;

    const promises = Array.from(valueDisplay).map((valueDisplay) => {
      return new Promise((resolve) => {
        let start = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-val'));
        let duration = Math.floor(interval / endValue);

        let counter = setInterval(() => {
          start += 1;
          valueDisplay.textContent = start;

          if (start === endValue) {
            clearInterval(counter);
            totalSum += endValue; 
            resolve(); 
          }
        }, duration);
      });
    });

    Promise.all(promises).then(() => {
      totalDisplay.textContent = totalSum;
    });
  }, []);

  return (
    <>
      <section className='container'>
        <div className="hero"
        style={{ backgroundImage: `url(${Image})` }}></div>
        <nav className='navbar'> 
          <div className="logo">
            <img src={logo} alt="" />
            <h1>SeviGo</h1>
          </div>
          
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Pengaduan</a></li>
            <li><a href="#">Kontak</a></li>
          </ul>
          <button>Sign-in</button>
        </nav>
        <div className='headline'>
          <h1>SeviGo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis, id amet quas vitae ipsam aspernatur. Voluptate dolorum animi esse provident quo autem iste ducimus! Earum officia repudiandae illum. Atque.</p>
        </div>
      </section>

      <section className='tindakan'>
        <div className="total-tindakan">
            <h4>TOTAL TINDAKAN</h4>
            <p className='total'>00</p> 
        </div>
      </section>

      <section className="pelayanan">
        <div className="card-fasilitas">
          <h2>Fasilitas</h2>
          <p className='num' data-val="732">000</p>
        </div>
        <div className="card-fasilitas">
          <h2>Pelayanan</h2>
          <p className='num' data-val="982">000</p>
        </div>
        <div className="card-fasilitas">
          <h2>Keamanan & Ketertiban</h2>
          <p className='num' data-val="324">000</p>
        </div>
      </section>
    </>
  );
}

export default App;