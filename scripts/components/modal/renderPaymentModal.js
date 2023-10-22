import { paymentInfo } from "../../data.js";


export const renderPaymentModal = () => {
  const choiceElement = document.querySelector(".choice--payment");

  choiceElement.innerHTML = '';

  paymentInfo.forEach((card) => {

    const cardElem = document.createElement("div");
    cardElem.classList.add("choice__item");

    cardElem.innerHTML =
      ` <input type="radio" id=${card.name} name="card" />
      <label for=${card.name} class="card"
        ><div class="card__logo card__logo--modal"><img src=${card.logo} alt="" /></div>
        <div class="card__number card__number--modal">${card.number}</div></label
      >`
      ;

    choiceElement.appendChild(cardElem);
  });
}
