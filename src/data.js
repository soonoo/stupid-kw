export const college = [
  { value: '', label: '- 전체 -' },
  { value: '0000', label: '전체공통' },
  { value: '1000', label: '공과대학' },
  { value: '3000', label: '인문사회과학대학' },
  { value: '4000', label: '법과대학' },
  { value: '5000', label: '경영대학' },
  { value: '6000', label: '자연과학대학' },
  { value: '7000', label: '전자정보공과대학' },
  { value: '9000', label: '사회과학대학' },
  { value: 'A000', label: '교양학부' },
  { value: 'B000', label: '학점은행대학' },
  { value: 'C000', label: '국어국문학부' },
  { value: 'D000', label: '동북아대학' },
  { value: 'E000', label: '인문대학' },
  { value: 'F000', label: '정책법학대학' },
  { value: 'G000', label: '인제니움학부대학' },
  { value: 'H000', label: '소프트웨어융합대학' },
  { value: 'X000', label: '연계전공' },
];

export const major = [
  { value:'', label: '- 전체 -' },
  { value:'0000', label: '전체공통 대학공통' },
  { value:'1000', label: '공과대학 대학공통' },
  { value:'1140', label: '공과대학 화학공학과' },
  { value:'1160', label: '공과대학 환경공학과' },
  { value:'1170', label: '공과대학 건축공학과' },
  { value:'1270', label: '공과대학 건축학과' },
  { value:'3000', label: '인문사회과학대학 대학공통' },
  { value:'3040', label: '인문사회과학대학 국어국문학과' },
  { value:'3050', label: '인문사회과학대학 영어영문학과' },
  { value:'3110', label: '인문사회과학대학 산업심리학과' },
  { value:'3170', label: '인문사회과학대학 미디어영상학부' },
  { value:'3210', label: '인문사회과학대학 동북아문화산업학부' },
  { value:'4100', label: '법과대학 자산관리학과' },
  { value:'5000', label: '경영대학 대학공통' },
  { value:'5080', label: '경영대학 경영학부' },
  { value:'5100', label: '경영대학 국제통상학부' },
  { value:'6000', label: '자연과학대학 대학공통' },
  { value:'6030', label: '자연과학대학 수학과' },
  { value:'6050', label: '자연과학대학 화학과' },
  { value:'6090', label: '자연과학대학 생활체육학과' },
  { value:'6100', label: '자연과학대학 전자바이오물리학과' },
  { value:'6120', label: '자연과학대학 정보콘텐츠학과' },
  { value:'7000', label: '전자정보공과대학 대학공통' },
  { value:'7060', label: '전자정보공과대학 전자공학과' },
  { value:'7070', label: '전자정보공과대학 전자통신공학과' },
  { value:'7220', label: '전자정보공과대학 컴퓨터공학과' },
  { value:'7260', label: '전자정보공과대학 컴퓨터소프트웨어학과' },
  { value:'7320', label: '전자정보공과대학 전기공학과' },
  { value:'7340', label: '전자정보공과대학 전자재료공학과' },
  { value:'7410', label: '전자정보공과대학 로봇학부' },
  { value:'7420', label: '전자정보공과대학 전자융합공학과' },
  { value:'D000', label: '동북아대학 동북아대학' },
  { value:'D020', label: '동북아대학 동북아통상학부' },
  { value:'D060', label: '동북아대학 국제통상학과' },
  { value:'D160', label: '동북아대학 국제학부' },
  { value:'E020', label: '인문대학 국어국문학과' },
  { value:'F000', label: '정책법학대학 대학공통' },
  { value:'F030', label: '정책법학대학 법학부' },
  { value:'F040', label: '정책법학대학 국제학부' },
  { value:'F050', label: '정책법학대학 자산관리학과' },
  { value:'H000', label: '소프트웨어융합대학 대학공통' },
  { value:'H020', label: '소프트웨어융합대학 컴퓨터정보공학부' },
  { value:'H030', label: '소프트웨어융합대학 소프트웨어학부' },
  { value:'H040', label: '소프트웨어융합대학 정보융합학부' },
];

const year = [];
for(let i = 1998; i < 2020; i++) {
  year.push({ value: i.toString(), label: i.toString() })
};
export { year };

const semester = [];
for(let i = 1; i < 3; i++) {
  semester.push({ value: i.toString(), label: i.toString() + '학기' })
}
export { semester };

