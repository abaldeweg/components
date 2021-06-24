import { mount, createLocalVue } from '@vue/test-utils'
import BDrawer from './../../src/components/BDrawer/BDrawer'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BDrawer', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BDrawer, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
