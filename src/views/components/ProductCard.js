import React from 'react'
import { Typography } from '@material-ui/core'

import '../../assets/css/product-card.css'
import FormatMoney from '../../helper/FormatMoney'


const ProductCard = ({ product, saleValue }) => (
  <div className="product-card">
    <img src={product.image} alt="product image" />
    <div>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <div className="money">
        {saleValue && (
          <Typography variant="subtitle" className="last-price">{FormatMoney(saleValue)}</Typography>
        )}
        <Typography variant="h3" color="primary">{FormatMoney(product.price)}</Typography>
      </div>
    </div>
  </div>
)

export default ProductCard