import { mount, createLocalVue } from '@vue/test-utils'
import BSwitch from './../../src/components/BSwitch/BSwitch'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BSwitch', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BSwitch, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
