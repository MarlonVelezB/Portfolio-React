import { useState, useEffect } from 'react';
import './styles/NavBarStyle.css';
import logoNav from '../assets/logo-portfolio.png';

export const NavBar = () => {
    const [scrollY, setScrollY] = useState(0);

    const styleDownloadCV = {
        color: scrollY > 39 ? '#1877f2' : '#ffffff',
        transition: 'background-color 0.3s ease',
    };

    const navbarStyle = {
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #1877f2',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        transition: 'background-color 0.3s ease',
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);      
    };
  
    useEffect(() => {
      // Agregar el event listener cuando el componente se monta
      window.addEventListener('scroll', handleScroll);
  
      // Remover el event listener cuando el componente se desmonta
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // El segundo argumento del useEffect es un array de dependencias, en este caso, vacío

    return (
        <nav className="navbar" style={ scrollY > 39 ? navbarStyle : {}}>
            <a href="#" className="logo" id="logo">
                <img src={logoNav} alt="Logo Nav" />
                Marlon | Portfolio
            </a>
            <ul className="nav">
                <li className="nav-item me-4">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item me-4">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item me-4">
                    <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item me-4">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item me-4">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
            <a href="https://www.multitrabajos.com/postulantes/curriculum" className="download-cv">
                <i className="pi pi-cloud-download" style={styleDownloadCV}></i>
                <span style={styleDownloadCV}>Download CV</span>
            </a>
        </nav>
    );
}