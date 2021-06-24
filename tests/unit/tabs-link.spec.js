import { mount, createLocalVue } from '@vue/test-utils'
import BTabsLink from './../../src/components/BTabs/BTabsLink'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BTabsLink', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BTabsLink, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
