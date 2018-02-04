export const getCountries = () =>
  fetch('http://localhost:8080/api/v1/countries')
    .then(res => res.json())
    .catch(e => console.log(`Something went wrong ${e}`));

export const getDeliveryMoments = () =>
  fetch('http://localhost:8080/api/v1/deliverymoments')
    .then(res => res.json())
    .catch(e => console.log(`Something went wrong ${e}`));
