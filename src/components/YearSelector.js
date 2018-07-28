import React from 'react';
import Select from 'react-select';
import { year } from '../data';

const YearSelector = ({ value }) => {
  return (
    <div className='form-selector'>
      <span className='form-label'>년도</span>
      <Select
        options={year}
        value={value}
      />
    </div>
  );
}

export default YearSelector;

