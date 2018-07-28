import React from 'react';
import styled from 'styled-components';

const StyledText = styled.input`
  height: 40px;  
`;

const Text = ({ placeholder, value, onChange }) => { 
  return (
    <div className='form-selector'>
      <StyledText placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Text;

