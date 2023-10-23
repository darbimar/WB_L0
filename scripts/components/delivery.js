const firstDelivery = document.querySelector('.delivery__info--first-date');
const secondDelivery = document.querySelector('.delivery__info--second-date');

export const renderDeliveryDateInfo = (products) => {

  const deliverySubtitle = document.createElement('div');
  deliverySubtitle.className = 'delivery__subtitle';
  const deliveryVizual = document.createElement('div');
  deliveryVizual.className = 'delivery__vizual';
  const clonedSubtitle = deliverySubtitle.cloneNode(false);
  const clonedVizual = deliveryVizual.cloneNode(false);

  // Очищаем контейнеры перед отрисовкой
  firstDelivery.innerHTML = '';
  secondDelivery.innerHTML = '';

  products.forEach((product) => {

    const firstDeliveryTime = product.deliveryTime[0];
    const secondDeliveryTime = product.deliveryTime[1];

    if (product.isChecked && product.count > 0) {

      if (product.count > firstDeliveryTime.maxAmount && product.count <= 200 && secondDeliveryTime) {

        clonedSubtitle.textContent = secondDeliveryTime.date;
        const deliveryImage = renderImage(product, product.count - firstDeliveryTime.maxAmount);
        clonedVizual.appendChild(deliveryImage);
      }

      deliverySubtitle.textContent = firstDeliveryTime.date;
      const deliveryImage = renderImage(product, firstDeliveryTime.maxAmount);
      deliveryVizual.appendChild(deliveryImage);

    }
  });

  firstDelivery.appendChild(deliverySubtitle);
  firstDelivery.appendChild(deliveryVizual);

  secondDelivery.appendChild(clonedSubtitle);
  secondDelivery.appendChild(clonedVizual);

}

export const renderImage = (product, maxAmount) => {

  const deliveryImage = document.createElement('div');
  deliveryImage.classList.add('delivery__image');

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;
  image.width = 40;
  image.height = 56;
  deliveryImage.appendChild(image);

  if (product.count > 1) {
    const countContainer = document.createElement('div');
    countContainer.classList.add('delivery__count', 'count');

    if (product.count > maxAmount) {
      countContainer.textContent = Math.min(product.count, maxAmount);
    } else {
      countContainer.textContent = Math.min(product.count, maxAmount);
    }

    deliveryImage.appendChild(countContainer);
  }

  return deliveryImage;
}