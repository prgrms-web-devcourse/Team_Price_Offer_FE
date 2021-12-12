const validate = values => {
  const errors = {}

  Object.keys(values).forEach(value => {
    if (!values[value]) {
      errors[value] = '필수값을 입력해주세요!'
    }
  })

  if (!/^[A-Z0-9._%+-]+@[A-Z0-s9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '이메일 형식이 아닙니다.'
  }

  return errors
}

export default validate
