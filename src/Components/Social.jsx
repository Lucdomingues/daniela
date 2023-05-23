import React from 'react'

function Social() {
  return (
      <div class="container mx-auto px-4 py-8 my-20">
          <div class="flex space-x-4 justify-center text-rose-400">
              <div class="diamond mx-4 hover:text-rose-500 cursor-pointer">
                  <a href="https://www.facebook.com/daniela.camargo.5855594/" className="transform -rotate-45" target="_blank" rel="noopener noreferrer">
                      <i class="uil uil-facebook-f "></i>
                  </a>
              </div>
              <div class="diamond mx-4 hover:text-rose-500 cursor-pointer">
                  <a href="https://www.instagram.com/danielacamargo.bemcasados/" target="_blank" className="transform -rotate-45" rel="noopener noreferrer">
                      <i class="uil uil-instagram"></i>
                  </a> 
              </div>
              <div class="diamond mx-4 hover:text-rose-500 cursor-pointer">
                  <a href="https://wa.me/5511947319372" target="_blank" className="transform -rotate-45" rel="noopener noreferrer">
                      <i class="uil uil-whatsapp"></i>
                  </a> 
              </div>
          </div>
      </div>
  )
}

export default Social