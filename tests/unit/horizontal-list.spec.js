import { mount, createLocalVue } from '@vue/test-utils'
import BHorizontalList from './../../src/components/BHorizontalList/BHorizontalList'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BHorizontalList', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BHorizontalList, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
