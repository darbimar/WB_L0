import { formatSum } from "../../utils/formatSum.js";

export const renderProducts = (products) => {
  const productsList = document.querySelector('.basket__list');
  productsList.innerHTML = '';

  products.forEach((item) => {
    const basketItem = document.createElement('div');
    basketItem.className = 'basket__item item';
    basketItem.dataset.id = item.id;
    productsList.appendChild(basketItem);
    const fullPrice = formatSum(item.fullPrice * item.count);
    const discountsTotal = item.discount.reduce((acc, curr) => acc + curr.value, 0);
    const currentPrice = formatSum(item.fullPrice * (1 - discountsTotal) * item.count);

    basketItem.innerHTML = `
    <div class="item__left-side">
      <input
        type="checkbox"
        checked
        id="check__item"
        name="check__item"
        class="item__checkbox"
      />
      <label for="check__item" hidden></label>
      <img
        class="item__image"
        src=${item.image}
        alt=${item.title}
        width="72"
        height="96"
      />
      <div class="item__info">
        <div class="item__price item__price-small price">
          <div class="price__current">${currentPrice} <span>сом</span></div>
          <div class="price__total">${fullPrice} сом</div>
        </div>
        <div class="item__title">${item.title}</div>
        <div class="item__details">
          ${item.color || item.size ?
        `<div class="item__description">
            ${item.color ? `<div class="item__colour">Цвет: ${item.color}</div>` : ''}
            ${item.size ? `<div class="item__size">Размер: ${item.size}</div>` : ''}
          </div>`
        : ''}
          <div class="item__stock text-small text-grey">${item.warehouse}</div>
          <div class="item__org text-small text-grey">
            ${item.organization}
            <img src="./images/info.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="item__right-side">
      <div class="item__action">
        <div class="item__count">
          <button class="item__count-change minus" type="button" >−</button>
          <input
            class="input item__count-input"
            value=${item.count}
            type="number"
            id="count${item.id}"
            name="count"
            data-id="${item.id}"
          />
          <button class="item__count-change plus" type="button" >+</button>
        </div>
        ${item.availability < 3 ? `<div class="item__remain">Осталось ${item.availability} шт.</div>` : ''}
        <div class="item__action-logo">
          <button class="item__action-favorite" type="button">
            <img src="./images/favorite.svg" alt="Избранное" class='favorite'/>
          </button>
          <button class="item__action-delete" type="button">
            <img src="./images/bin.svg" alt="Удалить товар" />
          </button>
        </div>
      </div>
      <div class="item__price price">
        <div class="price__current">${currentPrice} <span>сом</span></div>
        <div class="price__total">${fullPrice} сом</div>
      </div>
    </div>
`
  });
}

export const renderMissingProducts = (products) => {
  const missingProductsList = document.querySelector('.basket__list--missing');
  missingProductsList.innerHTML = '';

  products.forEach((item) => {
    const missingItem = document.createElement('div');
    missingItem.className = "basket__item item item--missing";
    missingItem.dataset.id = item.id;
    missingProductsList.appendChild(missingItem);
    missingItem.innerHTML = `
      <div class="item__left-side">
        <img
          class="item__image"
          src=${item.image}
          alt=${item.title}
          width="72"
          height="96"
        />
        <div class="item__info item__info--missing">
          <div class="item__title item__title--missing">${item.title}</div>
          <div class="item__details">
          ${item.color || item.size ?
        `<div class="item__description">
                ${item.color ? `<div class="item__colour">Цвет: ${item.color}</div>` : ''}
                ${item.size ? `<div class="item__size">Размер: ${item.size}</div>` : ''}
              </div>`
        : ''}
          </div>
        </div>
      </div>
      <div class="item__right-side">
        <div class="item__action item__action--missing">
          <div class="item__action-logo item__action-logo--missing">
            <button class="item__action-favorite" type="button">
              <img src="./images/favorite.svg" alt="Избранное" class='favorite'/>
            </button>
            <button class="item__action-delete" type="button">
              <img src="./images/bin.svg" alt="Удалить товар" />
            </button>
        </div>
        </div>
      </div>
    `
  })
}
