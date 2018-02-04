import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import uuidv1 from 'uuid/v1';
import { DAYS_LONG } from '../constants';

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

const DaySelector = ({ deliveryDays, changeDeliveryDay }) => (
  <div>
    <h4>Delivery Days</h4>
    <RadioButtonGroup
      name="momentSelect"
      onChange={(event, value) => changeDeliveryDay(value)}
    >
      {deliveryDays.map(day => (
        <RadioButton
          key={uuidv1()}
          value={day}
          label={DAYS_LONG[day - 1]}
          style={styles.radioButton}
        />
      ))}
    </RadioButtonGroup>
  </div>
);

DaySelector.propTypes = {
  countries: PropTypes.array,
  changeDeliveryDay: PropTypes.func
};

export default DaySelector;
