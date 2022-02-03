import React from 'react';
import './Nav.css'
import logo from '../../assets/imagens/poesiaDeEsquina.jpeg'
import { Link } from 'react-router-dom'

const Nav = () =>{
    return(
        <header className="cabecalho container">
        <div className="menu-hamburger">
          <span className="menu-hamburger__icone">
          </span>
        </div>
        <div className="cabecalho-container">
          <Link to="/" className="flex flex--centro">
            <img className="cabecalho__logo" src={logo} alt="Logo Doguito"/>
            <h1 className="cabecalho__titulo">Poesia Da Esquina</h1>
          </Link>
        </div>
  
        <nav className="menu-cabecalho">
          <ul className="menu-itens">
            <li><Link to="#" className="menu-item menu-item--entrar">Entrar</Link></li>
            <li><Link to="#" className="menu-item">Produtos</Link></li>
            <li><Link to="/" className="menu-item">Blog</Link></li>
            <li><Link to="/sobre" className="menu-item">Sobre</Link></li>
          </ul>
  
        </nav>
        <div className="menu-cabecalho-background"></div>
      </header>
    )
}

export default Nav
