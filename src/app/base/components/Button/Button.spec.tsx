import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Button text="test label" />)
      expect(component).toMatchSnapshot()
    })
  })
})
