import { mount, createLocalVue } from '@vue/test-utils'
import BCode from './../../src/components/BCode/BCode'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BCode', () => {
  it('renders pre element', () => {
    const $t = () => {}
    const wrapper = mount(BCode, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('pre').exists()).toBeTruthy()
  })
})
