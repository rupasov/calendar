import React from 'react';
import { CountrySelector } from '../CountrySelector';
import renderer from 'react-test-renderer';

// TODO fix the context
describe('CountrySelector components renders correctly', () => {
  it('renders correctly', () => {
    const countries = ['Mali', 'Algeria', 'Ethiopia'];
    const rendered = renderer.create(<CountrySelector countries={countries} />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
