import { mount, createLocalVue } from '@vue/test-utils'
import BFormTextarea from './../../src/components/BForm/BFormTextarea'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BFormTextarea', () => {
  it('renders textarea element', () => {
    const $t = () => {}
    const wrapper = mount(BFormTextarea, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('textarea').exists()).toBeTruthy()
  })
})
