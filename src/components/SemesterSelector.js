import React from 'react';
import Select from 'react-select';

const options = [];
for(let i = 1; i < 3; i++) {
  options.push({ value: i.toString(), label: i.toString() + '학기' })
}

const SemesterSelector = () => {
  return (
    <div>
      <span className='form-label'>년도</span>
      <Select
        options={options}
        value={null}
      />
    </div>
  );
}

export default SemesterSelector;

