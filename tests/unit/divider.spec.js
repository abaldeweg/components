import { mount, createLocalVue } from '@vue/test-utils'
import BDivider from './../../src/components/BDivider/BDivider'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BDivider', () => {
  it('renders hr element', () => {
    const $t = () => {}
    const wrapper = mount(BDivider, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('hr').exists()).toBeTruthy()
  })
})
