import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

export const CountrySelector = ({ countries, onChange }) => (
  <div>
    <h4>Countries</h4>
    <RadioButtonGroup
      name="countrySelect"
      onChange={(event, value) => onChange(value)}
    >
      {countries.map(val => (
        <RadioButton
          key={val}
          value={val}
          label={val}
          style={styles.radioButton}
        />
      ))}
    </RadioButtonGroup>
  </div>
);

CountrySelector.propTypes = {
  countries: PropTypes.array,
  onChange: PropTypes.func
};

export default muiThemeable()(CountrySelector);
