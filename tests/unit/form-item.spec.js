import { mount, createLocalVue } from '@vue/test-utils'
import BFormItem from './../../src/components/BForm/BFormItem'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BFormItem', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BFormItem, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
