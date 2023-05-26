import React from 'react';

function Galery() {
    return (
        <div>
            <div className="container mx-auto my-20 text-center">
                <h2 className="font_especial text-2xl text-rose-400">fofinhos e deliciosos</h2>
                <h1 className="text-4xl font-bold font_items mb-8 ">BEM CASADOS</h1>
                <p className="font_especial text-2xl">"Deixe-se envolver pela doçura e encanto dos bem-casados, onde cada mordida é um abraço de amor em seu paladar."</p>

                {/* First Column */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-32 font_items text-center">
                    <div className="bg-white rounded overflow-hidden">
                        <img src="images/IMG-20230515-WA0110.jpg" alt="Imagem 1" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 font_items">Tradicional</h2>
                            <p className="text-gray-700 font_especial tam_font">Bem casado tradicional(doce de leite), papel crepom e fita de cetim</p>
                            <p className="font_price">R$ 2.99</p>
                        </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                        <img src="images/IMG-20230515-WA0099.jpg" alt="Imagem 2" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 font_items">Tradicional</h2>
                            <p className="text-gray-700 font_especial tam_font">Bem casado tradicional(doce de leite), papel crepom, fita de cetim e flor</p>
                            <p className="font_price">R$ 3.99</p>
                        </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                        <img src="images/IMG-20230515-WA0067.jpg" alt="Imagem 3" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 font_items">Tradicional</h2>
                            <p className="text-gray-700 font_especial tam_font">Bem casado tradicional(doce de leite), papel crepom e fita de cetim grossa</p>
                            <p className="font_price">R$ 3.99</p>
                        </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                        <img src="images/IMG-20230515-WA0085.jpg" alt="Imagem 4" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 font_items">Tradicional</h2>
                            <p className="text-gray-700 font_especial tam_font">Bem casado tradicional(doce de leite), papel crepom e fita de cetim</p>
                            <p className="font_price">R$ 2.99</p>
                        </div>
                    </div>
                </div>

                {/* Second Column */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-32 text-center">
                    <div className="bg-white rounded overflow-hidden">
                        <img src="images/IMG-20230515-WA0092.jpg" alt="Imagem 1" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 font_items">Tradicional</h2>
                            <p className="text-gray-700 font_especial tam_font">Bem casado tradicional(doce de leite), tecido e fita cordão</p>
                            <p className="font_price">R$ 3.99</p>
                        </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                        <img src="images/IMG-20230515-WA0087.jpg" alt="Imagem 2" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 font_items">Tradicional</h2>
                            <p className="text-gray-700 font_especial tam_font">Bem casado tradicional(doce de leite), tecido e fita cetim</p>
                            <p className="font_price">R$ 3.99</p>
                        </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                        <img src="images/IMG-20230515-WA0084.jpg" alt="Imagem 3" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 font_items">Tradicional</h2>
                            <p className="text-gray-700 font_especial tam_font">Bem casado tradicional(doce de leite), tecido e renda</p>
                            <p className="font_price">R$ 3.99</p>
                        </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                        <img src="images/IMG-20230515-WA0090.jpg" alt="Imagem 4" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 font_items">Tradicional</h2>
                            <p className="text-gray-700 font_especial tam_font">Bem casado tradicional(doce de leite), papel crepom e fita de cetim decorada</p>
                            <p className="font_price">R$ 3.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galery;
