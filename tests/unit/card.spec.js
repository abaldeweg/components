import { mount, createLocalVue } from '@vue/test-utils'
import BCard from './../../src/components/BCard/BCard'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BCard', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BCard, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
