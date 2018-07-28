import React from 'react';
import Select from 'react-select';
import { major } from '../data';

const MajorSelector = ({ value, onChange }) => {
  return (
    <div className='form-selector'>
      <span className='form-label'>전공</span>
      <Select
        options={major}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default MajorSelector;

