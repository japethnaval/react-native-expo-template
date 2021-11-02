import React from 'react'
import { shallow } from 'enzyme'
import Textfield from './index'

describe('Textfield', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Textfield name="name" defaultValue="Useless text" />)
      expect(component).toMatchSnapshot()
    })
  })
})
