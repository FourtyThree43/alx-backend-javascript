import updateUniqueItems from './10-update_uniq_items';
import groceriesList from './9-groceries_list';

const map = groceriesList();
console.log(map);

updateUniqueItems(map);
console.log(map);

// edge case: map is not a Map
try {
  updateUniqueItems({});
} catch (err) {
  console.log(err);
}
