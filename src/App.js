import React from 'react'
import './assets/styles/app.css'

import { Card, Carousel, CarouselWrapper } from './components'
import { useWindowSize } from './hooks'

export default function App() {
  const windowSize = useWindowSize()
  const arrowOutside = windowSize?.width >= 992

  // return (
  //   <div style={{ maxWidth: 450, margin: '5rem auto 0' }}>
  //     <Card />
  //   </div>
  // )

  return (
    <CarouselWrapper>
      <Carousel
        arrowOutside={arrowOutside}
        items={[<Card />, <Card />, <Card />, <Card />, <Card />]}
      />
    </CarouselWrapper>
  )
}
