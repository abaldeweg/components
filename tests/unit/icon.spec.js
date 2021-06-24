import { mount, createLocalVue } from '@vue/test-utils'
import BIcon from './../../src/components/BIcon/BIcon'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BIcon', () => {
  it('renders svg element', () => {
    const $t = () => {}
    const wrapper = mount(BIcon, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('svg').exists()).toBeTruthy()
  })
})
