import React from 'react';
import { Link } from 'react-router-dom';

function Oferts() {
  return (
    <div>
      <div id='test'></div>
      <div id='test2' className="bg-cover bg-center h-screen flex flex-col items-start justify-center oferts">
        <h1 className="text-6xl font_items text-white font-bold mb-4 py-4">Daniela <br /> Camargo</h1>
        <div className="lines">
          <div className="diamonds"></div>
        </div>
        <p className="text-white text-4xl mb-8 mt-4 font_especial">Conheça um pouco sobre mim!</p>
        <Link to="/about" className="btn-transparent btn-lg btn-hover text-2xl mx-2 text-white border-white py-2 px-20 border-solid border-2 font_button">SOBRE</Link>
      </div>
    </div>
  );
}

export default Oferts;
