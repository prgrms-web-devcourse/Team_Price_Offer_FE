import React from 'react'
import Input from '@components/templates/Input'
import Image from '@components/templates/Image'
import Divider from '@components/templates/Divider'
import Radio from '@components/templates/Radio'
import TextArea from '@components/templates/Textarea'
import Button from '@components/templates/Button'
import SelectBox from '@components/templates/Selectbox'
import { CATEGORIES } from '@data/dummy/categories'
import { ORDERWAY } from '@data/dummy/orderway'
import { PRODUCT_STATUS } from '@data/dummy/productstatus'

const posting = () => {
  const commonDividerStyle = {
    width: '100%',
  }

  const selectBoxdefault = {
    code: 'selectBoxDefault',
    name: '선택하세요',
  }

  const commonImgStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  }

  return (
    <div className="posting">
      <div className="posting-title">상품정보</div>
      <Divider
        style={{
          ...commonDividerStyle,
          backgroundColor: 'black',
          height: '2px',
        }}
        marginSize={50}
      />

      <div className="posting-subtitle">상품명</div>
      <Input
        className="posting-input goods-name"
        placeholder="상품 이름을 입력해주세요"
        type="text"
      />
      <Divider style={commonDividerStyle} marginSize={50} />

      <div className="posting-subtitle">상품 이미지</div>
      <div className="posting-img-container">
        <div className="posting-img_main-container">
          <Image
            src="https://ext.fmkorea.com/files/attach/new/20191030/486616/22863633/2332232249/05f5960d46e1290b444d3102c2e32941.jpg"
            style={commonImgStyle}
            className="posting-img_main"
            mode="cover"
          />
        </div>

        <div className="posting-img_sub-wrapper">
          <div className="posting-img_sub-container">
            <Image
              src="https://ext.fmkorea.com/files/attach/new/20191030/486616/22863633/2332232249/05f5960d46e1290b444d3102c2e32941.jpg"
              style={commonImgStyle}
              className="posting-img_sub"
              mode="cover"
            />
          </div>
          <div className="posting-img_sub-container">
            <Image
              src="https://ext.fmkorea.com/files/attach/new/20191030/486616/22863633/2332232249/05f5960d46e1290b444d3102c2e32941.jpg"
              style={commonImgStyle}
              className="posting-img_sub"
              mode="cover"
            />
          </div>
        </div>
        <div className="posting-img-guide">
          * 상품 이미지는 640x640에 최적화 되어 있습니다. <br />- 이미지는
          상품등록 시 정사각형으로 짤려서 등록됩니다.
          <br /> - 이미지를 클릭 할 경우 원본이미지를 확인할 수 있습니다.
          <br /> - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.{' '}
          <br />- 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
          <br /> 최대 지원 사이즈인 640 X 640 으로 리사이즈 해서 올려주세요
        </div>
      </div>
      <Divider style={commonDividerStyle} marginSize={50} />

      <div className="posting-subtitle">카테고리</div>
      <SelectBox
        formName="posting-category"
        options={CATEGORIES}
        defaultOption={selectBoxdefault}
        className="posting-select-box"
      />
      <Divider style={commonDividerStyle} marginSize={50} />

      <div className="posting-subtitle">거래지역</div>
      <SelectBox
        formName="posting-location_city"
        className="posting-select-box select-location"
        options={CATEGORIES}
        defaultOption={selectBoxdefault}
      />
      <SelectBox
        formName="posting-category_district"
        className="posting-select-box select-location"
        options={CATEGORIES}
        defaultOption={selectBoxdefault}
      />
      <Divider style={commonDividerStyle} marginSize={50} />
      <div className="posting-subtitle">상품상태</div>

      <Radio
        items={PRODUCT_STATUS}
        formName="productStatus"
        className="posting-radio"
        InputClassName="posting-radio_input"
      />
      <Divider style={commonDividerStyle} marginSize={50} />

      <div className="posting-subtitle">거래 방법</div>
      <Radio
        items={ORDERWAY}
        formName="tradeMethod"
        className="posting-radio"
        InputClassName="posting-radio_input"
      />
      <Divider style={commonDividerStyle} marginSize={50} />

      <div className="posting-subtitle">수량</div>
      <Input
        className="posting-input"
        placeholder="숫자만 입력해주세요"
        type="number"
      />
      <span className="posting-form_unit">개</span>
      <Divider style={commonDividerStyle} marginSize={50} />

      <div className="posting-subtitle">가격</div>
      <Input
        className="posting-input"
        placeholder="숫자만 입력해주세요"
        type="number"
      />
      <span className="posting-form_unit">원</span>
      <Divider style={commonDividerStyle} marginSize={50} />

      <div className="posting-subtitle">상품 설명</div>
      <TextArea
        className="posting-textarea"
        placeholder="상품 설명을 입력해 주세요"
      />

      <div className="posting-button-container">
        <Button className="posting-button">등록하기</Button>
      </div>
    </div>
  )
}

posting.propTypes = {}

export default posting
