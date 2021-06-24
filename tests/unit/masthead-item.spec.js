import { mount, createLocalVue } from '@vue/test-utils'
import BMastheadItem from './../../src/components/BMasthead/BMastheadItem'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BMastheadItem', () => {
  it('renders div element', () => {
    const $t = () => {}
    const wrapper = mount(BMastheadItem, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
