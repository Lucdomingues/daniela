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
          <p className="about-me__description font_price">Sou a Daniela Camargo, e é um prazer imenso me apresentar a vocês. Há 13 anos, mergulhei de cabeça no maravilhoso mundo dos bem casados e desde então, tenho vivido um verdadeiro conto de fadas açucarado. Ah, como amo o que faço! <br /> <br />
      
            Além de ser uma confeiteira de coração, sou mãe de dois filhos adoráveis, que são minha maior inspiração. Eles trazem luz e doçura à minha vida, assim como os docinhos que preparo com tanto carinho. <br /> <br />

            Sabe, eu realmente me esforço para criar bem casados que sejam verdadeiras obras de arte, cheias de amor em cada detalhe. Cada mordida deve ser uma experiência mágica, com uma textura macia e um sabor que te leva para as nuvens. Tenho certeza de que cada um dos meus bem casados irá te fazer sorrir e suspirar de felicidade. <br /> <br />
          
            Se você está planejando seu casamento dos sonhos ou qualquer outro evento especial, estou aqui para torná-lo ainda mais mágico. Os meus bem casados são perfeitos para encantar seus convidados e criar memórias doces que durarão para sempre. <br /> <br />

            Espero ansiosamente por sua visita! Venha me conhecer, deixe-se encantar pelo meu mundo açucarado e juntos vamos tornar seus sonhos em realidade. <br /> <br />

            Com todo o meu carinho, <br />
            Daniela Camargo</p>
          <div>
            <a href="https://wa.me/5511947319372" target="blank" className="about_link font_especial">Me chame!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
