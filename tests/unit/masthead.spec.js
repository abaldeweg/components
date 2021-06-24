import { mount, createLocalVue } from '@vue/test-utils'
import BMasthead from './../../src/components/BMasthead/BMasthead'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BMasthead', () => {
  it('renders header element', () => {
    const $t = () => {}
    const wrapper = mount(BMasthead, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('header').exists()).toBeTruthy()
  })
})
