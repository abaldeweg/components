import { mount, createLocalVue } from '@vue/test-utils'
import BDropdown from './../../src/components/BDropdown/BDropdown'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BDropdown', () => {
  it('renders article element', () => {
    const $t = () => {}
    const wrapper = mount(BDropdown, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('article').exists()).toBeTruthy()
  })
})
