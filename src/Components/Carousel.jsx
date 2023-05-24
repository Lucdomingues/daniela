import React from 'react';

function Carousel() {
  return (
    <div className="relative h-screen">
      <div id="carouselExample" className="carousel slide h-3/4">
        <div className="carousel-inner h-full">
          <div className="carousel-item active h-full">
            <img src="images/carrosel1.jpg" className="d-block w-full h-full object-cover brightness-50" alt="Slide 1" />
            <div className="carousel-caption d-flex flex-col justify-center items-center h-full">
              <h1 className="text-9xl mb-11 text-white font_especial">Bem Casados</h1>

              <div className="lines">
                <div className="diamonds"></div>
              </div>

              <div className="mt-14">
                <a href="https://wa.me/5511947319372" target="blank" className="btn-transparent btn-lg text-2xl mx-2 text-white border-white py-3 px-20 border-solid border-2 btn-hover font_button">Peça já</a>
              </div>
            </div>
          </div>
          <div className="carousel-item h-full">
            <img src="images/carrosel2.jpg" className="d-block w-full h-full object-cover brightness-50" alt="Slide 2" />
          </div>
          <div className="carousel-item h-full">
            <img src="images/carrosel3.jpg" className="d-block w-full h-full object-cover brightness-50" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
