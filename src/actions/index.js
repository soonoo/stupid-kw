export const fetchData = (year, semester) => (dispatch, getState) => {
  return (
    fetch(`https://s3.ap-northeast-2.amazonaws.com/kw-syllabus/${year}-${semester}.json`)
      .then(r => r.json())
      .then(json => {
        dispatch(setData(year, semester, json));
      })
  );
}

export const changePage = (selectedOption) => (dispatch, getState) => {
}

export const setYear = (year) => (
  {
    type: 'SET_YEAR',
    data: year,
  }
);

export const setCollege = (value) => (
  {
    type: 'SET_COLLEGE',
    data: value,
  }
);

export const setMajor = (value) => (
  {
    type: 'SET_MAJOR',
    data: value,
  }
);

export const setData = (year, semester, data) => (
  {
    type: 'SET_DATA',
    year,
    semester,
    data,
  }
);

export const setTitle = (e) => (
  {
    type: 'SET_TITLE',
    data: e.target.value,
  }
);

export const setProf = (e) => (
  {
    type: 'SET_PROF',
    data: e.target.value,
  }
);

