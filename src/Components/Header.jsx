import React from 'react';
import NavBar from './NavBar';

function Header() {
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between mx-4 md:mx-8 py-2 border-b">
                <div className="text-sm font_header">
                    <span className="text-pink-300 pr-2">
                        <i className="uil uil-map-marker text-pink-400 pr-2"></i>Endereço:
                    </span>
                    <span className="break-all">
                        Rua Fernandes Correia Dias, 49 - Jardim Mangalot, São Paulo - SP
                    </span>
                    <span className="text-pink-300 pr-2">
                        <i className="uil uil-whatsapp text-pink-400 pr-2 pl-5"></i>WhatsApp:
                    </span>
                    <span>(11) 94731-9372</span>
                </div>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a target="blank" href="https://www.instagram.com/danielacamargo.bemcasados/">
                        <i className="uil uil-instagram text-pink-400"></i>
                    </a>
                    <a href="https://www.facebook.com/daniela.camargo.5855594/" target="blank">
                        <i className="uil uil-facebook-f text-pink-400"></i>
                    </a>
                </div>
            </div>
            <NavBar />
        </div>
    );
}

export default Header;
