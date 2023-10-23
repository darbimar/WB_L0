import { formatSum } from '../utils/formatSum.js';

export const setTotalSum = (products) => {
  const totalCurrentSumElem = document.querySelector('.order__sum');
  const totalCountElem = document.querySelectorAll('.total-count');
  const totalFullSumElem = document.querySelector('#full-sum');
  const totalDiscountSumElem = document.querySelector('#full-discount');

  const selectedProducts = products.filter(item => item.isChecked);

  const [totalCurrentSum, totalCount, totalFullSum, totalDiscountSum] = getTotalData(selectedProducts);

  totalCurrentSumElem.textContent = `${formatSum(totalCurrentSum)} сом`;
  totalCountElem.forEach((item) => item.textContent = totalCount);
  totalFullSumElem.textContent = `${formatSum(totalFullSum)} сом`;
  totalDiscountSumElem.textContent = `${formatSum(totalDiscountSum)} сом`;
}

export const getTotalData = (products) => {
  let totalCurrentSum = 0;
  let totalCount = 0;
  let totalFullSum = 0;
  let totalDiscountSum = 0;

  products.forEach((product) => {
    const { fullPrice, discount, count } = product;

    let currentPrice = 0;
    let totalDiscount = 0;

    discount.forEach((item) => {
      totalDiscount += item.value;
    });

    currentPrice = fullPrice * (1 - totalDiscount);
    totalCurrentSum += currentPrice * count;
    totalCount += count;
    totalFullSum += fullPrice * count * 1;
    totalDiscountSum += totalFullSum - totalCurrentSum;
  });

  return [totalCurrentSum, totalCount, totalFullSum, totalDiscountSum];

}

const orderButton = document.querySelector(".order__button");
const payImmediatelyCheckbox = document.querySelector('#pay-immediately');

export const selectPayImmediately = (products) => {

  const [totalSum] = getTotalData(products);

  if (payImmediatelyCheckbox.checked) {
    orderButton.textContent = `Оплатить ${formatSum(totalSum)} сом`;
  } else {
    orderButton.textContent = "Заказать";
  }
}