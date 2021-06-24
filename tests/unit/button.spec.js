import { mount, createLocalVue } from '@vue/test-utils'
import BButton from './../../src/components/BButton/BButton'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BButton', () => {
  it('renders button element', () => {
    const $t = () => {}
    const wrapper = mount(BButton, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('button').exists()).toBeTruthy()
  })
})
