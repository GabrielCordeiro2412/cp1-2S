/* eslint-disable jsx-a11y/anchor-is-valid */
import react from 'react'
import './Header.css'

export default function Header() {
    return(
        <header>
            <nav className="navBar">
                <ul>
                    <li>ASSUNTOS EM DESTAQUE:</li>
                    <li>Coronavírus</li>
                    <li>Vídeos</li>
                    <li>Edições da revista</li>
                </ul>
                <a href="#">ENTRAR</a>
            </nav>

            <div className="sub-header">
                <h1 className="sub-header-menu">MENU</h1>
                <h1 className="sub-header-saude">SAÚDE</h1>

                <div className="sub-header-button">
                    <a href="#" className="sub-header-assine">ASSINE</a>
                    <a className="sub-header-buscar">BUSCAR</a>
                </div>
            </div>

            <nav className="second-navBar">
                <ul>
                    <li><a href="#">ALIMENTAÇÃO</a></li>
                    <li><a href="#">MEDICINA</a></li>
                    <li><a href="#">FITNESS</a></li>
                    <li><a href="#">MENTE</a></li>
                    <li><a href="#">FAMILIA</a></li>
                    <li><a href="#">VIDA ANIMAL</a></li>
                    <li><a href="#">COLUNISTAS</a></li>
                    <li><a href="#">LEITURA SAUDÁVEL</a></li>
                </ul>
            </nav>
        </header>
    )
}