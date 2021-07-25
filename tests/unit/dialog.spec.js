import { mount, createLocalVue } from '@vue/test-utils'
import BDialog from './../../src/components/BDialog/BDialog'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BDialog', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BDialog, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
