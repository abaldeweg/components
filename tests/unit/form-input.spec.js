import { mount, createLocalVue } from '@vue/test-utils'
import BFormInput from './../../src/components/BForm/BFormInput'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BFormInput', () => {
  it('renders input element', () => {
    const $t = () => {}
    const wrapper = mount(BFormInput, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('input').exists()).toBeTruthy()
  })
})
