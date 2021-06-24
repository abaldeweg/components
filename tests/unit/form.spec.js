import { mount, createLocalVue } from '@vue/test-utils'
import BForm from './../../src/components/BForm/BForm'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BForm', () => {
  it('renders form element', () => {
    const $t = () => {}
    const wrapper = mount(BForm, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('form').exists()).toBeTruthy()
  })
})
