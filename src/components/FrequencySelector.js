import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { DELEVERY_FREQUENCIES } from '../constants';

const styles = {
  radioButton: {
    marginBottom: 16
  }
};

const Frequencies = ({ changeFrequency }) => (
  <div>
    <h4>Frequencies</h4>
    <RadioButtonGroup
      name="frequencies"
      onChange={(event, value) => changeFrequency(value)}
    >
      {DELEVERY_FREQUENCIES.map(freq => (
        <RadioButton
          key={freq.frequency}
          value={freq.frequency}
          label={freq.label}
          style={styles.radioButton}
        />
      ))}
    </RadioButtonGroup>
  </div>
);

Frequencies.propTypes = {
  countries: PropTypes.array,
  changeDeliveryDay: PropTypes.func
};

export default Frequencies;
