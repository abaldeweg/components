import { mount, createLocalVue } from '@vue/test-utils'
import BFormFieldset from './../../src/components/BForm/BFormFieldset'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BFormFieldset', () => {
  it('renders fieldset element', () => {
    const $t = () => {}
    const wrapper = mount(BFormFieldset, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('fieldset').exists()).toBeTruthy()
  })
})
