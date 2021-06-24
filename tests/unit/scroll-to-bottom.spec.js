import { mount, createLocalVue } from '@vue/test-utils'
import BScrollToBottom from './../../src/components/BScrollToBottom/BScrollToBottom'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BScrollToBottom', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BScrollToBottom, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
