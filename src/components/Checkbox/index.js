/**
 * CheckboxField
 * @description: CheckboxField component
 * @author: Daniele Covallero <web@giub.it>
 **/
import React, { useState, useEffect, forwardRef } from 'react'
import { Box, Flex } from 'rebass/styled-components'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
import * as C from './styled'

import theme from 'assets/theme'
import { Utils } from 'helpers'
import ErrorMessageField from '../ErrorMessage'

/**
 * Form input field
 */
const CheckboxField = forwardRef((props, ref) => {
  // 🧨 Props destructuring
  const {
    id,
    error,
    label,
    outline,
    checked,
    required,
    disabled,
    onChange,
    labelStyle,
    checkedValue,
    unCheckedValue,
  } = props

  // ⚓︎ Hooks (e.g. useState, useMemo ...)
  const [state, setState] = useState({ isChecked: checked })

  // 🏹 Effects
  useEffect(() => {
    setState({ ...state, isChecked: checked })
  }, [checked])

  useEffect(() => {
    onChange && onChange(state.isChecked ? checkedValue : unCheckedValue)
  }, [state.isChecked])

  // 🚀 Functions
  function handleChange() {
    setState({ ...state, isChecked: !state.isChecked })
  }

  function renderWithLabel(children) {
    if (label) {
      const formattedLabel = `${label}${required ? ' *' : ''}`
      return (
        <>
          <C.CheckboxLabel
            htmlFor={id}
            style={labelStyle}
            disabled={disabled}
            isInvalid={isInvalid}
          >
            <Flex>
              <Box>{children}</Box>
              <Box className="checkLabel">{formattedLabel}</Box>
            </Flex>
          </C.CheckboxLabel>
          <ErrorMessageField show={!!error}>{error?.message}</ErrorMessageField>
        </>
      )
    }

    return children
  }

  function renderCheck() {
    return (
      <svg viewBox="0 0 24 24" className="checkIcon">
        <motion.path
          d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"
          animate={state.isChecked ? 'visible' : 'hidden'}
          transition={{ duration: 0.4 }}
          variants={iconVariants}
          initial="hidden"
        />
      </svg>
    )
  }

  // 🧲 Local variables
  const primaryRgb = Utils.hex2Rgb(theme.colors.primary)
  const invalidRgb = Utils.hex2Rgb(theme.colors.error)
  const disabledRgb = Utils.hex2Rgb(theme.fields.disabled.borderColor)
  const currentValue = checked ? checkedValue : unCheckedValue
  const isInvalid = !!error

  let primaryFill = primaryRgb
  if (disabled) primaryFill = disabledRgb
  else if (isInvalid) primaryFill = invalidRgb

  let iconVariants = {}
  if (outline) {
    iconVariants = {
      hidden: {
        pathLength: 0,
        strokeDasharray: 0,
        fill: 'rgba(255, 255, 255, 0)',
        transitionEnd: {
          opacity: 0,
          pathLength: 1,
        },
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        strokeDasharray: 1,
        fill: `rgba(${primaryFill[0]}, ${primaryFill[1]}, ${primaryFill[2]}, 1)`,
      },
    }
  } else {
    iconVariants = {
      hidden: {
        pathLength: 0,
        strokeDasharray: 0,
        fill: `rgba(${primaryFill[0]}, ${primaryFill[1]}, ${primaryFill[2]}, 0)`,
        transitionEnd: {
          opacity: 0,
        },
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        strokeDasharray: 1,
        fill: !disabled
          ? 'rgba(255, 255, 255, 1)'
          : `rgba(${primaryFill[0]}, ${primaryFill[1]}, ${primaryFill[2]}, 1)`,
      },
    }
  }

  // ✏️ Render
  return (
    <>
      {renderWithLabel(
        <C.CheckboxWrapper
          outline={outline}
          hasError={!!error}
          disabled={disabled}
          isInvalid={isInvalid}
          checked={state.isChecked}
          className="checkboxWrapper"
          onClick={!label ? handleChange : undefined}
        >
          <div className="checkboxInner">
            <C.CheckboxField
              {...props}
              ref={ref}
              type="checkbox"
              value={currentValue}
              onChange={handleChange}
              checked={state.isChecked}
            />
            {renderCheck()}
          </div>
        </C.CheckboxWrapper>
      )}
    </>
  )
})

// 🧬 PropTypes
CheckboxField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.shape({}),
  outline: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  onChange: PropTypes.func,
  checkedValue: PropTypes.any,
  unCheckedValue: PropTypes.any,
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.shape({}), // useful 4 parentComponent to change alignment
  className: PropTypes.string, // from StyledComponent
}

CheckboxField.defaultProps = {
  name: '',
  outline: false,
  checkedValue: true,
  unCheckedValue: false,
  checked: false,
  readOnly: false,
  disabled: false,
  className: '',
}

export default CheckboxField
