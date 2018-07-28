import React from 'react';

const ListItem = ({ data }) => {
  const className = data.hasSyllabus ? 'list-item' : 'list-item no-syllabus';

  return (
    <div className={className}>
      <a target='_blank' href={data.link}>
      <div>{data.id}</div> 
      <div>{data.title}</div> 
      <div>{data.type}</div> 
      <div>{data.credit}</div> 
      <div>{data.prof}</div> 
    </a>
    </div>);
};

export default ListItem;

