const formatPriceToBRL = (price: number) => {
  const localeStringConfig = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  };
  const formatedValue = price === 0
    ? 'R$ 0' : price.toLocaleString('pt-BR', localeStringConfig);

  return formatedValue;
};

export default formatPriceToBRL;
