function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

// Property names are dyanmically generated
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
console.log(getBudgetForCurrentYear(2100, 5200, 1090));
