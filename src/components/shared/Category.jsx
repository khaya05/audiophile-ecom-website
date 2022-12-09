import React from 'react'
import ShopBtn from './ShopBtn'

function Category({img,path}) {
  return (
    <div>
      <img src={img} />
      <p>category</p>
      <ShopBtn path={path} />
    </div>
  )
}

export default Category