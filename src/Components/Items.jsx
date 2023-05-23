import React from 'react';
import { Link } from 'react-router-dom';

function Items() {
    return (
        <div>
            <div className="flex flex-wrap justify-center mt-5 mb-52" id='produtos'>
                <div className="max-w-sm rounded m-2">
                    <img className="w-full rounded" src="images/bem_nascido2.jpg" alt="Card Image" />
                    <div className="px-6 py-4">
                        <h1 className="font-bold text-4xl my-4 font_items">BEM NASCIDOS</h1>
                        <p className="text-gray-700 font_especial text-xl">
                            Em cada mordida do bem-nascido, sinta o doce amor que envolve o coração de uma mãe, celebrando a chegada do seu pequeno tesouro.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/products" className="text-rose-400 font_price hover:text-rose-500 hover:underline text-2xl">Dê uma olhada!</Link>
                    </div>
                </div>

                <div className="max-w-sm rounded m-2">
                    <img className="w-full rounded" src="images/bem1.jpg" alt="Card Image" />
                    <div className="px-6 py-4">
                        <h1 className="font-bold text-4xl my-4 font_items">BEM CASADOS</h1>
                        <p className="text-gray-700 font_especial text-xl">
                            Em cada mordida do bem-casado, saboreie a doce união de duas almas, celebrando o amor eterno que se entrelaça em cada instante do casamento.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/products" className="text-rose-400 font_price hover:text-rose-500 hover:underline text-2xl">Dê uma olhada!</Link>
                    </div>
                </div>

                <div className="max-w-sm rounded m-2">
                    <img className="w-full rounded" src="images/bem2.jpg" alt="Card Image" />
                    <div className="px-6 py-4">
                        <h1 className="font-bold text-4xl my-4 font_items">BEM VIVIDOS</h1>
                        <p className="text-gray-700 font_especial text-xl">
                            Em cada mordida do bem-vivido, delicie-se com a doçura das memórias compartilhadas, celebrando a vida repleta de momentos inesquecíveis e sabores que aquecem a alma.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/products" className="text-rose-400 font_price hover:text-rose-500 hover:underline text-2xl">Dê uma olhada!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Items;
