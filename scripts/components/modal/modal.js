import { deliveryInfo } from "../../data.js";
import { renderDeliveryModal } from "./renderDeliveryModal.js";
import { renderPaymentModal } from "./renderPaymentModal.js";

const deliveryTypeButtons = document.querySelectorAll(".button-delivery");

export const openModal = (modal) => {
  modal.style.display = 'flex';
  modal.style.top = window.pageYOffset + "px";
  document.body.style.overflow = "hidden";

  renderDeliveryModal();
  renderPaymentModal();

}

export const closeModal = (modal) => {
  modal.style.display = 'none';
  document.body.style.overflow = "unset";
}

deliveryTypeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    deliveryTypeButtons.forEach((button) => {
      button.classList.remove("button-delivery--active");
    });
    this.classList.add("button-delivery--active");
    renderDeliveryModal()
  });
});

export const defineDeliveryType = (address) => {
  for (const info of deliveryInfo) {
    for (const adr of info.addressList) {
      if (adr.includes(address)) {
        return info.type;
      }
    }
  }
}
