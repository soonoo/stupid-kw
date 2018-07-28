import React from 'react';
import Select from 'react-select';
import { year } from '../data';

const YearSelector = ({ value, onChange }) => {
  return (
    <div className='form-selector'>
      <span className='form-label'>년도</span>
      <Select
        options={year}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default YearSelector;

