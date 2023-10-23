export const validateEmail = (email) => {
  let result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return result.test(String(email).toLowerCase());
}

export const validatePhone = (phone) => {
  let result = /^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
  return result.test(String(phone));
}

export const formatPhoneNumber = (event) => {

  let value = event.target.value.replace(/\D/g, '');

  if (value.length > 10) {
    value = value.substr(0, 11);
  }

  let formattedValue = "";

  if (value.length > 0) {
    formattedValue += "+" + value[0];
  }
  if (value.length > 1) {
    formattedValue += " " + value.substr(1, 3);
  }
  if (value.length > 4) {
    formattedValue += " " + value.substr(4, 3);
  }
  if (value.length > 7) {
    formattedValue += " " + value.substr(7, 2);
  }
  if (value.length > 9) {
    formattedValue += " " + value.substr(9);
  }

  event.target.value = formattedValue;

}