import React from 'react'
import GoodsList from '@components/ui/GoodsList'
import { GOODSLIST } from '@data/dummy/goodsList'

const Offer = () => {
  return <GoodsList goodsList={GOODSLIST} className="offer-goodList" />
}

export default Offer
