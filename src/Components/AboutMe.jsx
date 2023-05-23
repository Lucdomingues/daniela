import React from 'react';

function AboutMe() {
  return (
    <div>
      <img src="images/wave-haikei (1).png" alt="wave" className='w-full h-32' />
      <div className="about-me">
        <div className="about-me__image-container">
          <img src="images/autor.png" alt="Author" className="about-me__image" />
        </div>
        <div className="about-me__content">
          <h2 className="about-me__title font_especial">Sobre a Daniela</h2>
          <p className="about-me__description font_items">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus placerat rutrum. Aenean eget ultrices lacus.  ut ligula mi. Nulla ut ris lorem. Nam hendrerit eleifend libero, non iaculis sapien semper nec.</p>
          <div>
            <a href="https://wa.me/5511947319372" target="_blank" className="about_link font_especial">Me chame!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
