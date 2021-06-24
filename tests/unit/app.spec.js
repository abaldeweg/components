import { mount, createLocalVue } from '@vue/test-utils'
import BApp from './../../src/components/BApp/BApp'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BApp', () => {
  it('renders main element', () => {
    const $t = () => {}
    const wrapper = mount(BApp, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('main').exists()).toBeTruthy()
  })
})
