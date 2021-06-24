import { mount, createLocalVue } from '@vue/test-utils'
import BBottomNavItem from './../../src/components/BBottomNav/BBottomNavItem'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BBottomNavItem', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BBottomNavItem, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
