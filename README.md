# baldeweg/components

UI Components

## Requirements

- NodeJS 12LTS
- Yarn
- VueJS Binary

## Getting Started

Install the package with the following command.

```shell
yarn add @baldeweg/components
```

Then you can add this to your `main.js`.

```js
import components from '@baldeweg/components'

Vue.use(components)
Vue.themes()
```

Add the styles to App.vue.

```html
<style src="@baldeweg/components/dist/components.css" />
```

Example Layout

```js
<b-app>
  <b-container size="m">
    <p>Content</p>
  </b-container>
</b-app>
```

Now, you can choose from the components.

## Components

### b-app

Slots

- default

Do not forget to set the attribute `id="app"` here, if not otherwise done.

This component defines some vars, which you can overwrite.

```css
html {
  /* Primary */
  --color-primary-10: #0000ff;
  --color-primary-05: #8b8bff;
  --color-primary-00: #e7e7ff;
  /* Neutral */
  --color-neutral-10: #333333;
  --color-neutral-08: #4f4f4f;
  --color-neutral-06: #828282;
  --color-neutral-04: #b8b8b8;
  --color-neutral-02: #cbcbcb;
  --color-neutral-00: #ffffff;
  /* Accent */
  --color-accent-red-10: #ff0000;
  --color-accent-red-05: #ff7373;
  --color-accent-red-00: #ffe7e7;
  --color-accent-green-10: #00ff00;
  --color-accent-green-05: #8bff8b;
  --color-accent-green-00: #e7ffe7;
  --color-accent-yellow-10: #f1d302;
  --color-accent-yellow-05: #f8eb8c;
  --color-accent-yellow-00: #fdfbe8;
  /* Font */
  --font-sans: 'Open Sans', 'Liberation Sans', 'Helvetica Neue', Arial;
  --font-serif: Georgia, Constantia, 'DejaVu Serif', 'Times New Roman';
  --font-monospace: Consolas, 'Liberation Mono', 'Lucida Console';
  /* Misc */
  --masthead-height: 50px;
  --bottom-nav-height: 60px;
}
```

### b-button

Props

- design - primary, primary_danger, primary_wide, outline, outline_danger, outline_wide, text, text_danger (default: primary)
- ripple - Bool (default: false)

Slots

- default

Events

- click

### b-card

Props

- title
- route

Slots

- image (optional)
- content
- meta (optional)

### b-card-separator

### b-code

Slots

- default

### b-comment

Props

- author - String (optional)
- date - String (optional)

Slots

- actions (optional)
- default

### b-container

Props

- size - l, m, s - (default l)
- align - left, right, center (default left)
- highlight - Boolean

Slots

- default

### b-divider

Props

- size - l, m, s, xs, (default l)

### b-dropdown

Props

- position - selector, mouse, bottom (default: selector)

Slots

- default
- selector

### b-dropdown-item

Props

- bold (optional) - bool, default: false
- no-hover (optional) - bool, default: false
- icon (optional) - all in b-icon allowed icons, default: null

Slots

- default

Events

- click

Example

```html
<b-dropdown position="mouse">
  <template #selector>
    <button>Dropdown</button>
  </template>
  <b-dropdown-item icon="bin" @click.prevent="action">Item</b-dropdown-item>
</b-dropdown>
```

### b-dropdown-divider

### b-form

Slots

- default

Events

- submit

The form component is just a wrapper, you have to assign classes to your elements. Please omit the `<form>` element itself.

Example

```html
<div class="form_group">
  <div class="form_item">
    <label for="text" class="form_label">Text</label>
  </div>
  <div class="form_item">
    <input type="text" id="text" class="form_input" />
  </div>
</div>
```

### b-form-group

Props

- buttons - bool (default false)

Slots

- default

### b-form-item

Slots

- default

### b-form-input

Not applicable to checkbox and radio.

Props

- value
- no-styling - Bool (default false)
- event - Bool (default: false)
- focus - Bool (default: false)

