import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div id='principal' className='font_header text-base flex flex-col md:flex-row justify-between mx-4 md:mx-8 py-8 items-center'>
        <div id="container" className="flex items-center">
          <div id="first_container" className="flex justify-start">
            <Link to="/"><img src="images/logo.png" alt="LOGO" className="h-24" /></Link>
          </div>
        </div>
        <div id="second_container" className="flex justify-end">
          <input
            type="checkbox"
            className="menu-checkbox"
            id="menu-checkbox"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <label className="menu-icon" htmlFor="menu-checkbox">
            {isMenuOpen ? (
              <i className="uil uil-times"></i>
            ) : (
              <i className="uil uil-bars"></i>
            )}
          </label>
        </div>
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-item mx-2 nav-item-active font-medium px-3 pb-2 pt-8 text-slate-700 rounded-lg" onClick={toggleMenu}>Início</Link>
          <Link to="/products" className="nav-item mx-2 nav-item-active font-medium px-3 pb-2 pt-8 text-slate-700 rounded-lg" onClick={toggleMenu}>Nossos Produtos</Link>
          <Link to="/about" className="nav-item mx-2 nav-item-active font-medium px-3 pb-2 pt-8 text-slate-700 rounded-lg" onClick={toggleMenu}>Sobre</Link>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
