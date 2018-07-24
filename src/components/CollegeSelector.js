import React from 'react';
import Select from 'react-select';
import { college } from '../data';

const CollegeSelector = () => {
  return (
    <div>
      <span className='form-label'>단과대학</span>
      <Select
        options={college}
        value={null}
      />
    </div>
  );
}

export default CollegeSelector;

