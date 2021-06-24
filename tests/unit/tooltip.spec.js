import { mount, createLocalVue } from '@vue/test-utils'
import BTooltip from './../../src/components/BTooltip/BTooltip'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BTooltip', () => {
  it('renders span element', () => {
    const $t = () => {}
    const wrapper = mount(BTooltip, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('span').exists()).toBeTruthy()
  })
})
