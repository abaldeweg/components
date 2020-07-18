<template>
  <b-form @submit.prevent="send">
    <b-form-group>
      <b-form-item>
        <b-form-label for="text">Text</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="text" id="text" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="textarea">Textarea</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-textarea
          rows="5"
          cols="20"
          id="textarea"
          required
          v-model="textarea"
        ></b-form-textarea>
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="select_element">Options</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-select id="select_element" v-model="select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </b-form-select>
      </b-form-item>
    </b-form-group>

    <b-form-fieldset>
      <b-form-legend>Checkbox</b-form-legend>
      <b-form-item>
        <b-form-item>
          <input
            type="checkbox"
            name="checkbox"
            value="checkbox1"
            id="checkbox1"
          />
          <b-form-label for="checkbox1">Checkbox 1</b-form-label>
        </b-form-item>
      </b-form-item>
      <b-form-item>
        <b-form-item>
          <input
            type="checkbox"
            name="checkbox"
            value="checkbox2"
            id="checkbox2"
          />
          <b-form-label for="checkbox2">Checkbox 2</b-form-label>
        </b-form-item>
      </b-form-item>
      <b-form-item>
        <b-form-item>
          <input
            type="checkbox"
            name="checkbox"
            value="checkbox3"
            id="checkbox3"
          />
          <b-form-label for="checkbox3">Checkbox 3</b-form-label>
        </b-form-item>
      </b-form-item>
    </b-form-fieldset>

    <b-form-fieldset>
      <b-form-legend>Radio</b-form-legend>
      <b-form-item>
        <input type="radio" name="radio" value="radio1" id="radio1" />
        <b-form-label for="radio1">Radio 1</b-form-label>
      </b-form-item>
      <b-form-item>
        <input type="radio" name="radio" value="radio2" id="radio2" />
        <b-form-label for="radio2">Radio 2</b-form-label>
      </b-form-item>
    </b-form-fieldset>

    <b-form-group>
      <b-form-item>
        <b-form-label for="password">Password</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="password" id="password" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="file">File</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="file" id="file" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="email">Email</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="email" id="email" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="url">URL</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="url" id="url" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="tel">Phone</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="tel" id="tel" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="number">Number</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="number"
          value="5"
          step="1"
          min="0"
          max="10"
          id="number"
        />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="search">Search</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="search" id="search" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="date">Date</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="date" id="date" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="time">Time</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input type="time" id="time" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="item">Text</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-autosuggest :data="items" id="item" v-model="item" />
      </b-form-item>
    </b-form-group>

    <b-form-group buttons>
      <b-form-item>
        <b-button design="primary">Save</b-button>
      </b-form-item>
    </b-form-group>
  </b-form>
</template>

<script>
import BForm from '../components/BForm/BForm'
import BFormAutosuggest from '../components/BForm/BFormAutosuggest'
import BButton from '../components/BButton/BButton'
import BFormGroup from '../components/BForm/BFormGroup'
import BFormFieldset from '../components/BForm/BFormFieldset'
import BFormLegend from '../components/BForm/BFormLegend'
import BFormItem from '../components/BForm/BFormItem'
import BFormLabel from '../components/BForm/BFormLabel'
import BFormTextarea from '../components/BForm/BFormTextarea'
import BFormInput from '../components/BForm/BFormInput'
import BFormSelect from '../components/BForm/BFormSelect'

export default {
  name: 'b-form-view',
  components: {
    BForm,
    BFormAutosuggest,
    BButton,
    BFormGroup,
    BFormFieldset,
    BFormLegend,
    BFormItem,
    BFormLabel,
    BFormTextarea,
    BFormInput,
    BFormSelect,
  },
  data() {
    return {
      item: null,
      items: { 1: 'item 1', 2: 'item 2', 3: 'item 3' },
      textarea: 'text',
      select: null,
    }
  },
  methods: {
    setItem: function (item) {
      this.item = item.name
    },
    send: function () {
      console.log('send')
    },
  },
  watch: {
    item: function (item) {
      console.log(item)
    },
    textarea: function (textarea) {
      console.log(textarea)
    },
    select: function (select) {
      console.log(select)
    },
  },
}
</script>
