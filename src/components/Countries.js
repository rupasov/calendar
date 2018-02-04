import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

const Countries = ({ countries, onChange }) => (
  <div>
    <h4>Countries</h4>
    <RadioButtonGroup
      name="countrySelect"
      onChange={(event, value) => onChange(value)}
    >
      {countries.map((val, index) => (
        <RadioButton
          key={index}
          value={val}
          label={val}
          style={styles.radioButton}
        />
      ))}
    </RadioButtonGroup>
  </div>
);

Countries.propTypes = {
  countries: PropTypes.array,
  onChange: PropTypes.func
};

export default Countries;
