import { mount, createLocalVue } from '@vue/test-utils'
import BBottomNav from './../../src/components/BBottomNav/BBottomNav'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BBottomNav', () => {
  it('renders header element', () => {
    const $t = () => {}
    const wrapper = mount(BBottomNav, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('header').exists()).toBeTruthy()
  })
})
