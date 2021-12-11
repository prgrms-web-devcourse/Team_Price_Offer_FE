import React from 'react'
import Input from '@components/templates/Input'
import SelectBox from '@components/templates/Selectbox'
import IconButton from '@components/templates/IconButton'
import Button from '@components/templates/Button'
import Avatar from '@components/templates/Avatar'
import { CATEGORIES } from '@data/dummy/categories'
import validate from '@utils/validation'
import { useFormik } from 'formik'
import { userApi } from '@api/apis'

const selectBoxdefault = {
  code: 'selectBoxDefault',
  name: '선택하세요',
}
const ContentInfoModify = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      address1: '',
      address2: '',
    },
    validate,
    onSubmit: async values => {
      const userInfo = {
        nickname: values.email,
        address1: `${values.address1} ${values.address2}`,
        profileImage: '',
      }

      const res = await userApi.modifyUserInfo(userInfo)
      console.log(res)
    },
  })

  return (
    <>
      <div className="modal-header">
        <h2>회원 정보 수정</h2>
      </div>
      <div className="modal-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="modal-body_form">
            <div className="modal-body_form-profile">
              <div>
                <Avatar
                  src="https://picsum.photos/200"
                  alt="avatar"
                  className="modal-body_form-avatar"
                />
                <div className="modal-body_form-photo">
                  <IconButton
                    src={require('@assets/images/icon/photo.svg').default.src}
                  />
                </div>
              </div>
            </div>
            <div className="modal-body_form-input email">
              <h3>이메일</h3>
              <Input
                type="text"
                name="email"
                placeholder="이메일"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div className="modal-body_form-input address">
              <h3>주소</h3>
              <div className="modal-body_select-wrapper">
                <div>
                  <SelectBox
                    formName="address1"
                    options={CATEGORIES}
                    defaultOption={selectBoxdefault}
                    value={formik.values.address1}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address1 ? (
                    <div>{formik.errors.address1}</div>
                  ) : null}
                </div>
                <div>
                  <SelectBox
                    formName="address2"
                    options={CATEGORIES}
                    defaultOption={selectBoxdefault}
                    value={formik.values.address2}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address2 ? (
                    <div>{formik.errors.address2}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-body_btn-wrapper">
            <Button type="submit" className="modal-body_btn">
              수정하기
            </Button>
          </div>
        </form>
      </div>
      <div className="modal-footer withdrawal">
        <p>회원탈퇴</p>
      </div>
    </>
  )
}

export default ContentInfoModify
