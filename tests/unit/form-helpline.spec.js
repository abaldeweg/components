import { mount, createLocalVue } from '@vue/test-utils'
import BFormHelpline from './../../src/components/BForm/BFormHelpline'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BFormHelpline', () => {
  it('renders p element', () => {
    const $t = () => {}
    const wrapper = mount(BFormHelpline, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('p').exists()).toBeTruthy()
  })
})
