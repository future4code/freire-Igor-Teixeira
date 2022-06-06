import React, { Component } from 'react';
import './App.css';
import explorar from "../img/explorar.png"
import historico from "../img/historico.png"
import home from "../img/home.png"
import inscritos from "../img/inscritos.png"
import logo from "../img/icon.png"
import lupa from "../img/lupa.png"
import originais from "../img/originais.png"



class App extends Component {
  render() {
    const titulo = "Título do vídeo"
    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido")
  }
    return (
    <div>
       <div className="tela-inteira">
        <header>
            <div className='logo-header'>
                <img src={logo}/>
                <h1>LabTube</h1>
            </div>
            <div id="campoDeBusca">
                <input type="text" placeholder="pesquisar" id="campoDeBusca"/>
                <label><img src={lupa}/></label>
            </div>
            
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical"><img src={home}/><p>Início</p></li>
                    <li className="botoes-meunu-vertical"><img src={explorar}/><p>explorar</p></li>
                    <li className="botoes-meunu-vertical"><img src={inscritos}/><p>Inscrições</p></li>
                    <hr/>
                    <li className="botoes-meunu-vertical"><img src={originais}/><p>Originais</p></li>
                    <li className="botoes-meunu-vertical"><img src={historico}/><p>Histórico</p></li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
    )
  }
}

export default App
