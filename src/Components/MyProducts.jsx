import React, { useState } from 'react';
import products from '../utils/Produtos';

function MyProducts() {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [showAll, setShowAll] = useState(false);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const showLessProducts = () => {
    setVisibleProducts((prevVisibleProducts) => Math.max(prevVisibleProducts - 4, 8));
    setShowAll(false);
  };

  const showAllProducts = () => {
    setVisibleProducts(products.length);
    setShowAll(true);
  };

  const renderProducts = () => {
    const visibleProductsArray = products.slice(0, visibleProducts);

    return visibleProductsArray.map((element) => (
      <div key={element.id} className="bg-white rounded overflow-hidden">
        <img src={element.images} alt="Imagem 1" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 font_items">{element.title}</h2>
          <p className="text-gray-700 font_especial tam_font">{element.desc}</p>
          <p className="font_price">{element.price}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="image-container mb-11 mx-4">
        <img src="images/thumbnail_IMG-20230516-WA0013.jpg" alt="Imagem 1" className="image" />
        <img src="images/LOGO-removebg-preview.png" alt="Imagem 2" className="image" />
        <img src="images/IMG-20230516-WA0012.jpg" alt="Imagem 3" className="image" />
      </div>

      <div className="container mx-auto my-20 text-center">
        <h2 className="font_especial text-2xl text-rose-400">Elegantes e Finos</h2>
        <h1 className="text-4xl font-bold font_especial mb-8 ">Nossos Produtos</h1>

        <div className="flex justify-center">
          <div className="lines_products">
            <div className="diamonds_products"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-32 font_items text-center">
          {renderProducts()}
        </div>

        <div className="flex justify-center mt-4">
          {!showAll && visibleProducts < products.length && (
            <button className="bg-rose-400 text-white py-2 px-4 rounded mr-2" onClick={showMoreProducts}>
              Mostrar Mais
            </button>
          )}

          {visibleProducts > 8 && (
            <button className="bg-rose-400 text-white py-2 px-4 rounded mr-2" onClick={showLessProducts}>
              Mostrar Menos
            </button>
          )}

          {!showAll && (
            <button className="bg-rose-400 text-white py-2 px-4 rounded mr-2" onClick={showAllProducts}>
              Mostrar Todos
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProducts;
