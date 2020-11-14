/**
 * ErrorMessageField
 * @description: ErrorMessageField
 * @author: Daniele Covallero <web@giub.it>
 **/
import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

import * as C from './styled'

/**
 * Use this element as boilerplate
 */
const ErrorMessageField = forwardRef((props, ref) => {
  // 🧨 Props destructuring
  const { style, className, children, show } = props

  // ⚓︎ Hooks (e.g. useState, useMemo ...)

  // 🏹 Effects

  // 🚀 Functions

  // 🧲 Local variables

  // ✏️ Render
  if (!children || !show) return null

  return (
    <>
      <C.Wrapper className={className} style={style}>
        {props.children}
      </C.Wrapper>
    </>
  )
})

ErrorMessageField.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.shape({}),
}

ErrorMessageField.defaultProps = {
  active: false,
  className: '',
  style: {},
}

// https://storybook.js.org/docs/react/essentials/controls#annotation
ErrorMessageField.argTypes = {
  children: { control: 'text' },
}

ErrorMessageField.args = {
  // defaults
}

export default ErrorMessageField
