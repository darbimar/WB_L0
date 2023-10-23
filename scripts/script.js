import { products } from './data.js';
import { renderProducts, renderMissingProducts } from './components/product/renderProducts.js';
import { selectPayImmediately, setTotalSum } from './components/total.js';
import { addFavorite, changeCollapse, changeCount, deleteProduct, selectAllProduct, selectProduct, updatePrice, updatedProducts } from './components/product/updateProduct.js';
import { renderDeliveryDateInfo } from './components/delivery.js';
import { closeModal, defineDeliveryType, openModal } from './components/modal/modal.js';

renderProducts(products);
renderMissingProducts(products);
renderDeliveryDateInfo(products);
setTotalSum(products);

const productsList = document.querySelector('.basket__list');
const missingProductsList = document.querySelector('.basket__list--missing');
const checkboxes = document.querySelectorAll('#check__item');
const selectAllCheckbox = document.querySelector('#check__all');
const collapseButtons = document.querySelectorAll('.collapse__button');

const deliveryButtons = document.querySelectorAll('.delivery__button, .order__delivery-button');
const paymentButtons = document.querySelectorAll('.payment__button, .order__payment-button');
const deliveryModal = document.querySelector('.delivery-modal');
const paymentModal = document.querySelector('.payment-modal');
const modalButtons = document.querySelectorAll('.modal__button');
const chooseDeliveryButton = document.querySelector('.delivery-modal__button');
const choosePaymentButton = document.querySelector('.payment-modal__button');




//Изменение количества товаров по нажатию на кнопку
productsList.addEventListener('click', event => {
  const product = event.target.closest('.item');
  const id = +product.dataset.id;

  if (event.target.classList.contains('plus')) {
    changeCount(id, 'increase');
    setTotalSum(products);
    updatePrice(products[id - 1]);
  } else if (event.target.classList.contains('minus')) {
    changeCount(id, 'decrease');
    setTotalSum(products);
    updatePrice(products[id - 1]);
  }
});

//Изменение количества товаров через ввод в input
document.querySelectorAll('.item__count-input').forEach(input => {
  input.addEventListener('input', event => {
    const id = +event.target.getAttribute('data-id');
    const value = parseInt(event.target.value);
    changeCount(id, 'set', value);
    setTotalSum(products);
    updatePrice(products[id - 1]);
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

// Открытие модальных окон
deliveryButtons.forEach(button => button.addEventListener('click', () => openModal(deliveryModal)));
paymentButtons.forEach(button => button.addEventListener('click', () => openModal(paymentModal)));

// Закрытие модального окна
deliveryModal.addEventListener('click', (event) => {
  if (event.target === deliveryModal) {
    closeModal(deliveryModal);
  }
});

paymentModal.addEventListener('click', (event) => {
  if (event.target === paymentModal) {
    closeModal(paymentModal);
  }
});

modalButtons.forEach(button => button.addEventListener("click", () => {
  const modal = button.closest(".modal");
  closeModal(modal);
}));

//Выбор адреса доставки в модальном окне
chooseDeliveryButton.addEventListener('click', () => {
  const selectedInput = document.querySelector('input[name="address"]:checked');
  const choiceText = selectedInput.nextElementSibling.querySelector('.choice__text').textContent;

  document.querySelector('.delivery__detail-main').textContent = choiceText;
  document.querySelector('.order__addres').textContent = choiceText;

  const deliveryType = defineDeliveryType(choiceText);
  if (deliveryType === 'В пункт выдачи') {
    document.querySelector('.order__delivery-title').textContent = `Доставка в пункт выдачи`;
    document.querySelector('.delivery__subtitle').textContent = `Пункт выдачи`;
  } else {
    document.querySelector('.order__delivery-title').textContent = `Доставка курьером`;
    document.querySelector('.delivery__subtitle').textContent = `Курьер`;
  }

  closeModal(deliveryModal);
})

//Выбор карты в модальном окне
choosePaymentButton.addEventListener('click', () => {
  const selectedInput = document.querySelector('input[name="card"]:checked');
  const cardLogo = document.querySelectorAll('.card__logo:not(.card__logo--modal)');
  const cardNumber = document.querySelectorAll('.card__number:not(.card__number--modal)');

  const choiceLogo = selectedInput.nextElementSibling.querySelector('.card__logo--modal').outerHTML;
  const choiceNumber = selectedInput.nextElementSibling.querySelector('.card__number--modal').outerHTML;

  cardLogo.forEach(logo => logo.innerHTML = choiceLogo);
  cardNumber.forEach(logo => logo.innerHTML = choiceNumber);

  closeModal(paymentModal);
})

const payImmediatelyCheckbox = document.querySelector('#pay-immediately');

payImmediatelyCheckbox.addEventListener("change", () => selectPayImmediately(updatedProducts));


