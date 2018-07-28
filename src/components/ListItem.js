import React from 'react';

const ListItem = ({ data }) => (
  <div className='list-item'>
    <div>{data.id}</div> 
    <div>{data.title}</div> 
    <div>{data.type}</div> 
    <div>{data.credit}</div> 
    <div>{data.prof}</div> 
  </div>
);

export default ListItem;

