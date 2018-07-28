import React from 'react';
import Select from 'react-select';
import { semester } from '../data';

const SemesterSelector = ({ value, onChange }) => {
  return (
    <div className='form-selector'>
      <span className='form-label'>년도</span>
      <Select
        options={semester}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SemesterSelector;

