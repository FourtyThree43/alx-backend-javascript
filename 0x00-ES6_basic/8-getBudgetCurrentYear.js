// Rewrite the getBudgetForCurrentYear function to use ES6 computed property names
// on the budget object

// function getCurrentYear() {
//   const date = new Date();
//   return date.getFullYear();
// }

// export default function getBudgetForCurrentYear(income, gdp, capita) {
//   const budget = {};

//   budget[`income-${getCurrentYear()}`] = income;
//   budget[`gdp-${getCurrentYear()}`] = gdp;
//   budget[`capita-${getCurrentYear()}`] = capita;

//   return budget;
// }

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${new Date().getFullYear()}`]: income,
    [`gdp-${new Date().getFullYear()}`]: gdp,
    [`capita-${new Date().getFullYear()}`]: capita,
  };

  return budget;
}
