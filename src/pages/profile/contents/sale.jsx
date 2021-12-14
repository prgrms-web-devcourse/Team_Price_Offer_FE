import React from 'react'
import GoodsList from '@components/ui/GoodsList'
import { GOODSLIST } from '@data/dummy/goodsList'

const Sale = () => {
  return <GoodsList goodsList={GOODSLIST} className="sale-goodList" />
}

export default Sale
