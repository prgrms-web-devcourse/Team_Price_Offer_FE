import React, { useState } from 'react'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import SelectBox from '@components/templates/Selectbox'
import { authApi } from '@api/apis'
import { useFormik } from 'formik'
import validate from '@utils/validation'

const ContentSignup = () => {
  const formik = useFormik({
    initialValues: {
      nickname: '',
      city: '',
      district: '',
      email: '',
      password: '',
      confirmedPassword: '',
    },
    validate,
    onSubmit: async value => {
      try {
        const address = value.city.concat(' ', value.district)
        const newValue = {
          ...value,
          address,
        }

        delete newValue.district
        delete newValue.city

        const { code } = await authApi.signUp(newValue)
        code === 200 && alert('회원가입이 완료되었습니다')
      } catch (e) {
        alert('SinUp Error!')
      }
    },
  })

  const fetchCheckDuplicates = async email => {
    try {
      const { message } = await authApi.checkDuplicates(email)
      alert(message)
    } catch (e) {
      alert('Check Duplicates Error')
    }
  }

  const locationCityDefault = {
    name: '시를 선택해주세요',
    code: 'city',
  }

  const locationDistrictDefault = {
    name: '구를 선택해주세요',
    code: 'district',
  }

  const options = [
    {
      code: 'user',
      name: '사용자',
    },
    {
      code: 'post',
      name: '게시글',
    },
  ]

  return (
    <>
      <div className="modal-header">
        <h2>회원가입</h2>
      </div>
      <div className="modal-body">
        <form onSubmit={formik.handleSubmit} className="modal-body_form">
          <div className="modal-body_form-input nickname">
            <h3>닉네임</h3>
            <Input
              type="text"
              name="nickname"
              placeholder="닉네임 (2~15자)"
              onChange={formik.handleChange}
              value={formik.values.nickname}
            />
            {formik.errors.nickname && <div>{formik.errors.nickname}</div>}
          </div>
          <div className="modal-body_form-input address">
            <h3>지역</h3>
            <SelectBox
              formName="city"
              defaultOption={locationCityDefault}
              options={options}
              onChange={formik.handleChange}
              value={formik.values.city}
            />
            {formik.errors.city && <div>{formik.errors.city}</div>}
            <SelectBox
              formName="district"
              defaultOption={locationDistrictDefault}
              options={options}
              onChange={formik.handleChange}
              value={formik.values.district}
            />
            {formik.errors.district && <div>{formik.errors.district}</div>}
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
              {formik.errors.email && <div>{formik.errors.email}</div>}
              <Button
                type="button"
                style={{ fontSize: '12px' }}
                onClick={() => {
                  if (!formik.errors.email) {
                    fetchCheckDuplicates(formik.values.email)
                  } else {
                    alert('이메일을 확인해 주세요!')
                  }
                }}>
                중복검사
              </Button>
            </div>
          </div>
          <div className="modal-body_form-input password">
            <h3>비밀번호</h3>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <Input
              type="text"
              name="password"
              placeholder="비밀번호"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && <div>{formik.errors.password}</div>}
          </div>
          <div className="modal-body_form-input password-confirm">
            <h3>비밀번호 확인</h3>
            <Input
              type="text"
              name="confirmedPassword"
              placeholder="비밀번호 확인"
              onChange={formik.handleChange}
              value={formik.values.confirmedPassword}
            />
            {formik.errors.confirmedPassword && (
              <div>{formik.errors.confirmedPassword}</div>
            )}
          </div>
          <div className="modal-body_btn-wrapper">
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
