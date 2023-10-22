import { deliveryInfo } from "../../data.js";


export const renderDeliveryModal = () => {
  const choiceElement = document.querySelector(".choice--delivery");
  const selectedDelivery = document.querySelector('.button-delivery--active').textContent.trim();

  choiceElement.innerHTML = '';

  deliveryInfo.forEach((delivery) => {
    if (selectedDelivery === delivery.type) {

      const addressList = delivery.addressList;

      addressList.forEach((address, index) => {
        const addressItem = document.createElement("div");
        addressItem.className = "choice__item choice__item--delivery";

        addressItem.innerHTML =
          `<input type="radio" id="address_${index + 1}" name="address" />
              <label for="address_${index + 1}" class="">
                <div class="choice__text">${address}</div>
                ${delivery.type === 'В пункт выдачи' ?
            `<div class="choice__rating rating">
                  <img src="./images/star.svg" alt="" />
                  <span>4.99</span>
                  <span>Пункт выдачи</span>
                </div>` : ''}
              </label>
              <img class="choice__delete" src="./images/bin.svg" alt="" />`
          ;

        choiceElement.appendChild(addressItem);
      });
    }
  })
};
