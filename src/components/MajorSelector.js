import React from 'react';
import Select from 'react-select';
import { major } from '../data';

const MajorSelector = () => {
  return (
    <div>
      <span className='form-label'>전공</span>
      <Select
        options={major}
        value={null}
      />
    </div>
  );
}

export default MajorSelector;

