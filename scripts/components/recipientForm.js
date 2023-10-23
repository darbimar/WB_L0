import { validateEmail, validatePhone } from "../utils/validate.js";

export const validateForm = (form) => {
  let result = true;

  form.querySelectorAll('input').forEach((input) => {

    removeError(input);
    result = validateInput(input, result);

  });

  return result;
}

export const validateInput = (input, result) => {
  removeError(input);

  if (input.value === '') {
    result = false;
    switch (input.id) {
      case 'name':
        createError(input, 'Укажите имя');
        break;
      case 'surname':
        createError(input, 'Введите фамилию');
        break;
      case 'email':
        createError(input, 'Укажите электронную почту');
        break;
      case 'phone':
        createError(input, 'Укажите номер телефона');
        break;
      case 'tin':
        createError(input, 'Укажите ИНН');
        break;
    }
  } else {
    if (input.id === 'email' && !validateEmail(input.value)) {
      result = false;
      createError(input, 'Проверьте адрес электронной почты');
    }

    if (input.id === 'phone' && !validatePhone(input.value)) {
      result = false;
      createError(input, 'Формат: +9 999 999 99 99');
    }

    if (input.id === 'tin' && input.value.length !== 14) {
      result = false;
      createError(input, 'Проверьте ИНН');
    }
  }

  return result;

}

export const createError = (input, text) => {
  const parent = input.parentNode;
  const errorLabel = document.createElement('div');
  errorLabel.classList.add('recipient__error');
  errorLabel.textContent = text;
  input.classList.add('recipient__input--error')
  parent.appendChild(errorLabel);
}

export const removeError = (input) => {
  const parent = input.parentNode;

  if (input.classList.contains('recipient__input--error')) {
    parent.querySelector('.recipient__error').remove();
    input.classList.remove('recipient__input--error');
  }
}
