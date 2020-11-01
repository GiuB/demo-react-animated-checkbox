/**
 * Carousel
 * @description: Carousel component
 * @author: Daniele Covallero <web@giub.it>
 **/
import React from 'react'
import { omit as _omit } from 'lodash'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { PropTypes } from 'prop-types'

import 'swiper/swiper.scss'

import * as C from './styled'

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination])

const Carousel = (props, ref) => {
  // 🧨 Props destructuCustom swiper user type select
  const {
    id,
    items,
    onClick,
    arrowOutside,
    swiperSlideProps,
    swiperWrapperProps,
  } = props

  // ⚓︎ Hooks (e.g. useState, useMemo ...)

  // 🏹 Effects

  // 🚀 Functions

  // 🧲 Local variables
  const swiperDefaultProps = {
    loop: false,
    threshold: 5,
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    breakpoints: {
      992: {
        // slidesPerGroup: 2,
        slidesPerView: 2,
      },
    },
    pagination: {
      el: `#swiperPagination-${id}`,
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      nextEl: `#nextBtn-${id}`,
      prevEl: `#prevBtn-${id}`,
    },
    onInit: () => {
      window.dispatchEvent(new Event('resize'))
    },
  }

  // ✏️ Render
  if (!items.length) return null

  // ✏️ Render
  return (
    <>
      <C.CarouselWrapper arrowOutside={arrowOutside}>
        <div className="swiperInner">
          <Swiper
            {...swiperDefaultProps}
            {..._omit(swiperWrapperProps, ['onSwiper'])}
          >
            <>
              {items.map((item, index) => (
                <SwiperSlide
                  className="swiperSlide"
                  key={`swipeable-${index}`}
                  onClick={onClick}
                  {...swiperSlideProps}
                >
                  {item}
                </SwiperSlide>
              ))}
            </>
            <div id={`prevBtn-${id}`} className="prevBtn">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                d
                <path
                  d="M.063.554C.178.421.518 0 .773 0a.443.443 0 01.298.133l5.775 5.512a.486.486 0 010 .71L1.07 11.867A.44.44 0 01.772 12c-.254 0-.594-.421-.71-.554L0 11.372 5.627 6 0 .628.063.554"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div id={`nextBtn-${id}`} className="nextBtn">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                d
                <path
                  d="M.063.554C.178.421.518 0 .773 0a.443.443 0 01.298.133l5.775 5.512a.486.486 0 010 .71L1.07 11.867A.44.44 0 01.772 12c-.254 0-.594-.421-.71-.554L0 11.372 5.627 6 0 .628.063.554"
                  fillRule="evenodd"
                />
              </svg>
            </div>

            <div
              className="swiperPagination"
              id={`swiperPagination-${id}`}
            ></div>
          </Swiper>
        </div>
      </C.CarouselWrapper>
    </>
  )
}

// 🧬 PropTypes
Carousel.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string, // from StyledComponent
  arrowOutside: PropTypes.bool,
  containerClassName: PropTypes.string,
  fieldRef: PropTypes.func,
  onClick: PropTypes.func,
  swiperWrapperProps: PropTypes.object,
  swiperSlideProps: PropTypes.object,
  value: PropTypes.array,
  items: PropTypes.arrayOf(PropTypes.any),
}

Carousel.defaultProps = {
  id: 'carousel',
  style: {},
  className: '',
  arrowOutside: false,
  items: [],
  swiperSlideProps: {},
}

export default Carousel
