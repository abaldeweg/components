import { mount, createLocalVue } from '@vue/test-utils'
import BFormLabel from './../../src/components/BForm/BFormLabel'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BFormLabel', () => {
  it('renders label element', () => {
    const $t = () => {}
    const wrapper = mount(BFormLabel, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('label').exists()).toBeTruthy()
  })
})
