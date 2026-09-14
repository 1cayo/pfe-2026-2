export default function Dado({ valor }) {
  // Se valor não for passado ou for 0, mostra o dado em branco/placeholder (dado0.svg)
  const dadoValor = valor || 0;

  return (
    <img
      src={`/dados/dado${dadoValor}.svg`}
      alt={`Dado ${dadoValor}`}
      width={75}
      height={75}
    />
  );
}
