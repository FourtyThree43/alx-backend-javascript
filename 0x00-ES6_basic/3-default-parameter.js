// Condense the internals of the following function to 1 line - without changing
// the name of each function/variable.

// Hint: The key here to define default parameter values for the function parameters.

// export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
//   if (expansion1989 === undefined) {
//     expansion1989 = 89;
//   }

//   if (expansion2019 === undefined) {
//     expansion2019 = 19;
//   }
//   return initialNumber + expansion1989 + expansion2019;
// }

export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
