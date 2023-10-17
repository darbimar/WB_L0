export const renderProducts = (products) => {
  const productsList = document.querySelector('.basket__list');

  products.forEach((item) => {
    const basketItem = document.createElement('div');
    basketItem.className = 'basket__item item';
    productsList.appendChild(basketItem);
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
          <div class="price__current">${item.fullPrice * item.count} <span>сом</span></div>
          <div class="price__total">${item.fullPrice} сом</div>
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
          <button class="item__count-change" type="button">−</button>
          <input
            class="input item__count-input"
            value=${item.count}
            type="number"
            id="count"
            name="count"
            min="0"
            max="100"
          />
          <button class="item__count-change" type="button">+</button>
        </div>
        ${item.availability < 3 ? `<div class="item__remain">Осталось ${item.availability} шт.</div>` : ''}
        <div class="item__action-logo">
          <img src="./images/favorite.svg" alt="Избранное" class='favorite'/>
          <img src="./images/bin.svg" alt="Удалить товар" />
        </div>
      </div>
      <div class="item__price price">
        <div class="price__current">${item.fullPrice} <span>сом</span></div>
        <div class="price__total">${item.fullPrice} сом</div>
      </div>
    </div>
`
  });

}

export const renderMissingProducts = (products) => {
  const missingProductsList = document.querySelector('.basket__list--missing');

  products.forEach((item) => {
    const missingItem = document.createElement('div');
    missingItem.className = "basket__item item item--missing";
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
            <img src="./images/favorite.svg" alt="Избранное" />
            <img src="./images/bin.svg" alt="Удалить товар" />
          </div>
        </div>
      </div>
    `
  })
}