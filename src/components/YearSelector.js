import React from 'react';
import Select from 'react-select';

const options = [];
for(let i = 1998; i < 2019; i++) {
  options.push({ value: i.toString(), label: i.toString() })
}

const YearSelector = () => {
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

export default YearSelector;

