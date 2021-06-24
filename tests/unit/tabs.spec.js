import { mount, createLocalVue } from '@vue/test-utils'
import BTabs from './../../src/components/BTabs/BTabs'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BTabs', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BTabs, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
