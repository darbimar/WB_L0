import { products } from './data.js';
import { renderProducts, renderMissingProducts } from './components/products.js';
import { setTotalSum } from './components/total.js';

renderProducts(products);
renderMissingProducts(products);

setTotalSum();
