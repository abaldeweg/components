import { mount, createLocalVue } from '@vue/test-utils'
import BFormLegend from './../../src/components/BForm/BFormLegend'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BFormLegend', () => {
  it('renders legend element', () => {
    const $t = () => {}
    const wrapper = mount(BFormLegend, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('legend').exists()).toBeTruthy()
  })
})
