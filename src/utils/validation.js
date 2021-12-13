const validate = values => {
  const errors = {}
  const fieldKeys = Object.keys(values)
  const haveEmail = fieldKeys.includes('email')
  const haveNickname = fieldKeys.includes('nickname')
  const havePassword = fieldKeys.includes('password')
  const haveConfirmedPassword = fieldKeys.includes('confirmedPassword')
  const haveNumber = fieldKeys.includes('price', 'quantity')
  fieldKeys.forEach(value => {
    if (!values[value]) {
      errors[value] = '필수값을 입력해주세요!'
    }
  })

  if (
    haveEmail &&
    !/^[A-Z0-9._%+-]+@[A-Z0-s9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = '이메일 형식이 아닙니다.'
  }

  if (
    havePassword &&
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/i.test(values.password)
  ) {
    errors.password = '비밀번호 조건을 확인해 주세요'
  }

  if (haveConfirmedPassword && values.password !== values.confirmedPassword) {
    errors.confirmedPassword = '비밀번호가 일치하지 않습니다'
  }

  if (
    haveNickname &&
    (values.nickname.length < 2 || values.nickname.length > 15)
  ) {
    errors.nickname = '닉네임 문자 개수를 확인해 주세요 (2~15자)'
  }
  if (haveNumber && typeof values.price !== 'number') {
    errors.price = '숫자만 입력해주세요.'
  }
  if (haveNumber && typeof values.quantity !== 'number') {
    errors.quantity = '숫자만 입력해주세요.'
  }

  return errors
}

export default validate
