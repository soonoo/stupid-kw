import React from 'react';
import styled from 'styled-components';

const StyledText = styled.input`
  height: 40px;  
`;

const Text = ({ placeholder }) => { 
  return (
    <div>
      <StyledText placeholder={placeholder} />
    </div>
  );
};

export default Text;

