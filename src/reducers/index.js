import * as data from '../data';

const initialState = {
  year: data.year[data.year.length - 1],
  semester: data.semester[1],
  college: data.college[0],
  major: data.major[0],
  title: '',
  prof: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_DATA':
      return {
        ...state,
        [`${action.year}-${action.semester}`]: action.data,
      };

    case 'SET_COLLEGE':
      return {
        ...state,
        college: action.data,
        major: data.major[0],
      };

    case 'SET_MAJOR':
      return {
        ...state,
        major: action.data,
        college: data.college[0],
      };

    case 'SET_TITLE':
      return {
        ...state,
        title: action.data,
      };

    case 'SET_PROF':
      return {
        ...state,
        prof: action.data,
      };

    default:
      return state;
  }
};

export default reducer;

