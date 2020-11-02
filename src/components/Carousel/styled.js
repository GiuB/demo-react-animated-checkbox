import styled from 'styled-components'
import { transparentize } from 'polished'

import theme from '../../assets/theme'

export const CarouselWrapper = styled.div.attrs((props) => ({}))`
  position: relative;
  margin-bottom: 5rem;
  padding: 0.5rem;

  .swiper-container {
    width: 100%;
    overflow: visible;
  }

  .swiper-wrapper,
  .swiperInner {
    width: 100%;
  }

  .swiperSlide {
    transition: all 0.24s ease-out;
    transition-property: transform;
    transform-origin: center center;
    width: 50%;

    &.swiper-slide-visible {
      z-index: 1;
    }

    &:not(.swiper-slide-visible) {
      transform: scale(0.8) translateX(-6rem);
      pointer-events: none;
    }

    &.swiper-slide-prev {
      transform: scale(0.8) translateX(6rem);
    }
  }

  .swiperPagination {
    position: absolute;
    bottom: -4.5rem;
    display: flex;
    right: 0.4rem;
    z-index: 10;

    .swiper-pagination-bullet {
      display: flex;
      width: 1.6rem;
      height: 1.6rem;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      &:after {
        content: '';
        width: 0.8rem;
        height: 0.8rem;
        background-color: #ccc;
        border-radius: 50%;
      }
    }

    .swiper-pagination-bullet-active {
      &:after {
        background-color: ${theme.colors.primary};
      }
    }
  }

  .prevBtn {
    left: 1rem;
    ${(props) => props.arrowOutside && `left: -8rem;`}

    svg {
      margin-left: -3px;
      transform: rotate(180deg);
    }
  }

  .nextBtn {
    right: 1rem;
    ${(props) => props.arrowOutside && `right: -8rem;`}

    svg {
      margin-left: 3px;
    }
  }

  .prevBtn,
  .nextBtn {
    top: 50%;
    top: calc(50% - 1.5rem);
    display: flex;
    width: 4.6rem;
    height: 4.6rem;
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
    transition: opacity 0.24s ease-out;
    box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.1);
    border: solid 0.1 rem transparent;
    background-color: ${transparentize(0.4, theme.colors.onPrimary)};
    backdrop-filter: blur(0.4rem);
    visibility: visible;
    border-radius: 50%;
    z-index: 10;
    opacity: 1;

    &:hover {
      background-color: ${transparentize(0.2, theme.colors.onPrimary)};
    }

    &.swiper-button-disabled {
      background-color: transparent;
      border-color: ${theme.colors.onPrimary};
      cursor: default;
      opacity: 0;
      box-shadow: none;
      -webkit-backdrop-filter: blur(1rem);
      backdrop-filter: blur(1rem);

      svg {
        fill: ${theme.colors.onPrimary};
        stroke: ${theme.colors.primary};
      }
    }

    svg {
      fill: ${theme.colors.primary};
    }
  }
`
