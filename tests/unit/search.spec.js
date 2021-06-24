import { mount, createLocalVue } from '@vue/test-utils'
import BSearch from './../../src/components/BSearch/BSearch'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BSearch', () => {
  it('renders form element', () => {
    const $t = () => {}
    const wrapper = mount(BSearch, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('form').exists()).toBeTruthy()
  })
})
