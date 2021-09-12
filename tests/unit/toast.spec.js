import { mount, createLocalVue } from '@vue/test-utils'
import BToast from './../../src/components/BToast/BToast'
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('BToast', () => {
  it('show a toast', () => {
    const $t = () => {}
    const wrapper = mount(BToast, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })
    wrapper.vm.show()

    expect(wrapper.vm.state.isVisible).toBeTruthy()
  })
})
