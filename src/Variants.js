import React from 'react'

import { Checkbox } from './components'

export const DefaultWithLabel = () => <Checkbox checked label="Default" />

export const OutlineWithLabel = () => (
  <Checkbox checked outline label="Outline" />
)

export const ErrorWithLabel = () => (
  <Checkbox
    checked
    required
    label="Error"
    error={{ message: 'This field is required' }}
  />
)

export const ErrorOutlineWithLabel = () => (
  <Checkbox
    checked
    outline
    required
    label="Error outline"
    error={{ message: 'This field is required' }}
  />
)

export const Default = () => <Checkbox checked />

export const Outline = () => <Checkbox outline checked />

export const DefaultDisabled = () => (
  <Checkbox checked disabled label="Disabled field" />
)

export const DefaultDisabledUnchecked = () => (
  <Checkbox disabled label="Disabled field" />
)

export const DefaultDisabledWithError = () => (
  <Checkbox
    checked
    disabled
    label="Disabled field"
    error={{ message: 'General error' }}
  />
)

export const DefaultDisabledUncheckedWithError = () => (
  <Checkbox
    disabled
    required
    label="Disabled field"
    error={{ message: 'This field is required' }}
  />
)
