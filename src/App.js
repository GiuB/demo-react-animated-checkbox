import React from 'react'
import './assets/styles/app.css'

import { Credits } from './components'
import {
  DefaultWithLabel,
  OutlineWithLabel,
  ErrorWithLabel,
  ErrorOutlineWithLabel,
  DefaultDisabled,
  DefaultDisabledUncheckedWithError,
} from './Variants'

export default function App() {
  return (
    <>
      <div style={{ maxWidth: '50rem', margin: '5rem auto 0 auto' }}>
        <DefaultWithLabel />
        <br />
        <OutlineWithLabel />
        <br />
        <ErrorWithLabel />
        <ErrorOutlineWithLabel />
        <DefaultDisabled />
        <br />
        <DefaultDisabledUncheckedWithError />
      </div>
      <Credits />
    </>
  )
}
