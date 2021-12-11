import React, { useState } from 'react'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import SelectBox from '@components/templates/Selectbox'
import { authApi } from '@api/apis'
import { useFormik } from 'formik'
import validate from '@utils/validation'

const ContentSignup = props => {
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

        delete value.city
        delete value.district

        await authApi.signUp({
          ...value,
          address,
        })
      } catch (e) {
        alert('SinUp Error')
      }
    },
  })

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

  // const asyncSignUp = async () => {
  //   try {
  //     await authApi.signUp(userInfo)
  //   } catch (e) {
  //     alert('SinUp Error')
  //   }
  // }

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
            {formik.errors.nickname ? (
              <div>{formik.errors.nickname}</div>
            ) : null}
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
            {formik.errors.city ? <div>{formik.errors.city}</div> : null}
            <SelectBox
              formName="district"
              defaultOption={locationDistrictDefault}
              options={options}
              onChange={formik.handleChange}
              value={formik.values.district}
            />
            {formik.errors.district ? (
              <div>{formik.errors.district}</div>
            ) : null}
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
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <Button style={{ fontSize: '12px' }}>중복검사</Button>
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
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
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
            {formik.errors.confirmedPassword ? (
              <div>{formik.errors.confirmedPassword}</div>
            ) : null}
          </div>
          <div className="modal-body_btn-wrapper">
            <Button
              type="submit"
              className="modal-body_btn signup"
              // onClick={asyncSignUp}
            >
              회원가입
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContentSignup
