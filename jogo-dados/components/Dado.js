import React from 'react';

// Componente Dado: recebe a prop 'valor' (1 a 6) e exibe a imagem correspondente
export default function Dado({ valor }) {
  const dadoValor = valor || 0;

  return (
    <img
      src={`/dados/dado${dadoValor}.png`}
      alt={`Dado ${dadoValor}`}
      width={75}
      height={75}
    />
  );
}
