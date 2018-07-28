import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import YearSelector from './components/YearSelector';
import SemesterSelector from './components/SemesterSelector';
import CollegeSelector from './components/CollegeSelector';
import MajorSelector from './components/MajorSelector';
import Text from './components/Text';
import ListItem from './components/ListItem';

class App extends Component {
  componentDidMount() {
    this.props.fetchData(2018, 2)
  }

  render() {
    const { year, semester, college, major, title, prof } = this.props;
    const dataKey = `${year.value}-${semester.value}`;
    let data = this.props[dataKey] === undefined ? [] : this.props[dataKey].filter(item => {
      return item.title.includes(title) && item.prof.includes(prof); 
    });
    data = data.filter(item => {
      if(!college.value && !major.value) return true;
      else return college.value === '' ? item.id.slice(0, 4) === major.value : item.id.slice(0, 4) === college.value;
    });

    return (
      <div className='App'>
        <YearSelector value={year} />
        <SemesterSelector value={semester} />
        <CollegeSelector value={college} onChange={this.props.setCollege} />
        <MajorSelector value={major} onChange={this.props.setMajor} />
        <Text placeholder='과목명' value={title} onChange={this.props.setTitle} />
        <Text placeholder='담당 교수' value={prof} onChange={this.props.setProf} />
        {data.map((item) => {
          return <ListItem key={item.id} data={item} />
        })}
      </div>
    );
  }
}

export default connect(
  state => state,
  actions,
)(App);

