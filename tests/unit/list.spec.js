import { mount, createLocalVue } from '@vue/test-utils'
import BList from './../../src/components/BList/BList'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BList', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BList, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
