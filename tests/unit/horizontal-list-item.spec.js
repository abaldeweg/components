import { mount, createLocalVue } from '@vue/test-utils'
import BHorizontalListItem from './../../src/components/BHorizontalList/BHorizontalListItem'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BHorizontalListItem', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BHorizontalListItem, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
