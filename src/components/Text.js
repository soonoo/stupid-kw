import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import styled from 'styled-components';

const Text = ({ placeholder, value, onChange }) => { 
  return (
    <div className='form-selector'>
      <DebounceInput
        style={{height: '40px'}}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        minLength={1}
        debounceTimeout={500}
      />
    </div>
  );
};

export default Text;

