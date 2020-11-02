import styled from 'styled-components'

export const CardOuterWrapper = styled.div.attrs((props) => ({}))``

export const CardWrapper = styled.div.attrs((props) => ({}))`
  padding: 0.2rem;
  border-radius: 1rem;
  background-color: #544855;
  transition: all 0.24s ease-out;
  background: linear-gradient(to right, #ac56b2, #de92f2);

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.7rem 1rem rgb(0, 0, 0, 0.2);

    .details {
      padding-right: 2.5rem !important;

      svg {
        opacity: 1;
      }
    }
  }
`

export const CardInnerWrapper = styled.div.attrs((props) => ({}))`
  min-height: 27rem;
  border-radius: 0.8rem;
  background-color: #fff;
`

export const CardInner = styled.div.attrs((props) => ({}))`
  min-height: 27rem;
  padding: 2rem 3.5rem 2rem 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const CardTag = styled.div.attrs((props) => ({}))`
  color: white;
  border-radius: 5rem;
  padding: 0.2rem 1rem;
  margin-left: 0.5rem;
  font-size: 0.5rem;
  background-color: #fcfcfc;
  transition: all 0.24s ease-out;
  box-shadow: inset 0 -0.1rem 0.1rem #521a60;
  background: linear-gradient(to right, #ba72b8, #ab65bc);

  @media (min-width: 60rem) {
    margin-left: 1.5rem;
    padding: 0.35rem 1.5rem;
    font-size: 1.4rem;
  }

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    box-shadow: inset 0 0.1rem 0.2rem #521a60;
  }
`

export const CardBox = styled.div.attrs((props) => ({}))`
  perspective: 1000;

  ${(props) =>
    props.imgCol &&
    `
    max-width: 15rem;
    min-width: 10rem;
    position: relative;

    img {
      z-index: 15;
      position: relative;
      transition: all .3s ease-out;

      ${
        props.isHover &&
        `transform: translateZ(10rem) translateY(-3rem) translateX(4rem) rotateZ(45deg);`
      }
    }

    &::before {
      bottom: 1rem;
      z-index: 1;
      content: "";
      width: 15rem;
      max-width: 100%;
      border-radius: 50%;
      position: absolute;
      padding-bottom: 100%;
      // margin-left: 0.25rem;
      background: linear-gradient(333deg, #ba72b8 0%, #ab65bc 100%);
    }
  `}

  ${(props) =>
    props.descCol &&
    `
    flex: 1;
    text-align: right;
    padding-left: 1.5rem;
  `}

  .title {
    margin-bottom: 1.5rem;

    transition: all 0.4s ease-out;
    ${(props) => props.isHover && `transform: translateZ(5rem);`}
  }

  .tags {
    display: inline-flex;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .desc {
    p {
      font-size: 1.4rem;
      line-height: 1.3em;
      margin: 2rem 0 1rem;
      text-align: justify;
      max-width: 30rem;
      float: right;
    }
  }

  .details {
    text-align: right;
    font-size: 1rem;
    text-transform: uppercase;
    color: #904697;
    font-weight: bold;
    cursor: pointer;

    transition: all 0.4s ease-out;
    ${(props) => props.isHover && `transform: translateZ(5rem);`}

    svg {
      opacity: 0;
      font-size: 2.1rem;
      position: absolute;
      margin-left: 0.7rem;
      margin-bottom: -0.5rem;
    }
  }
`
