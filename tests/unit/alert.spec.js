import { mount, createLocalVue } from '@vue/test-utils'
import BAlert from './../../src/components/BAlert/BAlert'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BAlert', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BAlert, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
