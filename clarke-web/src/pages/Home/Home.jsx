import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [consumption, setConsumption] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h1>
          Simule o seu potencial de <span className={styles.highlight}>economia</span> no{" "}
          <span className={styles.highlight}>mercado livre</span> de energia
        </h1>
      </div>

      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>
          Faça aqui a sua análise <span>gratuita!</span>
        </h2>

        <label htmlFor="consumption">Qual é o seu consumo de energia (kWh)? *</label>
        <input
          type="number"
          id="consumption"
          className={styles.inputField}
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
          placeholder="Digite o consumo em kWh"
        />

        <button className={styles.submitButton}>Confirma</button>
      </div>
    </div>
  );
};

export default Home;
