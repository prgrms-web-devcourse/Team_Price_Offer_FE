import React from 'react'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import { authApi } from '@api/apis'
import { useFormik } from 'formik'
import validate from '@utils/validation'
import { useAuthContext } from '@hooks/useAuthContext'

const ContentSignup = () => {
  const { handleSignup } = useAuthContext()

  const formik = useFormik({
    initialValues: {
      nickname: '',
      address: '',
      email: '',
      password: '',
      confirmedPassword: '',
    },
    validate,
    onSubmit: async userInfo => {
      await handleSignup(userInfo)
    },
  })

  const checkDuplicates = async email => {
    const { message } = await authApi.checkDuplicates(email)
    return alert(message)
  }

  return (
    <>
      <div className="modal-header">
        <h2>회원가입</h2>
      </div>
      <div className="modal-body">
        <form
          style={{ marginTop: '15px', marginBottom: '15px' }}
          onSubmit={formik.handleSubmit}
          className="modal-body_form">
          <div className="modal-body_form-input nickname">
            <h3>닉네임</h3>
            <Input
              type="text"
              name="nickname"
              placeholder="닉네임 (2~15자)"
              onChange={formik.handleChange}
              value={formik.values.nickname}
            />
            <div className="modal-body_form-validation">
              {formik.errors.nickname}
            </div>
          </div>
          <div className="modal-body_form-input address">
            <h3>지역</h3>
            <Input
              type="text"
              name="address"
              placeholder="시 구 순으로 입력 해주세요."
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <div className="modal-body_form-validation">
              {formik.errors.address}
            </div>
          </div>
          <div className="modal-body_form-input email">
            <h3>이메일</h3>
            <div className="email-wrapper">
              <Input
                type="text"
                name="email"
                placeholder="이메일"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              <Button
                type="button"
                style={{ fontSize: '12px' }}
                onClick={() => {
                  if (!formik.errors.email) {
                    checkDuplicates(formik.values.email)
                  } else {
                    alert('이메일을 확인해 주세요!')
                  }
                }}>
                중복검사
              </Button>
            </div>
            <div className="modal-body_form-validation">
              {formik.errors.email}
            </div>
          </div>
          <div className="modal-body_form-input password">
            <h3>비밀번호</h3>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="modal-body_form-validation">
              {formik.errors.password}
            </div>
          </div>
          <div
            style={{ marginTop: '15px' }}
            className="modal-body_form-input password-confirm">
            <h3>비밀번호 확인</h3>
            <Input
              type="password"
              name="confirmedPassword"
              placeholder="비밀번호 확인"
              onChange={formik.handleChange}
              value={formik.values.confirmedPassword}
            />
            <div className="modal-body_form-validation">
              {formik.errors.confirmedPassword}
            </div>
          </div>
          <div style={{ marginTop: '15px' }} className="modal-body_btn-wrapper">
            <Button type="submit" className="modal-body_btn signup">
              회원가입
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContentSignup
