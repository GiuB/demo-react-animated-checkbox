import { transparentize } from 'polished'
import styled from 'styled-components'

import theme from 'assets/theme'

export const CheckboxWrapper = styled.div.attrs((props) => ({}))`
  border-radius: ${theme.fields.radius + 0.3}rem;
  display: inline-flex;
  cursor: pointer;
  padding: 0.4rem;
  margin: 0.4rem;

  ${(props) => {
    if (props.disabled) return `cursor: not-allowed;`

    return `
      &:hover {
        background-color: ${transparentize(0.8, theme.colors.primary)};    
        ${
          props.isInvalid &&
          `background-color: ${transparentize(0.8, theme.colors.error)};`
        }
      }
    `
  }}

  .checkboxInner {
    padding: 0;
    position: relative;
    display: inline-flex;
    transition: all 0.4s ease-out;
    border-radius: ${theme.fields.radius}rem;
    background-color: ${theme.fields.background};
    border: solid 0.2rem ${theme.fields.borderColor};
  }
  

  ${(props) =>
    !props.checked &&
    !props.disabled &&
    `
      &:hover {
        .checkboxInner {
          border-color: ${theme.colors.primary};
        }
      }
    `}
  
  ${(props) =>
    props.checked &&
    !props.outline &&
    `
      .checkboxInner {
        border-color: ${theme.colors.primary};
        background-color: ${theme.colors.primary};
      }

      &:hover {
        .checkboxInner {
          border-color: ${theme.colors.borderColor};
        }
      }
    `}
  
  ${(props) => {
    if (!props.outline || props.disabled) return

    return props.checked
      ? `
        .checkboxInner {
          border-color: ${theme.colors.primary};
        }

        &:hover {
          .checkboxInner {
            border-color: ${theme.colors.borderColor};
          }
        }
      `
      : `
        .checkboxInner {
          border-color: ${theme.colors.borderColor};
        }

        &:hover {
          .checkboxInner {
            border-color: ${theme.colors.primary};
          }
        }
      `
  }}

  ${(props) =>
    props.isInvalid &&
    `
    .checkboxInner {
      border-color: ${theme.colors.error} !important;

      ${
        props.checked &&
        !props.outline &&
        `background-color: ${theme.colors.error} !important;`
      }
    }
  `}

  ${(props) => {
    if (!props.disabled) return

    return `
      .checkboxInner {
        border: solid 0.2rem ${theme.fields.disabled.borderColor};
        ${props.isInvalid && `border-color: ${theme.colors.error} !important`};
        background-color: ${theme.fields.disabled.background} !important;

        .checkIcon {
          stroke: ${theme.fields.disabled.borderColor} !important;
          fill: ${theme.fields.disabled.borderColor} !important;

          &:hover {
            fill: ${theme.fields.disabled.borderColor} !important;
          }
        }
      }
    `
  }}

  .checkIcon {
    z-index: 2;
    width: 1.8rem;
    height: 1.8rem;
    font-size: 5rem;
    pointer-events: none;
    stroke: ${theme.colors.primary};

    ${(props) =>
      (props.outline || !props.checked) &&
      props.isInvalid &&
      `stroke: ${theme.colors.error} !important;`}
    
    ${(props) =>
      props.checked &&
      !props.outline &&
      `
        stroke: ${theme.fields.background};
      `}

    path {
      stroke-width: 1;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
    
    ${(props) => {
      if (!props.outline) return

      return `
        path {
          stroke-width: 1;
          ${
            !props.isInvalid &&
            !props.disabled &&
            (props.checked
              ? `fill: ${theme.colors.primary};`
              : `fill: ${theme.colors.background};`)
          }
        }`
    }}
`

export const CheckboxField = styled.input.attrs((props) => ({}))`
  position: absolute;
  cursor: pointer;
  left: 0.4rem;
  z-index: 1;
  opacity: 0;
  margin: 0;

  ${(props) => props.disabled && `cursor: not-allowed;`}
`

export const CheckboxLabel = styled.label.attrs((props) => ({}))`
  cursor: pointer;
  font-size: 1.6rem;
  user-select: none;
  display: inline-flex;

  .checkLabel {
    align-self: center;
    margin-left: 0.3rem;
  }

  ${(props) => {
    if (props.disabled)
      return `cursor: not-allowed; color: ${theme.fields.disabled.textColor}`

    return `
      &:hover {
        .checkboxWrapper {
          background-color: ${transparentize(0.8, theme.colors.primary)};    
          ${
            props.isInvalid &&
            `background-color: ${transparentize(0.8, theme.colors.error)};`
          }
        }

        ${
          !props.inInvalid &&
          !props.disabled &&
          `
          .checkboxInner {
            border-color: ${theme.colors.primary};
          }`
        }
      }
    `
  }}
`
