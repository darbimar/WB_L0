import { products } from './data.js';
import { renderProducts, renderMissingProducts } from './components/product/renderProducts.js';
import { setTotalSum } from './components/total.js';
import { addFavorite, changeCollapse, changeCount, deleteProduct, selectAllProduct, selectProduct, updatePrice } from './components/product/updateProduct.js';
import { renderDeliveryDateInfo } from './components/delivery.js';

renderProducts(products);
renderMissingProducts(products);
renderDeliveryDateInfo(products);
setTotalSum();

const productsList = document.querySelector('.basket__list');
const missingProductsList = document.querySelector('.basket__list--missing');
const checkboxes = document.querySelectorAll('#check__item');
const selectAllCheckbox = document.querySelector('#check__all');
const collapseButtons = document.querySelectorAll('.collapse__button');

//Изменение количества товаров по нажатию на кнопку
productsList.addEventListener('click', event => {
  const product = event.target.closest('.item');
  const id = +product.dataset.id;

  if (event.target.classList.contains('plus')) {
    changeCount(id, 'increase');
    setTotalSum();
    updatePrice(products[id - 1]);
  } else if (event.target.classList.contains('minus')) {
    changeCount(id, 'decrease');
    setTotalSum();
    updatePrice(products[id - 1]);
  }
});

//Изменение количества товаров через ввод в input
document.querySelectorAll('.item__count-input').forEach(input => {
  input.addEventListener('input', event => {
    const id = +event.target.getAttribute('data-id');
    const value = parseInt(event.target.value);
    changeCount(id, 'set', value);
    setTotalSum();
    updatePrice(products[id - 1]);
    renderDeliveryDateInfo(products);
  });
});

// Удаление товаров
productsList.addEventListener('click', event => deleteProduct(event, 'productsList'));
missingProductsList.addEventListener('click', event => deleteProduct(event, 'missingProductsList'));

// Добавление в избранное
productsList.addEventListener('click', event => addFavorite(event));
missingProductsList.addEventListener('click', event => addFavorite(event));

//Переключение чекбокса выбора продукта
productsList.addEventListener('click', (event) => selectProduct(event, selectAllCheckbox))

//Переключение чекбокса выбора всех продуктов
selectAllCheckbox.addEventListener('click', () => selectAllProduct(selectAllCheckbox, checkboxes));

// Сворачивание списка товаров 
collapseButtons.forEach(button => button.addEventListener('click', () => {

  button.classList.toggle('collapse__button--rotate');
  const buttonParent = button.parentNode;
  const nextElement = buttonParent.nextElementSibling;
  const isHidden = nextElement.classList.contains('hidden');

  if (isHidden) {
    nextElement.classList.remove('hidden');
  } else {
    nextElement.classList.add('hidden');
  }

  if (!nextElement.classList.contains("basket__list--missing")) {
    changeCollapse();
  }

}));







