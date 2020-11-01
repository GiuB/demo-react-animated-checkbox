import React from 'react'

import * as C from './styled'

export default function CarouselWrapper(props) {
  return (
    <C.CarouselWrapper>
      <div className="inner">{props.children}</div>
    </C.CarouselWrapper>
  )
}
