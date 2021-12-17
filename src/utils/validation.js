const validate = values => {
  const errors = {}
  const fieldKeys = Object.keys(values)
  const haveEmail = fieldKeys.includes('email')
  const haveNickname = fieldKeys.includes('nickname')
  const havePassword = fieldKeys.includes('password')
  const haveConfirmedPassword = fieldKeys.includes('confirmedPassword')
  const haveNumber = fieldKeys.includes('price', 'quantity')
  const haveOfferPrice = fieldKeys.includes('OfferPrice')
  const havemessageContent = fieldKeys.includes('messageContent')
  const haveEvaluation = fieldKeys.includes('evaluation')
  const haveReviewContent = fieldKeys.includes('reviewContent')
  fieldKeys.forEach(value => {
    if (!values[value]) {
      if (value === 'evaluation') {
        errors.evaluation = '상대방에 대한 평가를 선택해주세요'
      } else {
        errors[value] = '필수값을 입력해주세요!'
      }
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
  if (haveOfferPrice && typeof values.haveOfferPrice !== 'number') {
    errors.haveOfferPrice = '숫자만 입력해주세요.'
  }
  if (havemessageContent && values.messageContent.length >= 100) {
    errors.messageContent = '쪽지는 100자를 넘을 수 없습니다.'
  }
  if (haveReviewContent && values.reviewContent.length >= 100) {
    errors.reviewContent = '리뷰는 100자를 넘을 수 없습니다.'
  }
  return errors
}

export default validate
