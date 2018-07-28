import React from 'react';
import Select from 'react-select';
import { semester } from '../data';

const SemesterSelector = ({ value }) => {
  return (
    <div className='form-selector'>
      <span className='form-label'>년도</span>
      <Select
        options={semester}
        value={value}
      />
    </div>
  );
}

export default SemesterSelector;

