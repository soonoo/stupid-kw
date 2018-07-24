import React, { Component } from 'react';
import './App.css';
import YearSelector from './components/YearSelector';
import SemesterSelector from './components/SemesterSelector';
import CollegeSelector from './components/CollegeSelector';
import MajorSelector from './components/MajorSelector';
import Text from './components/Text';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <YearSelector />
        <SemesterSelector />
        <CollegeSelector />
        <MajorSelector />
        <Text placeholder='과목명' />
        <Text placeholder='담당 교수' />
      </div>
    );
  }
}

export default App;
