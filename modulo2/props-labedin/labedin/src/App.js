import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import MinhaFoto from './img/foto.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaFoto} 
          nome="Igor" 
          descricao="Oi, eu sou o Igor sou programador full-stack."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/6327/6327790.png" 
          texto="Ver mais"
        />

         <CardPequeno
      imagem="https://www.jacui.mg.leg.br/imagens/email.png/image"
      nome="Email:"
      endereco="igor.labenu@gmail.com"
      />
      <CardPequeno
      imagem="https://w1.pngwing.com/pngs/547/849/png-transparent-black-circle-address-symbol-font-awesome-user-interface-pointer-line-angle.png"
      nome="Endereço:"
      endereco="Rua santana 0000 Sc"
      />
      </div>
     


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB" 
          nome="Labenu" 
          descricao="Estudante!" 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/CgXYkXzLQvvhXTxTDLykz9ePGLI=/400x400/smart/filters:format(webp)/i490082.jpeg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://www.edvaldoeliezer.com.br/wp-content/uploads/2017/05/linkedin-logo.png"
          link="https://www.linkedin.com/in/igor-teixeira-74bb03235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdDuT58vsRCWZKABR%2BLFjFw%3D%3D" 
          texto="Linkedin" 
          
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
