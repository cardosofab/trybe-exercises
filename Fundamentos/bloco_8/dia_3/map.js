const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const newArray = () => {
  let array;
  array = products.map((element, index) => ({ [element]: prices[index] }));
  return array;
}

console.log(newArray());


const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);