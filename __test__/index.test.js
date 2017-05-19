import React from 'react'
import AvatarEditor from '../'
import { mount } from 'enzyme'
import { JSDOM } from 'jsdom'

const { window } = new JSDOM('')

global.Image = window.Image

/* global test */
test('Link changes the class when hovered', () => {
  const checkbox = mount(
    <AvatarEditor
      width={200}
      height={200}
      image='data:image/png;base64,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'
    />
  )

  console.log(checkbox.getNode().canvas.toDataURL())
})