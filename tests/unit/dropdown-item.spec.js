import { mount, createLocalVue } from '@vue/test-utils'
import BDropdownItem from './../../src/components/BDropdown/BDropdownItem'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BDropdownItem', () => {
  it('renders li element', () => {
    const $t = () => {}
    const wrapper = mount(BDropdownItem, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('li').exists()).toBeTruthy()
  })
})
