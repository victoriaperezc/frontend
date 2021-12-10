import SimplerDatePicker from '@cawfree/react-native-simpler-date-picker';
import React, { useState } from 'react'
import moment from "moment";

const Calendar_Field = () => (
  <SimplerDatePicker
    minDate={moment().subtract(100, 'years')}
    maxDate={moment().add(30, 'years')}
    
    onDatePicked={console.log}
  />
);

export default Calendar_Field;
