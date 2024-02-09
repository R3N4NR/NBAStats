import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import styles from './header.module.scss'; 
import { IoMenu } from "react-icons/io5";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleResize() {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);

            if (newWidth > 680 && menuOpen) {
                setMenuOpen(false); // Fechar o menu quando a tela for maior que 680px
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    const handleCloseMenu = () => {
        setMenuOpen(false)
    }
    return (
        <header className={styles.container}>
            <div className={styles.containerContent}>
                <Link to="/teams"><span>Equipes</span></Link>
                <span>Jogadores</span>
                <Link to="/"><img src={Logo} className={styles.logo} alt="logo"/></Link>
                <span>Jogos</span>
                <span>Estatisticas</span>
            </div>
            
            {windowWidth < 680 && (
                <div className={styles.mobileNavBar}>
                    <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                        <IoMenu size="50px"/>
                    </button>
                    <Link to="/">NBA Stats<img src={Logo} className={styles.logo} alt="logo"/></Link>
                </div>
            )}

            {menuOpen && (
                <nav ref={menuRef} className={`${styles.menu} ${styles.open}`}>
                    <ul>
                        <li onClick={handleCloseMenu}><Link to="/teams">Equipes</Link></li>
                        <li><Link to="/">Jogadores</Link></li>
                        <li><Link to="/">Jogos</Link></li>
                        <li><Link to="/">Estatisticas</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
