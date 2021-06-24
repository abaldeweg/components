import { mount, createLocalVue } from '@vue/test-utils'
import BDropdownDivider from './../../src/components/BDropdown/BDropdownDivider'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BDropdownDivider', () => {
  it('renders hr element', () => {
    const $t = () => {}
    const wrapper = mount(BDropdownDivider, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('hr').exists()).toBeTruthy()
  })
})
