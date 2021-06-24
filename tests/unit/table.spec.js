import { mount, createLocalVue } from '@vue/test-utils'
import BTable from './../../src/components/BTable/BTable'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BTable', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BTable, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
