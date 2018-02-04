import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import { DAYS_LONG } from '../constants';

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

const Countries = ({ deliveryDays, changeDeliveryDay }) => (
  <div>
    <h4>Delivery Days</h4>
    <RadioButtonGroup
      name="momentSelect"
      onChange={(event, value) => changeDeliveryDay(value)}
    >
      {deliveryDays.map(day => (
        <RadioButton
          key={DAYS_LONG[day - 1]}
          value={day}
          label={DAYS_LONG[day - 1]}
          style={styles.radioButton}
        />
      ))}
    </RadioButtonGroup>
  </div>
);

Countries.propTypes = {
  countries: PropTypes.array,
  changeDeliveryDay: PropTypes.func
};

export default Countries;
