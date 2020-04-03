<template>
  <b-form @submit.prevent="send">
    <div class="form_group">
      <div class="form_item">
        <label for="text" class="form_label">Text</label>
      </div>
      <div class="form_item">
        <input type="text" id="text" class="form_input" />
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="textarea" class="form_label">Textarea</label>
      </div>
      <div class="form_item">
        <textarea
          rows="5"
          cols="20"
          id="textarea"
          class="form_input"
          required
        ></textarea>
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="select_element" class="form_label">Options</label>
      </div>
      <div class="form_item">
        <select id="select_element" class="form_input">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
    </div>

    <fieldset class="form_group">
      <legend class="form_label">Checkbox</legend>
      <div class="form_item">
        <div class="form_item">
          <input type="checkbox" value="checkbox1" id="checkbox1" />
          <label for="checkbox1">Checkbox 1</label>
        </div>
      </div>
      <div class="form_item">
        <div class="form_item">
          <input type="checkbox" value="checkbox2" id="checkbox2" />
          <label for="checkbox2">Checkbox 2</label>
        </div>
      </div>
      <div class="form_item">
        <div class="form_item">
          <input type="checkbox" value="checkbox3" id="checkbox3" />
          <label for="checkbox3">Checkbox 3</label>
        </div>
      </div>
    </fieldset>

    <fieldset class="form_group">
      <legend class="form_label">Radio</legend>
      <div class="form_item">
        <input type="radio" value="radio1" id="radio1" />
        <label for="radio1">Radio 1</label>
      </div>
      <div class="form_item">
        <input type="radio" value="radio2" id="radio2" />
        <label for="radio2">Radio 2</label>
      </div>
    </fieldset>

    <div class="form_group">
      <div class="form_item">
        <label for="password" class="form_label">Password</label>
      </div>
      <div class="form_item">
        <input type="password" id="password" class="form_input" />
      </div>
    </div>
    <div class="form_group">
      <div class="form_item">
        <label for="file" class="form_label">File</label>
      </div>
      <div class="form_item">
        <input type="file" id="file" class="form_input" />
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="email" class="form_label">Email</label>
      </div>
      <div class="form_item">
        <input type="email" id="email" class="form_input" />
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="url" class="form_label">URL</label>
      </div>
      <div class="form_item">
        <input type="url" id="url" class="form_input" />
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="tel" class="form_label">Phone</label>
      </div>
      <div class="form_item">
        <input type="tel" id="tel" class="form_input" />
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="number" class="form_label">Number</label>
      </div>
      <div class="form_item">
        <input
          type="number"
          value="5"
          step="1"
          min="0"
          max="10"
          id="number"
          class="form_input"
        />
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="search" class="form_label">Search</label>
      </div>
      <div class="form_item">
        <input type="search" id="search" class="form_input" />
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="date" class="form_label">Date</label>
      </div>
      <div class="form_item">
        <input type="date" id="date" class="form_input" />
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="time" class="form_label">Time</label>
      </div>
      <div class="form_item">
        <input type="time" id="time" class="form_input" />
      </div>
    </div>

    <div class="form_group">
      <div class="form_item">
        <label for="text" class="form_label">Text</label>
      </div>
      <div class="form_item">
        <input
          type="text"
          id="text"
          class="form_input"
          autocomplete="off"
          v-model="item"
        />
        <b-form-autocomplete
          :query="item"
          :data="items"
          @item-selected="setItem"
        />
      </div>
    </div>

    <div class="form_group form_buttons">
      <div class="form_item">
        <b-button type="primary">Save</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
import BForm from '../components/BForm/BForm'
import BFormAutocomplete from '../components/BForm/BFormAutocomplete'
import BButton from '../components/BButton/BButton'

export default {
  name: 'b-form-view',
  components: {
    BForm,
    BFormAutocomplete,
    BButton,
  },
  data() {
    return {
      item: null,
      items: [
        { id: '1', name: 'item 1' },
        { id: '2', name: 'item 2' },
        { id: '3', name: 'item 3' },
      ],
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
}
</script>
