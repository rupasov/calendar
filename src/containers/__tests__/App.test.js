import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../App';

// TODO fix this test
it('renders without crashing', () => {
  const rendered = renderer.create(<App />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
