import React from "react";
import './style.css';

const Header = () => {

    return (
        <header>
            <nav className="hot-topics">
                <div>
                    <ul>
                        <li>ASSUNTOS EM DESTAQUE:</li>
                        <li>Coronavírus</li>
                        <li>Vídeos</li>
                        <li>Edições da revista</li>
                    </ul>
                    <a href="#">ENTRAR</a>
                </div>
            </nav>
            <div className="menu">
                <div className="menu-corpo">
                    <div>MENU</div>
                    <h1>SAÚDE</h1>
                    <div>
                        <button>ASSINE</button>
                        <p>BUSCAR</p>
                    </div>
                </div>
            </div>
            <nav className="main">
                <p>ALIMENTAÇÃO</p>
                <p>MEDICINA</p>
                <p>FITNESS</p>
                <p>MENTE</p>
                <p>FAMÍLIA</p>
                <p>VIDA ANIMAL</p>
                <p>COLUNISTAS</p>
                <p>LEITURA SAUDÁVEL</p>
            </nav>
        </header>
    )

}

export default Header;