const validate = values => {
  const errors = {} // 에러를 반환할 빈 객체

  // email 값이 없다면
  if (!values.email) {
    errors.email = 'Required'
  }
  // email 값이 정규 표현식을 만족하지 못하면
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address' // 잘못된 이메일 형식
  }

  if (!values.password) {
    errors.email = 'Required'
  }

  return errors
}

export default validate
