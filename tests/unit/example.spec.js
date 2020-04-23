import { shallowMount } from '@vue/test-utils'
import Index from './../../src/components/BApp/BApp'

describe('Index', () => {
  it('renders a section', () => {
    const $store = {
      state: {},
      dispatch: function () {
        return
      }
    }
    const $route = {
      path: '/',
      hash: '',
      params: {
        id: '123'
      },
      query: {
        q: 'hello'
      }
    }
    const wrapper = shallowMount(Index, {
      propsData: {},
      mocks: {
        $store,
        $route
      }
    })
    wrapper.setData({})
    wrapper.setProps({})

    expect(wrapper.contains('div')).toBe(true)
  })
})
