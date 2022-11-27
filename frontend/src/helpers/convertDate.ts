const convertDate = (date: string) => {
  const data = new Date(date);
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long' }).format(data);
};

export default convertDate;
