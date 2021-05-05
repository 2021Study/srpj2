export const generatedYear = () => {
  const com_year = new Date().getFullYear();
  const optionList = [];

  for (let y = com_year - 80; y <= com_year + 1; y++) {
    optionList.push({ year: `${y}` });
  }

  return optionList;
};

export const generatedMonth = () => {
  const optionList = [];

  for (let m = 1; m <= 12; m++) {
    optionList.push({ month: `${m}` });
  }

  return optionList;
};

export const generatedDate = () => {
  const optionList = [];

  for (let d = 1; d <= 31; d++) {
    optionList.push({ date: `${d}` });
  }

  return optionList;
};
