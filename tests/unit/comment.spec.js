import { mount, createLocalVue } from '@vue/test-utils'
import BComment from './../../src/components/BComment/BComment'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BComment', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BComment, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
