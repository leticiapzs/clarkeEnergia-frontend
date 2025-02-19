import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [consumption, setConsumption] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [energySuppliers, setEnergySuppliers] = useState([]);

  const suppliersData = [
    {
      nome: "Elera Renováveis",
      logo: "https://abrir.link/luzKL",
      estadoOrigem: "São Paulo",
      custoKwh: 0.45,
      limiteMinKwh: 10000,
      numeroClientes: 12000,
      avaliacaoMedia: 4.5
    },
    {
      nome: "Raízen Power",
      logo: "https://abrir.link/mlhVG",
      estadoOrigem: "São Paulo",
      custoKwh: 0.50,
      limiteMinKwh: 15000,
      numeroClientes: 8000,
      avaliacaoMedia: 4.8
    },
    {
      nome: "Atvos",
      logo: "https://abrir.link/VgZvw",
      estadoOrigem: "São Paulo",
      custoKwh: 0.40,
      limiteMinKwh: 12000,
      numeroClientes: 15000,
      avaliacaoMedia: 4.3
    },
    {
      nome: "FazSol",
      logo: "https://abrir.link/jZfSp",
      estadoOrigem: "São Paulo",
      custoKwh: 0.55,
      limiteMinKwh: 8000,
      numeroClientes: 2000,
      avaliacaoMedia: 4.2
    },
    {
      nome: "BGEL (Brasil Geração de Energia Limpa)",
      logo: "https://abrir.link/oLZlq",
      estadoOrigem: "São Paulo",
      custoKwh: 0.48,
      limiteMinKwh: 10000,
      numeroClientes: 10000,
      avaliacaoMedia: 4.7
    }
  ];

  const handleConfirm = () => {
    if (consumption > 0) {
      const filteredSuppliers = suppliersData.map((supplier) => ({
        name: supplier.nome,
        logo: supplier.logo,
        state: supplier.estadoOrigem,
        pricePerKwh: supplier.custoKwh,
        minKwh: supplier.limiteMinKwh,
        totalClients: supplier.numeroClientes,
        avgRating: supplier.avaliacaoMedia,
        total: consumption * supplier.custoKwh,
      }));

      setEnergySuppliers(filteredSuppliers);
      setShowTable(true);
    }
  };

  const handleBack = () => {
    setShowTable(false);
    setConsumption("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h1>
          Simule o seu potencial de <span className={styles.highlight}>economia</span> no{" "}
          <span className={styles.highlight}>mercado livre</span> de energia
        </h1>
      </div>

      <div className={styles.formContainer}>
        {!showTable ? (
          <>
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

            <button className={styles.submitButton} onClick={handleConfirm}>
              Confirmar
            </button>
          </>
        ) : (
          <>
            <h3>Fornecedores recomendados</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Fornecedor</th>
                  <th>Logo</th>
                  <th>Estado</th>
                  <th>Preço por kWh</th>
                  <th>Limite Mínimo de kWh</th>
                  <th>Total Mensal</th>
                  <th>Clientes</th>
                  <th>Avaliação</th>
                </tr>
              </thead>
              <tbody>
                {energySuppliers.map((supplier, index) => (
                  <tr key={index}>
                    <td>{supplier.name}</td>
                    <td><img src={supplier.logo} alt={supplier.name} className={styles.supplierLogo} /></td>
                    <td>{supplier.state}</td>
                    <td>R$ {supplier.pricePerKwh.toFixed(2)}</td>
                    <td>{supplier.minKwh} kWh</td>
                    <td>R$ {supplier.total.toFixed(2)}</td>
                    <td>{supplier.totalClients}</td>
                    <td>{supplier.avgRating} ⭐</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className={styles.backButton} onClick={handleBack}>
              Voltar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
