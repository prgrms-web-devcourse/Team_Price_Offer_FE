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
  if (
    values.password &&
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/i.test(values.password)
  ) {
    errors.password =
      '비밀번호 조건을 확인해 주세요 (영문, 숫자 하나 이상 포함, 8~16자)'
  }

  if (!values.password && values.confirmedPassword) {
    errors.confirmedPassword = '비밀번호를 입력해 주세요'
  } else if (
    values.password &&
    values.confirmedPassword &&
    values.password !== values.confirmedPassword
  ) {
    errors.confirmedPassword = '비밀번호가 일치하지 않습니다'
  }

  if (
    values.nickname &&
    (values.nickname.length < 2 || values.nickname.length > 15)
  ) {
    errors.nickname = '닉네임 문자 개수를 확인해 주세요 (2~15자)'
  }

  return errors
}

export default validate
