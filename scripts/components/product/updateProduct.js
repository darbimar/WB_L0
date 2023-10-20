import { products } from "../../data.js";
import { formatSum } from "../../utils/formatSum.js";
import { setTotalSum } from "../total.js";
import { renderMissingProducts, renderProducts } from "./renderProducts.js";

export let updatedProducts = products;
let updatedMissingProducts = products;

export const changeCount = (id, action, value) => {
  const product = updatedProducts.filter(p => p.id === id)[0];
  const input = document.querySelector(`#count${id}`);
  const maxCount = product.availability;

  if (product && action === 'increase' && product.count < product.availability) {
    product.count += 1;
  } else if (product && action === 'decrease' && product.count > 1) {
    product.count -= 1;
  } else if (product && action === 'set' && product.count) {
    product.count = value;
  }

  if (input && typeof product.count === 'number' && !isNaN(product.count) && input.value !== '') {
    input.value = product.count;
  } else if (input && input.value === '') {
    product.count = 1;
  }

  input.addEventListener('blur', () => {

    if (input.value === '' || input.value === '0') {
      product.count = 1;
      input.value = 1;
      setTotalSum();
      updatePrice(updatedProducts[id - 1]);
    }

    if (input.value > maxCount) {
      product.count = maxCount;
      input.value = maxCount;
      setTotalSum();
      updatePrice(updatedProducts[id - 1]);
    }
  });
}

export const updatePrice = (product) => {
  const productElem = document.querySelector(`.item[data-id='${product.id}']`);
  const currentPriceElem = productElem.querySelector('.price__current');
  const fullPriceElem = productElem.querySelector('.price__total');

  const fullPrice = formatSum(product.fullPrice * product.count);
  const discountsTotal = product.discount.reduce((acc, curr) => acc + curr.value, 0);
  const currentPrice = formatSum(product.fullPrice * (1 - discountsTotal) * product.count);

  currentPriceElem.textContent = currentPrice;
  fullPriceElem.textContent = fullPrice;

  // renderProducts(products);
}

export const deleteProduct = (event, productList) => {
  const deleteButton = event.target.closest('.item__action-delete');
  if (!deleteButton) return;

  const item = deleteButton.closest('.item');
  const itemId = +item.dataset.id;

  if (itemId) {
    if (productList === 'productsList') {
      updatedProducts = updatedProducts.filter(item => item.id !== itemId);
      renderProducts(updatedProducts);
    } else if (productList === 'missingProductsList') {
      updatedMissingProducts = updatedMissingProducts.filter(item => item.id !== itemId);
      renderMissingProducts(updatedMissingProducts);
    }
    setTotalSum();
  }
}

export const addFavorite = (event) => {
  const favoriteButton = event.target.closest('.item__action-favorite');

  if (!favoriteButton) return;

  favoriteButton.classList.toggle('item__action-favorite--active');
}

export const selectProduct = (event, selectAllCheckbox) => {
  const checkbox = event.target.closest('.item__checkbox');
  if (!checkbox) return;

  const item = checkbox.closest('.item');
  const itemId = +item.dataset.id;

  if (checkbox.checked) {
    products[itemId - 1].isChecked = true;
  } else if (!checkbox.checked) {
    products[itemId - 1].isChecked = false;
  }

  if (!products.every((item) => item.isChecked)) {
    selectAllCheckbox.checked = false;
  } else {
    selectAllCheckbox.checked = true;
  }

  setTotalSum();
}

export const selectAllProduct = (selectAllCheckbox, checkboxes) => {

  if (selectAllCheckbox.checked) {
    products.forEach((item) => item.isChecked = true);
  } else {
    products.forEach((item) => item.isChecked = false);
  }

  const isChecked = selectAllCheckbox.checked;

  checkboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });

  setTotalSum();
}