import { mount, createLocalVue } from '@vue/test-utils'
import BContainer from './../../src/components/BContainer/BContainer'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BContainer', () => {
  it('renders section element', () => {
    const $t = () => {}
    const wrapper = mount(BContainer, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('section').exists()).toBeTruthy()
  })
})
