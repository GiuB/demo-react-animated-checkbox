/**
 * Credits
 * @description: Used to certer an limit max-width
 * @author: Daniele Covallero <web@giub.it>
 **/

import React from 'react'

import * as C from './styled'
import Me from '../../assets/img/me.jpeg'

export default function Credits(props) {
  return (
    <C.CreditsWrapper>
      <h1>Demo React Animated Checkbox</h1>
      <sub style={{ color: 'green' }}>
        How a checkbox should me in my perspective 🤓
      </sub>
      <br />
      <br />
      <p>
        This demo is a small piece of my pattern-library created with{' '}
        <a href="https://www.framer.com/motion/">FramerMotion</a> for 3d
        animations & some dummy{' '}
        <a href="https://styled-components.com/">stlyed-components</a> for css.
        <br />
        <br />
      </p>
      <p>
        FullScreen Demo:{' '}
        <a href="https://2zogt.csb.app/">https://2zogt.csb.app/</a>
        <br />
        Playgorund:{' '}
        <a href="https://codesandbox.io/s/young-smoke-2zogt">
          https://codesandbox.io/s/young-smoke-2zogt
        </a>
        <br />
        Source code:{' '}
        <a href="https://github.com/GiuB/react-swiper-3d-gallery/tree/master/src">
          github
        </a>
      </p>
      <br />
      <h3>For any question:</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 60, borderRadius: '50%', marginRight: 20 }}>
          <img
            src={Me}
            alt="react web developer"
            style={{ borderRadius: '50%' }}
          />
        </div>
        <div>
          <a href="https://www.linkedin.com/">Daniele Covallero</a>
        </div>
      </div>
    </C.CreditsWrapper>
  )
}
