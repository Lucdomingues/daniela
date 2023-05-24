import React from 'react';

function Contatc() {
    return (
        <div className="container_contact flex flex-col lg:flex-row justify-between items-center py-24 px-4 mx-8">
            <div className="w-full lg:w-1/2 mx-auto lg:ml-0 lg:mt-0 text-center lg:text-left lg:mr-16">
                <h1 className="text-5xl font-bold text-black mb-4 font_items">Faça seu orçamento!</h1>
                <p className="text-black text-2xl mb-8 font_especial leading-8">Caso tenha gostado de nossos produtos não hesite em entrar em contato conosco.</p>
                <a href="https://wa.me/5511947319372" target="blank" className="btn-transparent btn-lg text-2xl text-black border-black py-2 px-20 border-solid border-2 font_button hover:bg-white">CONTATE ME</a>
            </div>
        </div>
    );
}

export default Contatc;