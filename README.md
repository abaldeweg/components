# baldeweg/components

UI Components

## Requirements

- NodeJS 12LTS
- Yarn

## Getting Started

Install the package with the following command.

```shell
yarn add @baldeweg/components
```

Then you can add this to your `main.js`.

```js
import components from '@baldeweg/components'

Vue.use(components)
```

Now, you can choose from the components.

## Components

### b-notification

Props

- type - neutral, warning, caution, success (default: neutral)
- title - string (optional)
- hidable - bool (default: false)

Slots

- default

Example

```html
<notification type="neutral" title="Title" hidable>
  This is a notification.
</notification>
```

### b-notification-bar

Slots

- default

### b-app

Slots

- default

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
}
html[dark] {
  /* Primary */
  --color-primary-10: #e1661e;
  --color-primary-05: #eeab84;
  --color-primary-00: #fcf1ea;
  /* Neutral */
  --color-neutral-10: #ffffff;
  --color-neutral-08: #cbcbcb;
  --color-neutral-06: #b8b8b8;
  --color-neutral-04: #828282;
  --color-neutral-02: #4f4f4f;
  --color-neutral-00: #333333;
}
```

### b-content

Slots

- default

### b-masthead

Props

- showMenu - bool
- showSettings - bool

Slots

- default - Logo

Events

- toggleMenu
- toggleSettings

### b-divider

### b-code

Slots

- default

### b-container

Props

- size - l, m, s - (default l)
- align - left, right, center (default left)

Slots

- default

### b-search

Props

- placeholder - String (default: Search)
- button - String (default: Search)
- term - String

Events

- input - String

### b-slider

Slots

- default

### b-spinner

Props

- size - l, m, s (default: l )

### b-table

Slots

- default

Its just a wrapper, make use of the HTML table elements, including `<table>`.

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

### b-form-autocomplete

Props

- query
- data

Event

- item-selected

### b-button

Props

- type - primary, primary_danger, primary_wide, outline, outline_danger, outline_wide, text, text_danger (default: primary)

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

### b-comment

Props

- author - String (optional)
- date - String (optional)

Slots

- actions (optional)
- comment

The actions must be placed in a button with class `comment_btn`.

Example

```html
<button class="comment_btn">
  Edit
</button>
```

### b-off-canvas

Props

- active - bool

Slots

- default

Events

- open-menu
- close-menu

The component needs you to have a structure like this.

```html
<ul class="offcanvas_nav">
  <li class="offcanvas_item">
    <a href="/" class="offcanvas_link">Item 1</a>
  </li>
  <li class="offcanvas_item">
    <a href="/" class="offcanvas_link">Item 2</a>
  </li>
  <li class="offcanvas_item">
    <a href="/" class="offcanvas_link">Item 3</a>
  </li>
</ul>
<b-divider />
<ul class="offcanvas_nav">
  <li class="offcanvas_item">
    <a href="/" class="offcanvas_link">Item 1</a>
  </li>
  <li class="offcanvas_item">
    <a href="/" class="offcanvas_link">Item 2</a>
  </li>
  <li class="offcanvas_item">
    <a href="/" class="offcanvas_link">Item 3</a>
  </li>
</ul>
```

### b-list

Slots

- image (optional)
- title
- options (optional)
- meta (optional)

The options must be wrapped in a `<b-dropdown-item>` element.

Example

```html
<b-dropdown-item>
  Edit 1
</b-dropdown-item>
```

### b-list-separator

### b-dropdown

Props

- flex (default: false)

Slots

- selector
- default

Add `.dropdown_btn` class to buttons in <b-dropdown>.

### b-dropdown-item

Slots

- default

This is a subcomponent of b-dropdown.

Example

```html
<b-dropdown>
  <b-dropdown-item>
    <a href="/">Item 1</a>
  </b-dropdown-item>
</b-dropdown>
```

In case you need a button add it a class `dropdown_btn`.

Example

```html
<b-dropdown>
  <b-dropdown-item>
    <button class="dropdown_btn">Item 1</button>
  </b-dropdown-item>
</b-dropdown>
```

### b-toggle

Props

- label - String
- value - Boolean (default false)

Events

- input

## Directives

### v-focus

## CLI

- yarn watch - Starts the development environment.
- yarn test - Runs the unit tests.
