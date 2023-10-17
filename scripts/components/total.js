import { products } from '../data.js';
import { formatSum } from '../utils/formatSum.js';

export const setTotalSum = () => {
  const totalCurrentSumElem = document.querySelector('.order__sum');
  const totalCountElem = document.querySelectorAll('.total-count');
  const totalFullSumElem = document.querySelector('#full-sum');
  const totalDiscountSumElem = document.querySelector('#full-discount');

  let totalCurrentSum = 0;
  let totalCount = 0;
  let totalFullSum = 0;
  let totalDiscountSum = 0;

  products.forEach((product) => {
    const { fullPrice, discount, count } = product;

    console.log(fullPrice, discount, count);

    let currentPrice = fullPrice;

    discount.forEach((item) => {
      currentPrice *= (1 - item.value);
    });

    totalCurrentSum += currentPrice * count;
    totalCount += count;
    totalFullSum += fullPrice * count * 1;
    totalDiscountSum += totalFullSum - totalCurrentSum;
  });

  totalCurrentSumElem.textContent = `${formatSum(totalCurrentSum)} сом`;
  totalCountElem.forEach((item) => item.textContent = totalCount);
  totalFullSumElem.textContent = `${formatSum(totalFullSum)} сом`;
  totalDiscountSumElem.textContent = `${formatSum(totalDiscountSum)} сом`;
}

