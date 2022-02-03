import React from 'react'
import imagem from '../assets/img/logo.jpeg'
import '../assets/css/componentes/cabecalho.css'
import { Link } from 'react-router-dom'

const Cabecalho = () => { 
  return(
    <header className="cabecalho container">
    
      <nav className="menu-cabecalho">
        <img className="cabecalho__logo" src={imagem} />
        <ul className="menu-itens">
          <li><Link to="/" className="menu-item">Home</Link></li>
          <li><Link to="#" className="menu-item">Sobre </Link></li>
          <li><Link to="#" className="menu-item">Eventos </Link></li>
          <li><Link to="#" className="menu-item">Blog</Link></li>
          <li><Link to="/galeria" className="menu-item">Galeria</Link></li>
        </ul>

      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  )
}


export default Cabecalho