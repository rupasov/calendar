import MockDate from 'mockdate';

import { getInitialDays } from '../date';

describe('Date util functions', () => {
  beforeEach(() => MockDate.set('2/6/2018'));
  afterEach(() => MockDate.reset());

  const exampleDays = require('./exampleDays.json');
  it('should return an array of days', () => {
    const result = JSON.stringify(getInitialDays());
    expect(result).toEqual(JSON.stringify(exampleDays));
  });
});
