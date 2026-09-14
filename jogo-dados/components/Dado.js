export default function Dado({ valor }) {
  // Se valor não for informado ou for 0, usa a imagem do placeholder dado0.png
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
