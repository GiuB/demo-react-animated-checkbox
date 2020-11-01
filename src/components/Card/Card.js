import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import * as C from './styled'
import Bottle from '../../assets/img/bottle.png'

const Card = () => {
  const [state, setState] = useState({ isHover: false })
  const refWrapper = useRef()
  const refRotateWrapper = useRef()
  const x = useMotionValue(200)
  const y = useMotionValue(200)

  const rotateX = useTransform(y, [-150, 150], [7, -7])
  const rotateY = useTransform(x, [-200, 200], [7, -7])

  useEffect(() => {
    x.set(0)
    y.set(0)
  }, [])

  function handleMouseMove(e) {
    !state.isHover && setState({ ...state, isHover: true })
    const elDimensions = refWrapper.current?.getBoundingClientRect().toJSON()

    const newX =
      e.pageX - elDimensions.x - (elDimensions.right - elDimensions.left) / 2
    const newY =
      e.pageY - elDimensions.y - (elDimensions.bottom - elDimensions.top) / 2
    x.set(newX)
    y.set(newY)
  }

  function handleMouseLeave(e) {
    state.isHover && setState({ ...state, isHover: false })
    x.set(0)
    y.set(0)

    if (refRotateWrapper?.current?.style)
      refRotateWrapper.current.style.transition = 'all 0.3s ease-out'
  }

  return (
    <C.CardOuterWrapper>
      <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div
          ref={refRotateWrapper}
          className="rotateWrapper"
          style={{
            perspective: 1000,
            rotateX: rotateX,
            rotateY: rotateY,
          }}
        >
          <C.CardWrapper ref={refWrapper}>
            <C.CardInnerWrapper>
              <C.CardInner>
                <C.CardBox imgCol isHover={state.isHover}>
                  <img src={Bottle} className="prod-img" alt="prod" />
                </C.CardBox>
                <C.CardBox descCol isHover={state.isHover}>
                  <div className="title">
                    <h3>Delicious Wine</h3>
                  </div>
                  <div className="tags">
                    <C.CardTag>prod</C.CardTag>
                    <C.CardTag>tag</C.CardTag>
                    <C.CardTag>wine</C.CardTag>
                  </div>
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris varius lectus ac enim venenatis dignissim.
                    </p>
                    <div className="details">
                      Details{' '}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </C.CardBox>
              </C.CardInner>
            </C.CardInnerWrapper>
          </C.CardWrapper>
        </motion.div>
      </motion.div>
    </C.CardOuterWrapper>
  )
}

export default Card
