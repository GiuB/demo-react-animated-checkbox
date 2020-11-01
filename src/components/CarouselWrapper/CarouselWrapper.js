/**
 * Carousel Wrapper
 * @description: Used to certer an limit max-width
 * @author: Daniele Covallero <web@giub.it>
 **/

import React from 'react'

import * as C from './styled'

export default function CarouselWrapper(props) {
  return (
    <C.CarouselWrapper>
      <div className="inner">{props.children}</div>
    </C.CarouselWrapper>
  )
}
