import React from 'react'
import Input from '@components/templates/Input'
import SelectBox from '@components/templates/Selectbox'
import IconButton from '@components/templates/IconButton'
import Button from '@components/templates/Button'
import Avatar from '@components/templates/Avatar'
import { CATEGORIES } from '@data/dummy/categories'

const selectBoxdefault = {
  code: 'selectBoxDefault',
  name: '선택하세요',
}
const ContentInfoModify = () => {
  return (
    <>
      <div className="modal-header">
        <h2>회원 정보 수정</h2>
      </div>
      <div className="modal-body">
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
            <Input name="email" placeholder="이메일" />
          </div>
          <div className="modal-body_form-input address">
            <h3>주소</h3>
            <div className="modal-body_select-wrapper">
              <SelectBox
                formName="info-location_city"
                options={CATEGORIES}
                defaultOption={selectBoxdefault}
              />
              <SelectBox
                formName="info-category_district"
                options={CATEGORIES}
                defaultOption={selectBoxdefault}
              />
            </div>
          </div>
        </div>
        <div className="modal-body_btn-wrapper">
          <Button className="modal-body_btn">수정하기</Button>
        </div>
      </div>
      <div className="modal-footer withdrawal">
        <p>회원탈퇴</p>
      </div>
    </>
  )
}

export default ContentInfoModify
