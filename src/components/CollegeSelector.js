import React from 'react';
import Select from 'react-select';
import { college } from '../data';

const CollegeSelector = ({ value, onChange }) => {
  return (
    <div className='form-selector'>
      <span className='form-label'>단과대학</span>
      <Select
        options={college}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CollegeSelector;

