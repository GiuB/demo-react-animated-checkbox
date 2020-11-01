import React from 'react'
import './assets/styles/app.css'

import { Card, Carousel, Credits, CarouselWrapper } from './components'
import { useWindowSize } from './hooks'

export default function App() {
  const windowSize = useWindowSize()
  const arrowOutside = windowSize?.width >= 1160

  return (
    <>
      <CarouselWrapper>
        <Carousel
          arrowOutside={arrowOutside}
          items={[<Card />, <Card />, <Card />, <Card />, <Card />]}
        />
      </CarouselWrapper>
      <Credits />
    </>
  )
}
