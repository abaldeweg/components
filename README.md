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
- title - string
- hidable - bool (default: false)

Slots

- default

### b-notification-bar

### b-app

Slots

- default

### b-content

Slots

- default

### b-masthead

Slots

- default - Logo

### b- divider

### b-code

Slots

- default

### b-container

Props

- size - l, m, s - (default l)

Slots

- default

### b-search

Props

- placeholder - String (default: Search)
- button - String (default: Search)

### b-slider

Slots

- default

### b-spinner

Props

- size - l, m, s (default: l )

### b-table

Slots

- default

### b-form

Slots

- default

### b-button

Props

- type - primary, primary_danger, primary_wide, outline, outline_danger, outline_wide, text, text_danger (default: primary)

Slots

- default

### b-card

Props

- image - full, wide, square, tiny (default: null)

Slots

- image
- title
- content
- options
- meta

### b-comment

Slots

- options
- header
- comment

### b-context-menu

Slots

- default

### b-off-canvas

Slots

- default

## Example

```html
<notification type="neutral" title="Title" hidable>
  This is a notification.
</notification>
```

## CLI

- yarn watch - Starts the development environment.
- yarn test - Runs the unit tests.
