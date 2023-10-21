import { products } from "../../data.js";
import { formatSum } from "../../utils/formatSum.js";
import { renderDeliveryDateInfo } from "../delivery.js";
import { getTotalData, setTotalSum } from "../total.js";
import { renderMissingProducts, renderProducts } from "./renderProducts.js";

export let updatedProducts = products;
let updatedMissingProducts = products;

const checkboxes = document.querySelectorAll('.item__checkbox');


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

  renderDeliveryDateInfo(updatedProducts);

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

  console.log(checkboxes);

  renderDeliveryDateInfo(updatedProducts);
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
    updatedProducts[itemId - 1].isChecked = true;
  } else if (!checkbox.checked) {
    updatedProducts[itemId - 1].isChecked = false;
  }

  if (!updatedProducts.every((item) => item.isChecked)) {
    selectAllCheckbox.checked = false;
  } else {
    selectAllCheckbox.checked = true;
  }

  setTotalSum();
  renderDeliveryDateInfo(updatedProducts);
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
  renderDeliveryDateInfo(updatedProducts);

}

export const changeCollapse = () => {
  const collapse = document.querySelector('.collapse');
  const collapseCheckbox = document.querySelector('.collapse__checkbox');
  const collapseText = document.querySelector('.collapse__text');

  if (!collapseCheckbox) return

  if (collapseCheckbox.style.display === 'none') {
    collapseCheckbox.style.display = 'flex';
    collapseText.style.display = 'none';
    collapse.classList.remove('collapse--bold');
  } else {

    let [totalCurrentSum, totalCount] = getTotalData(products);

    totalCurrentSum = formatSum(totalCurrentSum);

    collapseCheckbox.style.display = 'none';
    collapseText.style.display = 'block';
    collapseText.innerHTML = `<div collapse__text>${totalCount} товаров · ${totalCurrentSum} сом</div>`;
    collapse.classList.add('collapse--bold');
  }
}