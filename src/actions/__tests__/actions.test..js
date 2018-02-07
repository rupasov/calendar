import { loadCountries, loadDeliveryDays } from '../index';

describe('loadCountries', () => {
  it('should have a type of "LOAD_COUNTRIES"', () => {
    expect(loadCountries().type).toEqual('LOAD_COUNTRIES');
  });

  it('should pass on the countries we pass in', () => {
    const countries = ['Mali', 'Algeria', 'Ethiopia'];
    expect(loadCountries(countries).countries).toEqual(countries);
  });
});

describe('loadDeliveryDays', () => {
  it('should have a type of "LOAD_DELIVERY_DAYS"', () => {
    expect(loadDeliveryDays().type).toEqual('LOAD_DELIVERY_DAYS');
  });

  it('should pass on the deliveryDays we pass in', () => {
    const deliveryDays = [1, 2, 3];
    expect(loadDeliveryDays(deliveryDays).deliveryDays).toEqual(deliveryDays);
  });
});
