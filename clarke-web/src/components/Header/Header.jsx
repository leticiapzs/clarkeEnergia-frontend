import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo-clarke-energia.svg"; 

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Clarke Energia" className={styles.logo} />
      <nav>
        <ul className={styles.navList}>
          <li><a href="https://clarke.com.br/sobre-nos">Sobre nós</a></li>
          <li><a href="https://clarke.com.br/nossas-solucoes">Nossas soluções</a></li>
          <li><a href="https://clarke.com.br/mercado-livre-de-energia">Mercado livre de energia</a></li>
          <li><a href="https://blog.clarke.com.br">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
