import { mount, createLocalVue } from '@vue/test-utils'
import BModal from './../../src/components/BModal/BModal'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BModal', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BModal, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
