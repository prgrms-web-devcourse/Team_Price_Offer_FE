import React from 'react'
import Input from '@components/templates/Input'
import Image from '@components/templates/Image'
import Divider from '@components/templates/Divider'
import styled from '@emotion/styled'
import Radio from '@components/templates/Radio'
import TextArea from '@components/templates/Textarea'
import Button from '@components/templates/Button'

const PostingPage = () => {
  return (
    <div className="wrapper">
      <div className="post_container">
        <div className="post_title">상품정보</div>
        <Divider
          style={{ backgroundColor: 'black', width: '100%', height: '2px' }}
        />
        <div className="post_subtitle">상품명</div>
        <Input />
        <div className="post_subtitle">상품 이미지</div>
        <div className="post_img-container">
          <Image />
          <Image />
          <Image />
        </div>
        <div className="post_img-guide">
          * 상품 이미지는 640x640에 최적화 되어 있습니다. - 이미지는 상품등록 시
          정사각형으로 짤려서 등록됩니다. - 이미지를 클릭 할 경우 원본이미지를
          확인할 수 있습니다. - 이미지를 클릭 후 이동하여 등록순서를 변경할 수
          있습니다. - 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
          최대 지원 사이즈인 640 X 640 으로 리사이즈 해서 올려주세요
        </div>
        <Divider />
        <div className="post_subtitle">카테고리</div>
        <Input />
        <Divider />
        <div className="post_subtitle">거래지역</div>
        <Input />
        <Divider />
        <div className="post_subtitle">상품상태</div>
        <Radio />
        <Divider />
        <div className="post_subtitle">거래 방법</div>
        <Radio />
        <Divider />
        <div className="post_subtitle">수량</div>
        <Input />개
        <Divider />
        <div className="post_subtitle">가격</div>
        <Input />원
        <Divider />
        <div className="post_subtitle">설명</div>
        <TextArea />
        <Button />
      </div>
    </div>
  )
}

PostingPage.propTypes = {}

export default PostingPage
