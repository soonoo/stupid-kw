import * as data from '../data';

const initialState = {
  year: data.year[data.year.length - 1],
  semester: data.semester[0],
  college: data.college[0],
  major: data.major[0],
  title: '',
  prof: '',
  isFetching: false,
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

    case 'SET_YEAR':
      return {
        ...state,
        year: action.data,
      };

    case 'SET_SEMESTER':
      return {
        ...state,
        semester: action.data,
      };

    case 'START_FETCH':
      return {
        ...state,
        isFetching: true,
      };

    case 'END_FETCH':
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default reducer;

