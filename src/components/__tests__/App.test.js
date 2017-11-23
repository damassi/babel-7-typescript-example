import React from 'react'
import { App } from 'components/App'
import { mount } from 'enzyme'

describe('<App />', () => {
  it('works with .tsx components', () => {
    const name = 'hello how are you'
    const wrapper = mount(<App name={name} />)
    expect(wrapper.text()).toContain(`hi ${name} from tsx!`)
  })
})
