const convertSimpleDate = (date: string) => {
  const data = new Date(date);
  return new Intl.DateTimeFormat(
    'pt-BR',
    { dateStyle: 'short', timeZone: 'UTC' },
  ).format(data);
};

export default convertSimpleDate;
