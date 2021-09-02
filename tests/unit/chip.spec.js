import { mount, createLocalVue } from '@vue/test-utils'
import BChip from './../../src/components/BChip/BChip'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BChip', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BChip, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
