import { mount, createLocalVue } from '@vue/test-utils'
import BSpinner from './../../src/components/BSpinner/BSpinner'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BSpinner', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BSpinner, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