Events

- input
- change

### b-form-select

Props

- value - String
- items - Array [{key: String, name: String}]
- focus - Bool (default: false)

Slots

- default

Events

- input
- change

### b-form-textarea

Props

- value
- focus - Bool (default: false)

Events

- input
- change
- click
- contextmenu

### b-form-label

Slots

- default

### b-form-fieldset

Slots

- default

### b-form-legend

Slots

- default

### b-form-helpline

Slots

- default

### b-icon

Props

- type - apps, bin, star, close, check, download, filter, hamburger, minus, pause, pencil, play, plus, profile, kebab, meatballs, moon, dollar, search, euro
- size - int (default 25)
- no-hover - bool (default false)
- color - String (e.g. hex code custom properties)

### b-list

Props

- route - String
- bold - Bool (default: false)
- divider - Bool (default: false)

Slots

- title
- image (optional)
- options (optional)
- meta (optional)

### b-masthead

Slots

- default

### b-masthead-item

Props

- type - String (start, center or end), Default: start

Slots

- default

### b-bottom-nav

Props

- title - String

Slots

- default

Events

- click
  - Mousevent

### b-bottom-nav-item

Items should be sized 35x35 pixel.

Slots

- default

### b-modal

Props

- width - Number, default: 600, defines the max-width property
- close-button - Boolean, default: true

Slots

- default
- title
- footer

Events

- close
  - type - String

If you use a form, consider wrapping the modal with it.

### b-notification-bar

Props

- position - top, bottom (default: top)

Slots

- default

### b-notification

Props

- type - neutral, warning, error, success (default: neutral)
- title - string (optional)
- undo - function|null (optional, default null)
- hidable - bool (default: false)

Slots

- default

Example

```html
<notification type="neutral" title="Title" :undo="undo()" hidable>
  This is a notification.
</notification>
```

### b-drawer

Props

- active - Bool (default: false)
- collapsable - bool (default: false)
- inline : Bool (default: false)

Slots

- default

Events

- open-menu
- close-menu

### b-scroll-to-bottom

Props

- width - int (default 0) - 0 results to full width, all values are pixel values
- height - int (default 0) - 0 results in 100vh minus masthead height, all values are pixel values

Slots

- default

### b-search

Props

- placeholder - String
- filter - Bool, default: false, Shows a filter icon.
- branded - Bool (default: false)
- focus - Bool (default: false)

Events

- input
- submit
- filter
- reset

### b-spinner

Props

- size - l, m, s (default: l )

### b-table

Slots

- default

Its just a wrapper, make use of the HTML table elements, including `<table>`.

### b-switch

Props

- label - String
- value - Boolean (default false)

Events

- input

### b-tooltip

### b-horizontal-list

Slots

- default

### b-horizontal-list-item

Props

- size - String (s, m, l), default: m

Slots

- default

### b-tabs

Slots

- default

### b-tabs-link

Slots

- default

## Directives

### v-focus

### v-tooltip

Modifiers

- top
- bottom
- left
- right

## Services

### notification

Create and show notifications.

- list() - returns all notifications
- create(msg, state, timer, undo)
  - msg - The message itself
  - state - neutral, warning, error, success (default neutral)
  - timer - Ho much milliseconds the message should be shown (default 5000)
  - undo - Function, if you have to revert an action. (default null)

Example

```vue
<b-notification-bar>
  <b-notification
    v-for="notification in notifications"
    :key="notification.id"
    :type="notification.state"
    :undo="notification.undo"
    hidable
  >
    {{ notification.msg }}
  </b-notification>
</b-notification-bar>

export default {
  name: 'notification',
  data() {
    return {
      notifications: this.$notify.list(),
    }
  },
}
```

### validator

- choices(choices, value) - returns a boolean
  - choices - array of valid values
  - value - the value you want to check

Example

```vue
this.$validator.choices(choices, value)
```

## CLI

- yarn watch - Starts the development environment.
- yarn test - Runs the unit tests.
