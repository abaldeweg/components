import { mount, createLocalVue } from '@vue/test-utils'
import BFormGroup from './../../src/components/BForm/BFormGroup'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BFormGroup', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BFormGroup, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
