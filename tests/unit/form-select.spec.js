import { mount, createLocalVue } from '@vue/test-utils'
import BFormSelect from './../../src/components/BForm/BFormSelect'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BFormSelect', () => {
  it('renders select element', () => {
    const $t = () => {}
    const wrapper = mount(BFormSelect, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('select').exists()).toBeTruthy()
  })
})
